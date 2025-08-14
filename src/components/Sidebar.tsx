'use client';


import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'


const Sidebar = () => {

    const pathname = usePathname();

  return (
    <div className='hidden md:flex w-[260px] h-full bg-[#FFFFFF] border-r-1 border-[#E6EAEE]'>
        <div className="flex flex-col gap-3 mt-6 w-full">
      {menuList.map((list, index) => {
          const isActive = pathname === list.url;

          return (
            <div
              key={index}
              className={`w-full ${
                isActive ? 'bg-[#3976E8]' : 'bg-transparent'
              }`}
            >
              <Link
                href={list.url}
                className={`py-[14px] px-[32px] flex items-center gap-2 ${
                  isActive ? 'text-white' : ''
                }`}
              >
                <Image
                  src={list.icon}
                  alt={list.title}
                  height={24}
                  width={24}
                  className={isActive ? 'invert brightness-0 saturate-0' : ''}
                />
                <span
                  className={`font-[400] text-[15px] ${
                    isActive ? 'text-white' : 'text-[#04004D]'
                  }`}
                >
                  {list.title}
                </span>
              </Link>
            </div>
          );
        })}
        </div>
    </div>
  )
}


const menuList = [
    {
        title: 'Get Started',
        icon: '/general/getstarted.svg',
        url: '#'
    },
        {
        title: 'Dashboard',
        icon: '/general/dashboard.svg',
        url: '/'
    },
        {
        title: 'Accounts',
        icon: '/general/accts.svg',
        url: '#'
    },
        {
        title: 'Transfers',
        icon: '/general/transfer.svg',
        url: '#'
    },
        {
        title: 'Transactions',
        icon: '/general/transaction.svg',
        url: '/transactions'
    },
        {
        title: 'Settings',
        icon: '/general/setting.svg',
        url: '#'
    },
]

export default Sidebar;
