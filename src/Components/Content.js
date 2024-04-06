import React from 'react'
import PartA from './sections/PartA'
import PartB from './sections/PartB'
import PartCForm from './sections/PartCForm'
import Assistant from './sections/Assistant'

const Content = () => {
  return (
   <div className="grid laptop:grid-rows-3 
   laptop:grid-cols-5 laptop:grid-flow-col gap-1"
   style={{
      background: `linear-gradient(
         to bottom, 
         #022069,
         #022069 33%,
         transparent 0%,
         transparent
       )`
   }}
   >
      <div className="laptop:col-span-2">
         <PartA></PartA>
      </div>

      <div className="laptop:row-span-2 laptop:col-span-2 mobile:order-last">
         <PartB></PartB>
      </div>

      <div className="laptop:row-span-3 laptop:col-span-3 min-h-screen">
         <PartCForm></PartCForm>
      </div>

      <div className='mobile:hidden absolute right-0 top-[60%] '>
         <Assistant></Assistant>
      </div>
   </div>
  )
}

export default Content