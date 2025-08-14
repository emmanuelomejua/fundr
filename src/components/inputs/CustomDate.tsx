'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isWithinInterval,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

type Range = { startDate: Date | null; endDate: Date | null };

type Props = {
  value?: Range;
  onChange?: (range: Range) => void;
  className?: string;
  placeholder?: string;
};

const DateRangePicker: React.FC<Props> = ({
  value,
  onChange,
  className = '',
  placeholder = 'Select date range',
}) => {
  // Uncontrolled internal state (falls back when `value` not provided)
  const [internal, setInternal] = useState<Range>(() => {
    const end = new Date();
    const start = addDays(end, -9);
    return { startDate: start, endDate: end };
  });

  const range = value ?? internal;

  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState<Date>(() =>
    range.startDate ?? new Date()
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Keep displayed month in view when selecting new start
  useEffect(() => {
    if (range.startDate) setMonth(range.startDate);
  }, [range.startDate?.toDateString()]);

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(month), { weekStartsOn: 0 });
    const end = endOfWeek(endOfMonth(month), { weekStartsOn: 0 });

    const grid: Date[] = [];
    let d = start;
    while (isBefore(d, end) || isSameDay(d, end)) {
      grid.push(d);
      d = addDays(d, 1);
    }
    return grid;
  }, [month]);

  const setRange = (next: Range) => {
    if (!value) setInternal(next);
    onChange?.(next);
  };

  const handleDayClick = (day: Date) => {
    const { startDate, endDate } = range;

    // No start yet OR complete range already chosen: start a new range
    if (!startDate || (startDate && endDate)) {
      setRange({ startDate: day, endDate: null });
      return;
    }

    // Picking the end
    if (startDate && !endDate) {
      // If picked day is before start, swap
      if (isBefore(day, startDate)) {
        setRange({ startDate: day, endDate: startDate });
      } else if (isSameDay(day, startDate)) {
        // Single-day range allowed
        setRange({ startDate: day, endDate: day });
      } else {
        setRange({ startDate, endDate: day });
      }
      return;
    }
  };

  const isInRange = (day: Date) => {
    const { startDate, endDate } = range;
    if (!startDate) return false;
    if (startDate && endDate) {
      return isWithinInterval(day, {
        start: isBefore(startDate, endDate) ? startDate : endDate,
        end: isAfter(endDate, startDate) ? endDate : startDate,
      });
    }
    return isSameDay(day, startDate);
  };

  const isStart = (day: Date) =>
    range.startDate ? isSameDay(day, range.startDate) : false;

  const isEnd = (day: Date) =>
    range.endDate ? isSameDay(day, range.endDate) : false;

  const labelText = useMemo(() => {
    const { startDate, endDate } = range;
    if (startDate && endDate) {
      return `${format(startDate, 'MMMM d, yyyy')} - ${format(
        endDate,
        'MMM d, yyyy'
      )}`;
    }
    if (startDate && !endDate) {
      return `${format(startDate, 'MMMM d, yyyy')} - …`;
    }
    return placeholder;
  }, [range.startDate, range.endDate, placeholder]);

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 rounded-lg border border-[#E4E7EC] px-3 py-2 text-sm text-[#667085] hover:bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {/* Calendar icon (currentColor, so it turns grey/white with text) */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="shrink-0"
        >
          <path
            d="M7 2v2M17 2v2M3.5 9.5h17M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span className="whitespace-nowrap">
          {labelText}
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-2 w-[320px] rounded-xl border border-[#E4E7EC] bg-white p-3 shadow-lg">
          {/* Header: month nav */}
          <div className="mb-2 flex items-center justify-between">
            <button
              aria-label="Previous month"
              className="rounded-md px-2 py-1 text-[#667085] hover:bg-[#F2F4F7]"
              onClick={() => setMonth((m) => addMonths(m, -1))}
            >
              ‹
            </button>
            <div className="text-sm font-medium text-[#344054]">
              {format(month, 'MMMM yyyy')}
            </div>
            <button
              aria-label="Next month"
              className="rounded-md px-2 py-1 text-[#667085] hover:bg-[#F2F4F7]"
              onClick={() => setMonth((m) => addMonths(m, 1))}
            >
              ›
            </button>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 gap-1 text-center text-[11px] text-[#98A2B3]">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* Days grid */}
          <div className="mt-1 grid grid-cols-7 gap-1 text-sm">
            {days.map((day) => {
              const inCurrentMonth = isSameMonth(day, month);
              const active = isInRange(day);
              const start = isStart(day);
              const end = isEnd(day);

              // Middle-of-range styling (pill)
              const middle =
                active && !(start || end);

              return (
                <button
                  key={day.toISOString()}
                  onClick={() => handleDayClick(day)}
                  className={[
                    'relative h-9 w-9 rounded-md',
                    'flex items-center justify-center',
                    'focus:outline-none focus:ring-2 focus:ring-indigo-500',
                    inCurrentMonth ? 'text-[#344054]' : 'text-[#98A2B3]',
                    middle ? 'bg-[#F2F4F7]' : '',
                    (start || end) ? 'bg-[#111827] text-white rounded-full' : '',
                    !inCurrentMonth ? 'opacity-60' : '',
                    'hover:bg-[#F2F4F7]',
                  ].join(' ')}
                >
                  {format(day, 'd')}
                </button>
              );
            })}
          </div>

          {/* Footer actions */}
          <div className="mt-3 flex items-center justify-between">
            <button
              className="text-xs text-[#667085] underline hover:text-[#475467]"
              onClick={() => setRange({ startDate: null, endDate: null })}
            >
              Clear
            </button>
            <button
              className="rounded-md bg-[#111827] px-3 py-1.5 text-xs font-medium text-white hover:opacity-90"
              onClick={() => setOpen(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
