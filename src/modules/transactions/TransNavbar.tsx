import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const TransNavbar = () => {
  return (
    <>
        <div className="max-w-[1440px] w-full hidden md:flex">
            <Navbar/>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 h-[90px] border-b-1 border-[#E6EAEE] md:hidden">
            <Link href='/'>
                <Image src='/icons/arrow-left.svg' alt='' width={24} height={24} />
            </Link>
            <h2 className='text-[#000000] font-[600] text-[15px] leading-[150%]'>Transactions</h2>
        </div>
        
    </>
  )
}

export default TransNavbar;
