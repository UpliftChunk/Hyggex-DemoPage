import React from 'react'

const MiniNav = () => {
   const path = "Flashcard.Mathematics.Relation and Function";
   const pathItems= path.split('.');
  return (
    <div className='flex flex-wrap items-center gap-2 font-semibold text-gray-600'>
      <i className="cursor-pointer fa-solid fa-house"></i>
      {
         pathItems.map((item, key)=>(
            <div key={key} className={`flex gap-2 ${pathItems.length-1===key?"text-secondary":""}`}>
               <div>{`>`}</div>
               <div className='cursor-pointer'>{item}</div>
            </div>
         ))
      }
    </div>
  )
}

export default MiniNav