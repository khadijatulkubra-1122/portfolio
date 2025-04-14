import { assets,  workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image';

const work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20 '>
    <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
    <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
      Welcome to my web development portfolio! Explore a collection of projects showcasing
      my expertise in front-end development.
      </p>
      <div className="grid grid-cols-4   gap-5 my-10">
   { workData.map((project,  index) => (
  <div className="aspect-square bg-no-repeat flex items-center  bg-cover bg-center rounded-lg relative group  cursor-pointer" key={index} style={{backgroundImage :`url(${project.bgImage})`}}
  >
    <div className="bg-white  w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-3 flex justify-between  items-center duration-500  group-hover:bottom-7 ">
    <div className="">
    <h2 className="font-semibold">{project.title}</h2>
    <p className="text-gray-700 text-sm ">{project.description}</p>
    </div>
    <div className="flex items-center  justify-center  border aspect-square rounded-full border-black w-9 shadow[2px_2px_0_#000] group-hover:bg-lime-300">
    <Image src={assets.send_icon} alt="send icon" className=" text-black w-5" />
    </div>
    </div>
  </div>
))}

      </div>
      <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-gray-700 px-10 py-3 my-20 mx-auto border-[0.5px] rounded-full hover:bg-[#fcf4ff] duration-500'>
  Show more
  <Image src={assets.right_arrow} alt="right arrow" className="w-4" />
</a>

    </div>
  )
}

export default work

