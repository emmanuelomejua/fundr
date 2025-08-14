import Card from '@/modules/transactions/Card';
import HeroSection from '@/modules/transactions/HeroSection';
import React from 'react'

const Transactions = () => {
  return (
    <div className='h-full w-full'>
      <HeroSection/>
      <h4 className='inline-block md:hidden px-4 mt-8 text-[#111827] font-[600] text-[17px] leading-[150%]'>Transactions</h4>
      <Card/>
    </div>
  )
}

export default Transactions;
