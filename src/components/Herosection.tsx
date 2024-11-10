"use client";
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";
import Image from "next/image";

export default function VortexDemo() {
  return (
    <div className="w-[100%] mx-auto rounded-md  h-[100vh] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
       <div className="h-[100vh] w-[100%] flex items-center justify-center flex-col" >
         <p className="text-5xl text-white font-bold text-center max-[390px]:text-4xl max-[290px]:text-3xl">Iam Aliza batool <br /> Tech enthusiastic</p>
         <p className="mt-5">Stick around to know more about My Tech journey ,skills and my projects in this portfolio.</p>
         <Link 
         href={"/about"}
         className="h-7 w-[100px] bg-pink-800 text-center rounded-md mt-5"
         > know more</Link>
         <Image 
          height={150}
          width={200}
          src={"/hakathon-sample-profile.webp"}
          alt="HeroImage"
          className="mt-4 rounded-md"
         ></Image>
         </div>
     </Vortex>
    </div>
  );
}
