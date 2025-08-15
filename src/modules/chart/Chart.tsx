'use client';

import Select from '@/components/inputs/Select';
import { fetchRevenue } from '@/redux/slice/revenueSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { CircularProgress } from '@mui/material';
import React,  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


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

const Chart = async () => {

  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((state: RootState) => state.revenue)

  const isMobile = useIsMobile(768);
  const chartData = isMobile ? data.slice(0, 6) : data;

  useEffect(() => {
    dispatch(fetchRevenue());
  }, [dispatch]);

  console.log(data, 'data...');

  return (
    <div className="flex flex-col bg-[#fff] h-[291px] md:h-[391px] w-[336px] md:w-[768px] lg:w-[1000px] mx-auto rounded-[6px] p-1 md:p-5 lg:p-[25px] gap-2 ">
        <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h4 className="text-[#000000] text-[14px] font-[700] leading-[35px]">Revenue</h4>
                <div className="hidden md:flex items-center gap-1.5">
                    <span className="text-green-400 text-[14px] font-[300] leading-[24px]">+0.00%</span>
                    <span className="text-[#000000] text-[14px] font-[300] leading-[20px]">vs Last 7 days</span>
                </div>

                <Select options={options} className='' className1='md:hidden border-1 rounded-2xl border-[#C4C8D3] px-2 py-1 flex ml-auto'/>
            </div>

            <div className="hidden md:flex items-center gap-4">
                 <h4 className="text-[#424242] text-[28px] font-700] leading-[35px]">₦0.00</h4>
                <span className="text-[#000000] text-[13px] font-[400] leading-[24px]">in total value</span>
            </div>
        </div>
          {loading ?

          <div className="flex w-full h-full m-auto text-[#000] bg-black">
            <CircularProgress/>
            <span className="">Loading...</span>
          </div>:
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
          }
    </div>
  );
};

export default Chart;
