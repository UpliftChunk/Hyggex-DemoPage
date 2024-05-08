import React, { useState } from 'react'

const Query= ({question, answer})=>{
  const [open, setOpen]= useState(false);
  return (
    <div className='border-2 rounded-xl border-secondary laptop:w-8/12 py-3 px-4 '>
      <div className='z-10 flex items-center justify-between bg-white font-bold text-gray-600'>
        <div>{question}</div>
        <div>
          <i className={`fa-solid ${open?"fa-angle-up": "fa-angle-down"} cursor-pointer`} onClick={()=>setOpen(!open)}></i>
        </div>
      </div>
      <div className={` text-black ${open?"my-2 translate-y-0":"translate-y-full hidden "}`}>
        {answer}
      </div>
    </div>
  );
}

const FAQ = () => {
  const queries = [
    {
      question: 'Can education flashcards be used for all age groups?',
      answer: 'Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.'
    },
    {
      question: 'How do education flashcards work?',
      answer: 'Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition'
    },
    {
      question: 'Can education flashcards be used for test preparation?',
      answer: 'Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.'
    },
  ]
  return (
    <div className='flex flex-col gap-4'>
      <div className='text-3xl text-primary font-bold'>FAQ</div>
      <div className='flex flex-col gap-5'>
        {
          queries.map((item, key)=>{
            const {question, answer}= item;
            return <Query key={key} question={question} answer={answer}/>
          })
        }

      </div>
    </div>
  )
}

export default FAQ