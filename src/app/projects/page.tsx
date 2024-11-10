import React from 'react';
import Link from 'next/link';

function Page() {
  return (
    <div className='flex items-center justify-evenly flex-col mt-10px'>
        <h1 className='text-2xl'>My projects</h1>
      <div className='h-[230px] w-[280px] mt-5 bg-cover bg-center flex justify-center items-center' style={{background:"url('/countdown-timer.jpg')"}} >
        <div className='bg-[rgba(255,255,255,0.3)] backdrop:border-l-neutral-50 h-[210px] w-[270px] flex items-center justify-evenly flex-col rounded-md'>
        <p className='text-black'>This is a countdown timer made by Next.js which provides basic features like pause, start and reset.</p>
        <Link 
        href={"https://github.com/Alizabatool4268/countdown-timer.git"}
        target='_blank'
        className='text-center h-5 w-[90px] bg-black'
        >source code
        </Link>
        <Link
         className='text-center h-5 w-[90px] bg-black'
         href={"https://countdown-timer-nu-nine.vercel.app/"}
         target="_blank"
        > Live demo</Link>
      </div>
     </div>
      
      <div className='h-[230px] w-[280px] bg-cover mt-5 bg-center flex justify-center items-center' style={{background:"url('/ecommerce-website-two.webp')"}}>
        <div className='bg-[rgba(255,255,255,0.3)] backdrop:border-l-neutral-50 h-[210px] w-[270px] flex items-center justify-evenly flex-col rounded-md'>
         <p className='text-black'>This is a static Ecommerce website made by Next.js and a utilizes component library.</p>
         <Link
         className='text-center h-5 w-[90px] bg-black'
         href={"https://github.com/Alizabatool4268/selling-istruments.git"}
         target='_blank'
         >Source Code
         </Link>
         <Link
        className='text-center h-5 w-[90px] bg-black'
         href={"https://selling-istruments.vercel.app/"}
         target='_blank'>Live Demo
         </Link>
        </div>
      </div>

      <div className='h-[230px] w-[280px] bg-cover bg-center mt-5 flex justify-center items-center' style={{background:"url('/number-guessing-game-image.png')"}}>
        <div className='bg-[rgba(255,255,255,0.3)] backdrop:border-l-neutral-50 h-[210px] w-[270px] flex items-center justify-evenly flex-col rounded-md'>
         <p className='text-black'>This is a command line-based number guessing game in which you will
          have to guess a random number between 0 to 15 It is extremly fun to play and this game gives you
          five attempts to guess the random number.
          </p>
         <Link
         className='text-center h-5 w-[90px] bg-black'
         href={"https://github.com/Alizabatool4268/cli-number-guessing-game.git"}
         target='_blank'
         >Source Code
         </Link>
        </div>
      </div>
       
      <div className='h-[230px] w-[280px] bg-cover bg-center mt-5 flex justify-center items-center' style={{background:"url('/calculator.jpg')"}}>
      <div className='bg-[rgba(255,255,255,0.3)] backdrop:border-l-neutral-50 h-[210px] w-[270px] flex items-center justify-evenly flex-col rounded-md'>
        <p className='text-black'>It is a simple calculater created by me . It is created by using TypeScript , Node.js and inquirer. It can be used to to do
           simple Addition ,subtraction,multiplication,division.</p>
        <Link
        className='text-center h-5 w-[90px] bg-black'
        href={"https://github.com/Alizabatool4268/simple-calculator.git"}
        target='_blank'
        >Source Code</Link>
      </div>
      </div>

      <div className='h-[230px] w-[280px] bg-cover bg-center mt-5 flex justify-center items-center' style={{background:"url('/modern_resume.jpg')"}}>
      <div className='bg-[rgba(255,255,255,0.3)] backdrop:border-l-neutral-50 h-[210px] w-[270px] flex items-center justify-evenly flex-col rounded-md'>
        <p className='text-black'>This is a resume builder created by 
          using html css and javascript and typescript.</p>
        <Link
        className='text-center h-5 w-[90px] bg-black'
        href={"https://github.com/Alizabatool4268/resume-builder.git"}
        target='_blank'
        >Source Code</Link>
        <Link
        className='text-center h-5 w-[90px] bg-black'
        href={"https://resume-builder-lilac-eight.vercel.app/"}
        target='_blank'>Live Demo
        </Link>
      </div>
      </div>

      <div className='h-[230px] w-[280px] mt-5 bg-cover bg-center flex justify-center items-center' style={{background:"url('/ecommerce-website.webp')"}}>
       <div className='bg-[rgba(255,255,255,0.3)] backdrop:border-l-neutral-50 h-[210px] w-[270px] flex items-center justify-evenly flex-col rounded-md'>
         <p className='text-black'>This is an E-commerce website made with simple HTML CSS and JavaScript</p>
        <Link
        className='text-center h-5 w-[90px] bg-black'
         href={"https://github.com/Alizabatool4268/Glowup-E-commerce-website.git"}
         target='_blank'
         >Source Code</Link>
         <Link
         className='text-center h-5 w-[90px] bg-black'
         href={"https://glowupnow.netlify.app/"}
         target='_blank'>Live Demo
        </Link>
       </div>
      </div>

    </div>
  )
}

export default Page;