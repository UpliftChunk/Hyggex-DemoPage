import React, { useState } from 'react'
import PublishedbyHyggex from '../../images/PublishedBy.png'
import Study from './items/Study';

const Loader=({item})=>{
   const itemsLoader = {
      "Study": <Study/>,
      // "Quiz": <Quiz/>,
      // "Test": <Test/>,
      // "Game": <Game/>,
      // "Other": <Other/>,
   }
   return itemsLoader[item] || <div className='my-5 text-gray-500 text-3xl'>Yet to develop</div>;
}

const Main = () => {
  const title= "Relations and Functions";
  const subject= "Mathematics";
  const view = ["Study", "Quiz", "Text", "Game", "Others"];
  const [active, setActive]= useState("Study");
  const activeStyle = "text-primary font-semibold border-b-2 border-primary ";
  return (
    <div className='flex flex-col gap-4'>
      <div className="text-2xl text-primary font-extrabold">
         {`${title} ( ${subject} )`}
      </div>
      <div className='flex flex-col items-center'>
         <div className='flex laptop:gap-8 mobile:gap-3 mini:gap-2 text-gray-600 w-full justify-center mobile:font-sm'>
            {
               view.map((item, key)=>(
                  <div key={key} onClick={()=>setActive(item)} className={`laptop:px-2 cursor-pointer ${active===item?activeStyle:''}`}>
                     {item}
                  </div>
               ))
            }
         </div>

         <div className='flex laptop:min-w-[40em] items-center justify-center'>
            <Loader item={active}/>
         </div>
      </div>
      <div className='flex items-center justify-between'>
         <div className='laptop:py-4 mobile:py-3'>
            <img src={PublishedbyHyggex} alt="Title" className='laptop:w-40 mobile:w-24'/>
         </div>
         <div className='border-none shadow-none text-primary font-extrabold laptop:text-xl  h-fit flex items-center text-sm'>
            <button className='rounded-full mobile:p-1 mobile:py-0.5 laptop:p-2 laptop:text-[1.25em]'>+</button>
            Create Flashcard
         </div>
      </div>
    </div>
  )
}

export default Main