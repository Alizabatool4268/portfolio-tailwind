"use client";
import React from 'react';
import { Vortex } from "@/components/ui/vortex";
function Page() {
  return (
    <div  className="w-[100%] mx-auto rounded-md  h-[100vh] overflow-hidden">
        <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
            <form className='bg-[rgba(255,255,255,0.3)] backdrop:border-l-neutral-50 h-[350px] w-[270px] flex items-center justify-evenly flex-col rounded-md'>
                <input type="text" placeholder='Your Name' className='text-black border-none rounded-md h-10 w-[200px]'/>
                <input type="email"  placeholder='Your Email' className='text-black border-none rounded-md h-10 w-[200px]'/>
                <textarea name="quries" id="contacttextarea" placeholder='Enter your Quries' className='h-10 w-[200px] text-black border-none rounded-md'></textarea>
                <button className='bg-pink-800 h-8 w-[90px] rounded-md'>Submit</button>
            </form>
        </Vortex>
        
    </div>
  )
}

export default Page;