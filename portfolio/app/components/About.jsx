import { assets, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image';
const About = () => {
    const infoList = [
        { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
        { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
        { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
    ];
      
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center  text-5xl font-Ovo">About me</h2>
      <div className="w-full flex flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none ">
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </div>
        <div className="flex-1">
            <p className="mb-10 max-w-2xl font-Ovo">I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
       <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
        {infoList.map(({icon,iconDark, title, description,},
            index)=>(
                <li
                className='border-[0.5px]  border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                    <Image src={icon} alt='title' className='w-7 mt-3'/>
                    <h2 className=' font-semibold my-4 text-gray-700'>{title}</h2>
                    <p className='text-gray-600 text-sm'>{description}</p>
                </li>
                ))}
       </ul>
       <h4 className='my-6 text-gray-700 font-Ovo'>

       </h4>
       <ul className="flex items-center gap-3  sm:gap-5">{toolsData.map((tool,index)=>( 
        <li  className="flex items-center  justify-center W-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" key={index }>
          <Image src={tool} alt='' className='w-5 sm:w-7'/>
        </li>
       ))}</ul>
        </div>
      </div>
    </div>
  )
}

export default About
