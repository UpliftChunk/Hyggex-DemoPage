import React from 'react'

const About = () => {
  return (
    <div className='flex text-sm py-12 laptop:px-20 mobile:px-4 gap-10 flex-wrap'>
      <div className="flex-grow-[2]">
         <div className='laptop:min-w-[25rem]'>
            <div className='text-secondary font-bold mb-5'>
               Small-to-Medium Business
               <hr className='border-y-2'/>
            </div>
            <div className='flex justify-between laptop:gap-2 mobile:gap-1'>
               
               <div>
                  <div className='font-semibold mb-3'>Introduction</div>
                  <div className='font-semibold mb-3'>
                     Getting Started
                  </div>
               </div>

               <div>
                  <div className='font-semibold mb-3'>All Solutions</div>
                  <div className='mb-3'>
                     <div>Accept Payments</div>
                     <div>Make Payments</div>
                     <div>Manage Risk</div>
                     <div>Accelerate Growth</div>
                     <div>Streamline  Operations</div>
                  </div>
               </div>

            </div>
         </div>


      </div>
      
      <div className="flex-grow-[2]">
         <div className='laptop:min-w-[25rem]'>

            <div className='text-secondary font-bold mb-5'>
            Enterprise
               <hr className='border-y-2'/>
            </div>
            <div className='flex justify-between laptop:gap-2 mobile:gap-1'>

               <div>
                  <div className='font-semibold mb-3'>Introduction</div>
                  <div className='font-semibold mb-3'>
                  Marketplaces & Partners
                  </div>
               </div>

               <div>
                  <div className='font-semibold mb-3'>Platform & Solutions</div>
                  <div className='mb-3'>
                     <div>Accept Payments</div>
                     <div>Make Payments</div>
                     <div>Manage Risk</div>
                     <div>Accelerate Growth</div>
                     <div>Streamline  Operations</div>
                  </div>
               </div>

            </div>

         </div>
      </div>
      
      <div className="flex-grow laptop:min-w-[25rem]">

         <div className='text-secondary font-bold mb-5'>
         More
            <hr className='border-y-2'/>
         </div>
         <div className='flex flex-col gap-2 font-bold'>
            <div>Nonprofits</div>
            <div>Pricing</div>
            <div>Resource Center</div>
         </div>

      </div>

    </div>
  )
}

export default About