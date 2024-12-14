import * as React from "react";
import { FormInput } from "./FormInput";
import { AddressInput } from "./AddressInput";

export default function CustomerForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const cityStateFields = [
        { label: "City", id: "city" },
        { label: "State", id: "state" },
        { label: "Pin Code", id: "pinCode" }
    ];

    return (
        <form onSubmit={handleSubmit} className="flex flex-col rounded-none">
            <div className="flex flex-col  px-20 pt-11 pb-32 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <div className="flex flex-col mb-0 w-full max-w-[979px] max-md:mb-2.5 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow max-md:mt-10">
                                    <FormInput label="Customer Name" id="customerName" />
                                    <AddressInput label="Address Line 1" id="addressLine1" />
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow max-md:mt-10">
                                    <FormInput label="Email Address" type="email" id="email" />
                                    <AddressInput label="Address Line 2" id="addressLine2" />
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col text-sm font-light leading-none text-sky-950 max-md:mt-10">
                                    <FormInput label="Phone Number" type="tel" id="phone" />
                                    <FormInput label="GST Number" id="gst" className="mt-9" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-10 mt-9 text-sm font-light leading-none text-sky-950 max-md:max-w-full">
                        {cityStateFields.map(field => (
                            <div key={field.id} className="flex flex-col flex-1 whitespace-nowrap min-h-[65px]">
                                <FormInput label={field.label} id={field.id} />
                            </div>
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="flex flex-col justify-center items-center self-center px-5 py-3 mt-40 max-w-full text-2xl leading-none text-center text-white bg-blue-700 rounded-xl min-h-[44px] w-[220px] max-md:mt-10"
                    >
                        Add to list
                    </button>
                </div>
            </div>
        </form>
    );
}