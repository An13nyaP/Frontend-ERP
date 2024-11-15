import React from 'react';
import FormInput from './FormInput';
import AddressInput from './AddressInput';

function CompanyForm() {
    return (
        <form className="w-full max-w-[1033px] mt-14 max-md:mt-10">
            <div className="flex flex-wrap gap-10 max-w-full text-sm leading-none text-sky-950 w-[979px]">
                <FormInput label="Company Name" />
                <FormInput label="Email Address" />
                <FormInput label="Phone Number" />
            </div>
            <div className="mt-9 max-w-full w-[979px]">
                <div className="flex gap-5 max-md:flex-col">
                    <AddressInput label="Address Line 1" additionalInput={{ label: "City" }} />
                    <AddressInput label="Address Line 2" additionalInput={{ label: "State" }} />
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-sm leading-none text-sky-950 max-md:mt-10">
                            <FormInput label="GST Number" />
                            <FormInput label="Pin Code" className="mt-20 max-md:mt-10" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 mt-9 -mb-16 max-w-full text-sm leading-none text-sky-950 w-[632px] max-md:mb-2.5">
                <FormInput label="Gst Registration Number" className="flex-1 grow shrink-0 basis-0 w-fit" />
                <FormInput label="Gst Registration Type" className="flex-1 grow shrink-0 basis-0 w-fit" />
            </div>
        </form>
    );
}

export default CompanyForm;