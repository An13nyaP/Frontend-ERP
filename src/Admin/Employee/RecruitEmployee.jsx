import React from 'react'
import FormInput from './FormInput'
import AddressInput from './AddressInput'

function RecruitEmployee() {
  return (
    <form className="w-full h-full max-w-[1033px] mt-14 ml-9 max-md:mt-10">
      <div className="flex flex-row gap-[117px] max-w-full text-sm leading-none text-sky-950 w-[979px]">
        <FormInput label="Engineer Name" />
        <FormInput label="Email Address" />
        <FormInput label="Phone Number" />
      </div>
      <div className="mt-9 max-w-full w-[979px]">
        <div className="flex flex-row gap-[97px] max-md:flex-col">
          <AddressInput
            label="Address Line 1"
            additionalInput={{ label: 'City' }}
          />
          <AddressInput
            label="Address Line 2"
            additionalInput={{ label: 'State' }}
          />
          <FormInput label="Work Type" className="h-[80px]" />
          {/* <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          </div> */}
        </div>
      </div>
      <div className="flex flex-row gap-[117px] mt-9   max-w-full text-sm leading-none text-sky-950 w-full max-md:mb-2.5">
        <FormInput label="City" />
        <FormInput label="State" />
        <FormInput label="Pin Code" />
      </div>
      
    </form>
    
  )
}

export default RecruitEmployee
