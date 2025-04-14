"use client";
import { assets } from '@/assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
    const [result, setResult] = useState("")

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "103a3f58-f242-4210-9621-94588eb5a76b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20  '   style={{ backgroundImage: "url('/footer.png')" }}
>
 
    <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
    <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
      Welcome to my web development portfolio! Explore a collection of projects showcasing
      my expertise in front-end development.
      </p>
      <form  onSubmit={onSubmit} className="max-w-2xl mx-auto">
    <div class="grid grid-cols-1  md:grid-cols-2 gap-6 mb-8 mt-10">
      <input type="text" placeholder="Enter your name" required className=" flex-1 border-[0.5px] border-gray-400 p-3 rounded-md outline-none bg-white "  name='name'/>
      <input type="email" placeholder="Enter your email" required className=" flex-1 border-[0.5px] border-gray-400 p-3 rounded-md  outline-none bg-white " name='email'/>
    </div>
    <textarea rows="6" placeholder="Enter your message" className="w-full border-[0.5px] bg-white  border-gray-400 p-4 rounded-md mb-6 outline-none " name='message'></textarea>

    <button type="submit" class=  " px-8 py-3 bg-black/80 w-max text-white rounded-full duration-300 flex justify-between items-center gap-2 hover:bg-black">
      Submit now
      <Image src={assets.right_arrow_white} alt="right arrow" className="w-4" />
    </button>
    <p className="mt-4">{ result}</p>
  </form>
    </div>
  )
}

export default Contact
