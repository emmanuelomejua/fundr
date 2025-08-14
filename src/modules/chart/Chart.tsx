'use client';

import React from 'react';
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

const Chart = () => {
  return (
    <div className="bg-[#fff] h-[260px] w-[1000px] flex mx-auto rounded-[6px] p-4">
        <ResponsiveContainer width='100%' height='100%'>
        <BarChart
            data={data}
            margin={{
            top: 5,
            right: 20,
            left: 10,
            bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#FFC145" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
        </ResponsiveContainer>

    </div>
  );
};

export default Chart;
