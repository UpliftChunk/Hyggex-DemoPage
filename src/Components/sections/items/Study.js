import React, { useState } from 'react'

const Study = () => {
   const [questions, setQuestions]= useState([
    "9 + 6 + 7x - 2x - 3",
    "6 + 6 + 4x - 1x - 4",
    "2 + 3 + 7x - 2x - 7",
    "1 + 4 + 5x - 9x - 1",
    "4 + 4 + 5x - 2x - 3",
    "1 + 3 + 8x - 1x - 2",
    "1 + 4 + 5x - 2x - 4",
    "1 + 2 + 5x - 7x - 3",
    "9 + 6 + 2x - 7x - 1",
    "6 + 5 + 8x - 2x - 2",
   ]);
   const [current, setCurrent]= useState(0);
   const shuffle = ()=>{
      const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
      setQuestions(shuffledQuestions);
   }
   const showLeft = ()=>{
      setCurrent((prevValue)=>(Math.max(0, prevValue-1)));
   }
   const showRight = ()=>{
      setCurrent((prevValue)=>(Math.min(questions.length-1, prevValue+1)));
   }
   const [fullscreen, setFullscreen] = useState(false);
  return (
    <div className={`flex flex-col items-center gap-2 py-4 min-w-[20em]  ${fullscreen?"laptop:w-[90vw]":""}`}>
      <div className='flex items-center justify-between px-5 py-3 bg-gradient-to-tr to-indigo-900 via-primary from-sky-500 rounded-3xl text-white laptop:text-2xl laptop:min-w-[20em] mini:w-5/6 mobile:w-[18em] laptop:min-h-60 mobile:h-40'>   
         <div className='self-start text-lg cursor-pointer'>
            <i className="fa-regular fa-lightbulb"></i>
         </div>
         <div>
            {questions[current]}
         </div>
         <div className='self-start text-lg cursor-pointer'>
         <i className="fa-solid fa-volume-high"></i>
         </div>
      </div>
      <div className='w-full flex items-center justify-around text-primary'>
         <div className='text-lg cursor-pointer'>
            <i className="fa-solid fa-rotate-right" onClick={shuffle} title='shuffle'></i>
         </div>
         <div className='flex items-center gap-2 text-sm'>
            <button className='rounded-full px-3 cursor-pointer ' onClick={showLeft}>
               <i className="fa-solid fa-angle-left"></i>
            </button>
            <div>{`${current+1}/${questions.length}`}</div>
            <button className='rounded-full px-3 cursor-pointer' onClick={showRight}>
               <i className="fa-solid fa-angle-right"></i>
            </button>
         </div>
         <div className='text-lg cursor-pointer ' onClick={()=>setFullscreen(!fullscreen)}>
            <i className={`fa-solid ${fullscreen? "fa-compress":"fa-expand"}`}></i>
         </div>
      </div>
    </div>
  )
}

export default Study