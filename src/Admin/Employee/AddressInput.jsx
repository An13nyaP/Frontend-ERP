import React from 'react'
import FormInput from './FormInput'

function AddressInput({ label, additionalInput }) {
  return (
    <div className="flex flex-col w-[285px] mr-5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-10">
        <label
          htmlFor={label.toLowerCase().replace(/\s+/g, '-')}
          className="text-base text-sky-950"
        >
          {label}
        </label>
        {/* <div className="flex overflow-hidden flex-col items-end px-14 pt-14 mt-1 w-full bg-white rounded border border-solid border-stone-300 max-md:pl-5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/59aadf47c2e0dcf56db31f473f71e1b4499eca55229c78bfe097227edcf3ead1?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" alt="" className="object-contain w-3.5 aspect-[0.93]" />
                    </div> */}
        <textarea
          name="address"
          id="address"
          className="px-2 py-2 mt-1 w-[285px] h-[74px] overflow-hidden bg-white rounded border border-solid border-stone-300 left-0 top-0 max-md:pl-5"
        ></textarea>
      </div>
      {/* <FormInput label={additionalInput.label} className="mt-9" /> */}
    </div>
  )
}

export default AddressInput
