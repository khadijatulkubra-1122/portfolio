import { assets } from '@/assets/assets'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center  text-5xl font-Ovo">About me</h2>
      <div className="">
        <div className="">
            <Image src={assets.user_image}/>
        </div>
      </div>
    </div>
  )
}

export default About
