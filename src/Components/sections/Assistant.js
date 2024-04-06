import React, { useState } from 'react'

const Assistant = () => {
   const [Open, setOpen] = useState(false);
  return (
    <div className='bg-white'>

      <div className='w-80 border border-black rounded-t-md text-center py-2 shadow-2xl shadow-gray-600'>
         PayPal Assistant
         
         <i className={`absolute right-2 cursor-pointer fa-solid ${Open?"fa-angle-up":"fa-angle-down"}`} onClick={()=>setOpen(!Open)}></i>
      </div>
      <div className={`w-80 h-60 border border-black bg-slate-100 flex flex-col-reverse p-2
                       ${Open?"":"hidden"}
      `}>
         
         <div className='relative w-full'>
            <input className='px-2 rounded-sm border h-10 border-black' placeholder='Enter message'>
            </input>
            <i className="fa-solid fa-paper-plane absolute right-5 top-3 cursor-pointer text-secondary"></i>
         </div>
         <div className='my-2 border w-fit px-3 py-1 bg-blue-200 rounded-md'>
            Hi, How can i Help you?
         </div>

      </div>
    </div>
  )
}

export default Assistant