import React from 'react'

function Page() {
  return (
    <div className='h-[inherit] w-[100%] flex justify-center items-center flex-col'>
       <h1 className='text-3xl text-bold'>My Skills</h1>
       <div className='h-[200px] w-[200px] rounded-[50%] mt-4 border-solid border-t-orange-700 border-t-[20px] border-b-[20px] border-r-[20px] border-l-[20px] flex items-center justify-center text-center'>90% <br />HTML</div>
       <div className='h-[200px] w-[200px] rounded-[50%] mt-4 border-solid border-t-purple-700 border-t-[20px] border-b-[20px] border-r-[20px] border-l-[20px] flex items-center justify-center'>90% <br /> CSS</div>
       <div className='h-[200px] w-[200px] rounded-[50%] mt-4 border-solid border-t-purple-700 border-t-[20px] border-b-[20px] border-r-[20px] border-l-[20px] flex items-center justify-center text-center'>83% <br />TAILWIND</div>
       <div className='h-[200px] w-[200px] rounded-[50%] mt-4 border-solid border-t-blue-700 border-t-[20px] border-b-[20px] border-r-[20px] border-l-[20px] flex items-center justify-center text-center'>85% <br />TYPESCRIPT</div>
       <div className='h-[200px] w-[200px] rounded-[50%] mt-4 border-solid border-t-yellow-500 border-t-[20px] border-b-[20px] border-r-[20px] border-l-[20px] flex items-center justify-center text-center'>85% <br /> JAVASCRIPT</div>
       <div className='h-[200px] w-[200px] rounded-[50%] mt-4 border-solid border-t-slate-700 border-r-slate-700 border-b-slate-700 border-t-[20px] border-b-[20px] border-r-[20px] border-l-[20px] flex items-center justify-center text-center'>40% <br /> NEXT.JS <br />Currently Learning</div>
    </div>
  )
}

export default Page;