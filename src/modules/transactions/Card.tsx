import Image from 'next/image';
import React from 'react';



const Card = () => {
  return (
    <div className='md:hidden border-1 border-[#BEBEBE33] w-full h-[165px] mt-6 rounded-sm flex flex-col mx-auto pl-4'>
        <div className="border-b-1 border-[#BEBEBE33] flex items-center w-full justify-between py-2">
            <span className="text-[#252C32] text-[13px] font-[400] leading-[24px] px-1">AMOUNT:</span>
            <span className="text-[#252C32] text-[13px] font-[400] leading-[24px] px-1">70%</span>
        </div>
        <div className="border-b-1 border-[#BEBEBE33] flex items-center w-full justify-between py-2">
            <span className="text-[#252C32] text-[13px] font-[400] leading-[24px] px-1">TRANSACTION TYPE:</span>
            <span className="text-[#252C32] text-[13px] font-[400] leading-[24px] px-1">TRANSFER</span>
        </div>
        <div className="border-b-1 border-[#BEBEBE33] flex items-center w-full justify-between py-2">
            <span className="text-[#252C32] text-[13px] font-[400] leading-[24px] px-1">DATE:</span>
            <span className="text-[#252C32] text-[13px] font-[400] leading-[24px] px-1">12 JUNE 2022, 10:48 AM</span>
        </div>

        <div className="border-b-1 border-[#BEBEBE33] flex items-center w-full justify-between py-2">
            <span className="text-[#252C32] text-[13px] font-[400] leading-[24px] px-1">STATUS:</span>
            <div className="flex items-center gap-1 rounded-2xl border-1 border-[#5DC090] py-[4px] px-[7.25px] bg-[#EFFDED] mr-1">
                <div className='w-[5px] h-[5px] rounded-2xl bg-[#92EF80]'/>
                <span className="text-[#144909] text-[9px] font-[500]">Processed</span>
            </div>
        </div>
    </div>
  )
}

export default Card;
