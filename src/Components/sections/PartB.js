import React from 'react'

const PartB = () => {
  return (
    <div className='h-full flex flex-col py-12 gap-4 laptop:pl-20 mobile:px-4'>
      <div className='text-2xl font-semibold max-w-60'>Some other ways to connect with us</div>
      <dl className='flex flex-col gap-8'>
         <div>
            <dd>Want to speak with Sales right away?</dd>
            <dt className='text-secondary font-semibold mt-1 cursor-pointer'>Call 877-794-7639</dt>
         </div>
         <div>
            <dd>Need help with your existing account?</dd>
            <dt className='text-secondary font-semibold mt-1 cursor-pointer'>Visit our Help Center <span className='text-xl'>→</span></dt>
         </div>
         <div>
            <dd>Want helpful business insights?</dd>
            <dt className='text-secondary font-semibold mt-1 cursor-pointer'>Visit our Business Resource Center <span className='text-xl'>→</span></dt>
         </div>
      </dl>
    </div>
  )
}

export default PartB