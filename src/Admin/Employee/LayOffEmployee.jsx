import React from 'react'
import FormInput from './FormInput'
import AddressInput from './AddressInput'

function LayOffEmployee() {
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
            label="Reason For Layoff"
            additionalInput={{ label: 'City' }}
          />
          <AddressInput
            label="Contribution to Company"
            additionalInput={{ label: 'State' }}
          />
        </div>
      </div>
      
    </form>
  )
}

export default LayOffEmployee
