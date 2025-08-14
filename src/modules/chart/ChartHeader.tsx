import Image from 'next/image';
import React from 'react'

const ChartHeader = () => {

    const vals = ['Today', 'Last 7 days', 'Last 30 days']

  return (
    <div className='hidden md:flex items-center justify-between py-[20px] px-[30px]'>
        <div className="flex items-center gap-6">
            <span className="text-[14px] font-[600] leading-[100%]">Showing data for</span>

            <div className="flex items-center px-4 py-[10px] bg-[#fff] rounded-[8px] gap-6">
               <span className="">Last 7 days</span>
               <Image src='/icons/arr-down.svg' alt='' width={10} height={5} />
            </div>
        </div>

        <div className="flex items-center gap-5">
            {vals.map((val, index) => (
                <span key={index} className=''>{val}</span>
            ))}
        </div>
    </div>
  )
}

export default ChartHeader;
