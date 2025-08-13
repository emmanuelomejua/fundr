import Image from 'next/image';
import React from 'react'

const Widget = () => {
  return (
    <div className='w-[325px] h-[115px] border-[1px] border-[#E6EAEE] rounded-[5px] py-2 px-8 flex items-end bg-[#FFF]'>
        <div className="flex flex-col gap-1 h-full w-full justify-center">
            <span className="text-[#8F8E8E] font-[500] text-[11px] leading-[24px]">ACCOUNT DETAILS</span>
            <span className='text-[#000000] font-[500] text-[11px] leading-[24px]'>STERLING BANK</span>
            <span className='text-[#000000] font-[700] text-[21px] leading-[24px]'>8000000000</span>
        </div>

        <div className="flex">
            <div className="flex items-center gap-2 bg-[#9F56D433] rounded-[8px] w-max h-[28px] px-2 pt-1.5 pb-1 mb-2 cursor-pointer">
                <Image src='/icons/copy.svg' alt='' width={16} height={16}/>
                <span>Copy</span>
            </div>
        </div>
    </div>
  )
}

export default Widget;
