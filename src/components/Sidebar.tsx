import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

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
        icon: '/general/getstarted.svg',
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

const Sidebar = () => {
  return (
    <div className='hidden md:flex w-[260px] h-full bg-[#FFFFFF] border-r-1 border-[#E6EAEE]'>
        <div className="flex flex-col gap-3 mt-6 w-full">
            {menuList.map((list, index) => (
                <div className="w-full bg-[#3976E8]">
                    <Link href={list.url} className="py-[14px] px-[32px] flex items-center gap-2" key={index} >
                        <Image src={list.icon} alt={list.title} height={24} width={24}/>
                        <span className="font-[400] text-[15px]">{list.title}</span>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Sidebar;
