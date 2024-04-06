import React, { useState } from 'react'
import logo from '../images/PayPal_Logo_Icon_2014.svg'
const Navbar = () => {
   const [Open, setOpen] = useState(false);
  return (
   <div className={`flex items-center relative mobile:justify-between px-3 ${!Open && "overflow-hidden"}`}>
      <div className='laptop:py-4 mobile:py-3 font-semibold laptop:px-4'>
            <img src={logo} alt="PayPalLogo" className='w-5'/>
      </div>
      <div className='laptop:hidden cursor-pointer' onClick={()=>setOpen(true)}>
         <i className="fa-solid fa-bars"></i>
      </div>
      <div className={`mobile:self-start flex justify-between z-10 transition-all
                      laptop:flex-grow mobile:w-4/6 mobile:flex-col mobile:absolute mobile:bg-white mobile:min-h-screen mobile:py-3 mobile:outline
                      ${Open?"mobile:right-0":"mobile:-right-[100%]"}`}>
         <div className='flex items-center px-3 font-semibold mobile:flex-col mobile:gap-3 laptop:gap-10 laptop:py-4'>
            <div className="text-primary cursor-pointer">Personal</div>
            <div className="text-primary cursor-pointer">Business</div>
            <div className="text-primary cursor-pointer">Developer</div>
            <div className="text-primary cursor-pointer">Help</div>
         </div>
         <div className="text-primary flex gap-2 mx-2 items-center mobile:flex-col">
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
  )
}

export default Navbar