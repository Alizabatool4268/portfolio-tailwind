import React from 'react';
import Link from 'next/link';


function Header() {
  return (
    <div className='w-[100%] h-10 bg-[#a8288f] flex justify-evenly items-center overflow-x-hidden max-[370px]:text-sm'>
          <div className='text-violet-300 font-bold text-xl  max-[370px]:text-sm'>Aliza Batool</div>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/skills"}>Skills</Link>
          <Link href={"/contact"}>Contact</Link>
    </div>
  )
}

export default Header;