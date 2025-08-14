import Navbar from '@/components/Navbar';
import Card from '@/modules/transactions/Card';
import HeroSection from '@/modules/transactions/HeroSection';
import DataTable from '@/modules/transactions/TableComponent';
import TransNavbar from '@/modules/transactions/TransNavbar';
import React from 'react'

const Transactions = () => {
  return (
    <div className="w-full">
      <TransNavbar/>
      <div className='h-full w-full px-5 lg:px-0'>
        <HeroSection/>
        <h4 className='inline-block lg:hidden mt-8 text-[#111827] font-[600] text-[17px] leading-[150%]'>Transactions</h4>
        <Card/>
        <Card/>
        <DataTable/>
      </div>
    </div>
  )
}

export default Transactions;
