import React, { useState } from 'react'
import { CountryDropdown } from 'react-country-region-selector';
import { useForm } from 'react-hook-form';
 
const PartCForm = () => {
   const [country, setCountry] = useState("United States")
   const {
      register,
      formState: { errors },
      // handleSubmit,
      watch
    } = useForm()

  return (
   <div className='h-full flex flex-col  items-center mobile:p-3 laptop:min-w-[30rem] laptop:pt-32'>
      <form className='laptop:w-[35rem] my-4 px-5 py-10 bg-white border border-black rounded-md'>
         <div className='my-6'>
            <div className='text-xl font-semibold'>Get Started</div>
            <div>Tell us a little about your business so we can connect you with the right people.</div>
         </div>
         <div className="flex flex-col gap-3 text-sm">
            <div className='relative'>
               <label htmlFor="firstName" 
                      className={`absolute text-gray-400 transition-all
                                  ${errors.firstName?"text-cherry":""}
                                  ${watch().firstName?"text-[0.5rem] py-[1px]":"translate-y-[50%]"}  px-2.5`}
               >First name*</label>
               <input type="text" id='firstName' 
                className={`${watch().firstName?"pt-3":""}`}
                {...register("firstName", { required: true })}/>
            </div>
            
            <div className='relative'>
               <label htmlFor="lastName" 
                      className={`absolute text-gray-400 transition-all
                                  ${errors.lastName?"text-cherry":""}
                                  ${watch().lastName?"text-[0.5rem] py-[1px]":"translate-y-[50%]"}  px-2.5`}
               >Last name*</label>
               <input type="text" id='lastName' 
                className={`${watch().lastName?"pt-3":""}`}
                {...register("lastName", { required: true })}/>
            </div>

            <div className='relative'>
               <label htmlFor="workEmail" 
                      className={`absolute text-gray-400 transition-all
                                  ${errors.workEmail?"text-cherry":""}
                                  ${watch().workEmail?"text-[0.5rem] py-[1px]":"translate-y-[50%]"}  px-2.5`}
               >Work email*</label>
               <input type="email" id='workEmail' 
                className={`${watch().workEmail?"pt-3":""}`}
                {...register("workEmail", { required: true })}/>
            </div>

            <div className='relative'>
               <label htmlFor="phoneNumber" 
                      className={`absolute text-gray-400 transition-all
                                  ${errors.phoneNumber?"text-cherry":""}
                                  ${watch().phoneNumber?"text-[0.5rem] py-[1px]":"translate-y-[50%]"}  px-2.5`}
               >Phone number*</label>
               <input type="number" id='phoneNumber'
                className={`${watch().phoneNumber?"pt-3":""}`}
                {...register("phoneNumber", { required: true })}/>
            </div>

            <div className='relative'>
               <label htmlFor="companyName" 
                      className={`absolute text-gray-400 transition-all
                                  ${errors.companyName?"text-cherry":""}
                                  ${watch().companyName?"text-[0.5rem] py-[1px]":"translate-y-[50%]"}  px-2.5`}
               >Company name*</label>
               <input type="text" id='companyName'
                className={`${watch().companyName?"pt-3":""}`}
                {...register("companyName", { required: true })}/>
            </div>

            <div className='relative'>
               <label htmlFor="companyWebsite" 
                      className={`absolute text-gray-400 transition-all
                                  ${errors.companyWebsite?"text-cherry":""}
                                  ${watch().companyWebsite?"text-[0.5rem] py-[1px]":"translate-y-[50%]"}  px-2.5`}
               >Company website*</label>
               <input type="text" id='companyWebsite'
                className={`${watch().companyWebsite?"pt-3":""}`} 
                {...register("companyWebsite", { required: true })}/>
            </div>
            
            <div className='relative'>
               <label htmlFor="country" 
                      className={`absolute text-gray-400 transition-all
                                  ${!country?"text-cherry":""}
                                  ${country?"text-[0.5rem] py-[1px]":"translate-y-[50%]"}  px-2.5`}
               >Country*</label>
               <CountryDropdown className='border-2 w-full px-1 rounded-md h-10 pt-3 border-gray-400' id='country'
                  onChange={(val)=>setCountry(val)} value={country} 
               /> 
            </div>
            
            <div className='relative'>
               <label htmlFor="annualSales" 
                      className={`absolute text-gray-400 transition-all text-[0.5rem] py-[1px] px-2.5
                                  ${errors.annualSales?"text-cherry":""} `}
               >Estimated annual sales*</label>
               <select name="annualSales" id="annualSales" className='pt-2 px-1' {...register("annualSales", {required:true})}>
                  <option value="5">around 5 lakh rupees</option>
                  <option value="10">around 10 lakh rupees</option>
                  <option value="20">around 20 lakh rupees</option>
                  <option value="50">around 50 lakh rupees</option>
               </select>
               
            </div>

            <div className='relative'>
               <label htmlFor="businessAccountStatus" 
                      className={`absolute text-gray-400 transition-all text-xs py-1 px-2.5
                                  ${errors.businessAccountStatus?"text-cherry":""} `}
               >Do you already have a PayPal Business Account?*</label>

               <select name="businessAccountStatus" id="businessAccountStatus" className=' text-xs pt-4 px-1 mini:h-16 mini:pt-7' {...register("businessAccountStatus", {required:true})}>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
               </select>
            </div>

            <div className='flex items-center gap-2 '>
               <input type="checkbox" className='w-auto h-auto' id='consent' {...register("consent", {required:true})}/>
               <label htmlFor="consent">
                  I have read and accepted
                  <span className='text-secondary font-bold'> PayPal Privacy Policy</span> 
               </label>
            </div>
            <div className='pl-5 text-xs'>
               I consent to PayPal contacting me by phone or by email, and to sending me product or industry information relevant to my query. I know I can unsubscribe at any time.
            </div>

            <button className='my-2 w-52 self-center bg-secondary text-white'>
               Submit
            </button>

            <div className='self-center font-semibold text-gray-500'>*Required fields</div>

         </div>
      </form>
   </div>
  )
}

export default PartCForm