
"use client";
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
  const[isScroll,setIsScroll] = useState(false)
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-100%';
  };
  useEffect(()=>{
    window.addEventListener("scroll",() => {
      if (scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  })

  return (
    <>
     <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
      <Image src={assets.header_bg_color} alt='' className='w-full' />
        </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm ":""}`}>
       
        <a href='#top'>
          <Image src={assets.logo} alt='Logo' className='w-28 cursor-pointer mr-14' />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${isScroll ? "":" bg-white shadow-sm bg-opacity-50"}`}>
          <li><a href="#top" className='font-Ovo'>Home</a></li>
          <li><a href="#about" className='font-Ovo'>About me</a></li>
          <li><a href="#services" className='font-Ovo'>Services</a></li>
          <li><a href="#work" className='font-Ovo'>My work</a></li>
          <li><a href="#contact" className='font-Ovo'>Contact me</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt='Theme' className='w-6' />
          </button>
          <a href="#" className='font-Ovo w-[170px] hidden lg:flex items-center gap-3 px-10 rounded-full py-2.5 border border-gray-500 ml-4'>
            Contact
            <Image src={assets.arrow_icon} alt="Arrow" className='w-3 cursor-pointer' />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt='Menu' className='w-6' />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={menuRef}
          className="flex md:hidden flex-col gap-4 px-10 py-20 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-all duration-500 right-[-100%]"
        >
          <div className="absolute top-6 right-6">
            <Image
              src={assets.close_black}
              alt='Close'
              className='w-5 cursor-pointer'
              onClick={closeMenu}
            />
          </div>

          <li><a href="#top" className='font-Ovo' onClick={closeMenu}>Home</a></li>
          <li><a href="#About" className='font-Ovo' onClick={closeMenu}>About me</a></li>
          <li><a href="#Services" className='font-Ovo' onClick={closeMenu}>Services</a></li>
          <li><a href="#work" className='font-Ovo' onClick={closeMenu}>My work</a></li>
          <li><a href="#contact" className='font-Ovo' onClick={closeMenu}>Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
