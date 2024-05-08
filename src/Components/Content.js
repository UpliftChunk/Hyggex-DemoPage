import React from 'react'
import FAQ from './sections/FAQ'
import Main from './sections/Main'
import MiniNav from './sections/MiniNav'

const Content = () => {
  return (
   <div className="flex flex-col gap-4 py-6 laptop:px-20 mobile:px-4">
      <div>
         <MiniNav></MiniNav>
      </div>

      <div>
         <Main></Main>
      </div>

      <div>
         <FAQ></FAQ>
      </div>

   </div>
  )
}

export default Content