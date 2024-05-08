import React, { useState } from 'react'
import logo from '../images/Title.png'
const Navbar = () => {
   const [Open, setOpen] = useState(false);
  return (
   <div className={`flex items-center  justify-between laptop:px-20 mobile:px-4 ${!Open && "overflow-hidden"}`}>
      <div className='laptop:py-4 mobile:py-3'>
            <img src={logo} alt="Title" className='w-40'/>
      </div>

      <div>
         <div className='laptop:hidden cursor-pointer' onClick={()=>setOpen(true)}>
            <i className="fa-solid fa-bars"></i>
         </div>
         <div className={`mobile:self-start flex z-10 transition-all
                        laptop:flex-grow mobile:w-4/6 mobile:flex-col mobile:absolute mobile:bg-white mobile:min-h-screen mobile:py-3 mobile:outline
                        mobile:top-0 mobile:justify-between
                        ${Open?"mobile:right-0":"mobile:-right-[100%]"}`}>
            <div className='flex items-center px-3 mobile:flex-col mobile:gap-3 laptop:gap-10 laptop:py-4'>
               <div className="text-gray-600 cursor-pointer">Home</div>
               <div className="text-gray-600 cursor-pointer">Flashcard</div>
               <div className="text-gray-600 cursor-pointer">Contact</div>
               <div className="text-gray-600 cursor-pointer">FAQ</div>
            </div>
            <div className="text-primary flex gap-2 mx-2 items-center mobile:flex-col mobile:mb-5">
               <button>Log In</button>
               <button className='bg-primary text-white'>
                  Sign Up
               </button>
            </div>
            <div className='laptop:hidden absolute top-0.5 px-2 cursor-pointer' onClick={()=>setOpen(false)}>
               <i className="fa-solid fa-xmark"></i>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Navbar