import Image from 'next/image';
import React from 'react'

const Navbar = () => {

  return (
    <div className='h-[80px] border-b-1 border-[#E6EAEE] w-full'>
        <div className="w-full h-full flex items-center justify-between px-4">
            <Image src='/icons/menu.svg' alt='Menu' height={24} width={24} className='md:hidden'/>
            <Image src='/icons/logo.svg' alt='Logo'height={25} width={90} />

            <div className="flex items-center gap-2">
                <Image src='/icons/bell.svg' alt='Notification' height={16} width={16}/>
                <Image src='/icons/frame.svg' alt='Username' height={50} width={50}/>
                <Image src='/icons/arrow.svg' alt='Show More' height={5} width={8} className='hidden md:flex'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
