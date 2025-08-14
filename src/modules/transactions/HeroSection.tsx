import Select from '@/components/inputs/Select';
import Image from 'next/image';
import React from 'react'

const options = [
    {label: 'All Accounts', value: ''},
    {label: 'All Accounts 1', value: ''},
    {label: 'All Accounts 2', value: ''},
]

const HeroSection = () => {
  return (
    <section className='w-full flex flex-col gap-4'>
        <div className='mt-4 md:h-[80px] w-full md:border-b-1 border-[#E6EAEE] flex items-center justify-between px-4 lg:px-[40px]'>
            <div className="flex items-center">
                <Select options={options} className='text-[#2E2E2E] cursor-pointer text-[14px] border-0'/>
            </div>

            <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center">
                    <span className="text-[#71717A] text-[16px] font-[500] leading-[100%]">Select Date Range:</span>
                    <span className="">Date</span>
                </div>

                <div className="rounded-[8px] border-1 flex items-center gap-1 py-2 px-4 cursor-pointer bg-[#FFFFFF] border-[#D0D5DD]">
                    <Image src='/transactions/export.svg' alt='' width={18} height={15}/>
                    <span className="text-[#344054] text-[14px] font-[500]">Export</span>
                </div>
            </div>
        </div>

        <div className="flex md:hidden items-center w-full justify-between px-4">
            <span className="text-[#71717A] text-[16px] font-[500] leading-[100%]">Select Date Range:</span>
            <span className="">Date</span>
        </div>
    </section>
  )
}

export default HeroSection;
