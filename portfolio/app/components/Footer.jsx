import React from 'react'
import Image from 'next/image';
import { assets } from '@/assets/assets';
const Footer = () => {
  return (
    <div className='mt-20'> 
      <div className=" flex flex-col items-center text-center">
        <Image src={assets.logo} alt='' className='w-36 max-auto mb-2 '/>
        <div className="w-max flex items-center gap-2 mx-auto ">
        <Image src={assets.mail_icon} alt='' className='w-6 '/>
        baju62307@gmail.com
                </div>
      </div>
      <div className="flex  items-center text-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className="">© 2025 William Mark. All rights reserved.</p>
        <ul className="flex  items-center justify-center gap-10 mt-4 sm:mt-0 ">
            <li className="">Terms of Services</li>
            <li className="">Privacy Policy</li>
            <li className="">Connect with me</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
