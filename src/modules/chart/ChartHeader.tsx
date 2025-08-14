'use client';

import Select from '@/components/inputs/Select';
import Image from 'next/image';
import React, { useState } from 'react'

const options = [
    {label: 'Today', value: 'Today'},
    {label: 'Last 7 days', value: 'Last 7 days'},
    {label: 'Last 30 days', value: 'Last 30 days'},
]

const ChartHeader = () => {

    const vals = ['Today', 'Last 7 days', 'Last 30 days']

    const [isActive, setIsActive] = useState('Today')
    

  return (
    <div className='hidden md:flex items-center justify-between py-[20px] px-[30px]'>
        <div className="flex items-center gap-6">
            <span className="text-[14px] font-[600] leading-[100%]">Showing data for</span>

            <div className="flex items-center px-4 py-[10px] bg-[#fff] border-1 border-[#DADAE7] rounded-[8px]">
                <Select 
                    className='w-full' 
                    options={options} 
                    onChange={(val) => setIsActive(val)} 
                    value={isActive} />
            </div>
        </div>

        <div className="flex items-center">
            {vals.map((val, index) => (
                <span key={index} className={`${isActive === val && 'bg-[#00C6FB0F]'} rounded-[5px] py-[11px] px-[20px]`}>{val}</span>
            ))}
        </div>
    </div>
  )
}

export default ChartHeader;
