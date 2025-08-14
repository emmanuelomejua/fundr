'use client';

import Select from '@/components/inputs/Select';
import React,  { useEffect, useMemo, useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    revenue: 4000,
  },
  {
    name: 'Feb',
    revenue: 3000,
  },
  {
    name: 'Mar',
    revenue: 2000,
  },
  {
    name: 'Apr',
    revenue: 2780,
  },
  {
    name: 'May',
    revenue: 1890,
  },
  {
    name: 'Jun',
    revenue: 2390,
  },
  {
    name: 'Jul',
    revenue: 3490,
  },
  {
    name: 'Aug',
    revenue: 3490,
  },
    {
    name: 'Sep',
    revenue: 3490,
  },
    {
    name: 'Oct',
    revenue: 3490,
  },
    {
    name: 'Nov',
    revenue: 3490,
  },
    {
    name: 'Dec',
    revenue: 3490,
  },
];


function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    // Add/remove listener (handles older browsers too)
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, [breakpoint]);
  return isMobile;
}


const options = [
    {label: 'Weekly', value: 'Weekly'},
    {label: 'Monthly', value: 'Weekly'},
]

const Chart = () => {

    const isMobile = useIsMobile(768);
    const chartData = isMobile ? data.slice(0, 6) : data;

  return (
    <div className="flex flex-col bg-[#fff] h-[291px] md:h-[391px] w-[336px] md:w-[768px] lg:w-[1000px] mx-auto rounded-[6px] p-1 md:p-5 lg:p-[25px] gap-2 ">
        <div className="flex flex-col">
            <div className="flex items-center justify-between gap-4">
                <h4 className="text-[#000000] text-[14px] font-[700] leading-[35px]">Revenue</h4>
                <div className="hidden md:flex items-center gap-1.5">
                    <span className="text-green-400 text-[14px] font-[300] leading-[24px]">+0.00%</span>
                    <span className="text-[#000000] text-[14px] font-[300] leading-[20px]">vs Last 7 days</span>
                </div>

                <Select options={options} className='' className1='md:hidden border-1 rounded-2xl border-[#C4C8D3] px-2 py-1'/>
            </div>

            <div className="hidden md:flex items-center gap-4">
                 <h4 className="text-[#424242] text-[28px] font-700] leading-[35px]">₦0.00</h4>
                <span className="text-[#000000] text-[13px] font-[400] leading-[24px]">in total value</span>
            </div>
        </div>
        <ResponsiveContainer width='90%' height='100%'>
        <BarChart
            data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} />
            <YAxis axisLine={false} />
            {/* <Tooltip /> */}
            <Bar dataKey="revenue" fill="#FFC145" barSize={17} activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
        </ResponsiveContainer>

    </div>
  );
};

export default Chart;
