import React from 'react';
import Link from 'next/link';



import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
  return (
    <div>
    <div className=' container m-auto flex justify-between items-center bg-[#143443] text-white sm:p-6 p-10'>
      <div>
        <Link href="/">
        <span className="sm:text-xl text-[5vw] font-bold">Muhammad Akram Mallah</span>
        </Link>
      </div>
      <div className='hidden sm:block space-x-8 '>
        <Link href={'/'}>Home</Link>
        <Link href={'#about'}>About</Link>
        <Link href={'#contact'}>Contact</Link>
        <Link href={'#'}>Projects</Link>
      </div>
      
      <div className='sm:hidden text-6xl'><GiHamburgerMenu />

      </div>
      </div>
    </div>
  )
}

export default Navbar

