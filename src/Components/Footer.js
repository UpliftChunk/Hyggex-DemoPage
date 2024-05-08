import React from 'react'
import TitleLogo from '../images/Title.png'
const Footer = () => {
  return (
    <div className='flex flex-col gap-4 py-12 laptop:px-20 mobile:px-4 text-sm font-bold'>
      <img src={TitleLogo} alt="TitleLogo" className='w-36' />
      <div className='flex flex-wrap gap-4 justify-between'>
         
         <div className='flex flex-wrap gap-4'>
            <div>Help</div>
            <div>Contact</div>
            <div>Fees</div>
            <div>Security</div>
            <div>Apps</div>
            <div>Shop</div>
            <div>Enterprise</div>
            <div>Partners</div>
            <div>Feedback</div>
         </div>

      </div>
      <hr className='w-full border-2'/>
      <div className='flex flex-wrap gap-4 justify-between'>

         <div className='flex flex-wrap gap-4 mobile:flex-col'>
            <div>About</div>
            <div>Newsroom</div>
            <div>Jobs</div>
            <div>Investor Relations</div>
            <div>Values in Action</div>
            <div>Public Policy</div> 
            <div>Sitemap</div>
         </div>
         <div className='flex flex-wrap gap-4 mobile:flex-col'>
            <div className='font-normal'>&copy;1999-2022</div>
            <div>Accessibility</div>
            <div>Privacy Cookies</div>
            <div>Legal</div>
         </div>

      </div>
    </div>
  )
}

export default Footer