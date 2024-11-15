import React from 'react';

function CustomerForm() {
    return (
        <form className="flex flex-col items-start pt-12 pb-24 w-full bg-white shadow-[4px_4px_40px_rgba(0,0,0,0.15)] max-md:max-w-full">
            <div className="flex flex-col self-stretch pr-20 pl-6 w-full max-md:px-5 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between w-full text-black max-md:max-w-full">
                    <h2 className="text-2xl font-medium tracking-wide">Create Customer</h2>
                    <div className="flex gap-1.5 items-center self-start text-base leading-5">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/25d020389ec4a19f9803ac5b99062eef305b45444be8e11697a06e65bbff6f1a?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" alt="" className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-square w-[35px]" />
                        <span className="my-auto w-[127px]">Update Customer Details</span>
                    </div>
                </div>
                <div className="mt-14 max-w-full w-[979px] max-md:mt-10">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10">
                                <div className="flex flex-col w-full text-sm font-light leading-none min-h-[65px] text-sky-950">
                                    <label htmlFor="customerName">Customer Name</label>
                                    <input id="customerName" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                                </div>
                                <div className="flex flex-col mt-9">
                                    <label htmlFor="addressLine1" className="text-base font-light text-sky-950">Address Line 1</label>
                                    <textarea id="addressLine1" className="flex overflow-hidden flex-col items-end px-14 pt-14 mt-1 w-full bg-white rounded border border-solid border-stone-300 max-md:pl-5" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10">
                                <div className="flex flex-col w-full text-sm font-light leading-none min-h-[65px] text-sky-950">
                                    <label htmlFor="emailAddress">Email Address</label>
                                    <input id="emailAddress" type="email" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                                </div>
                                <div className="flex flex-col mt-9">
                                    <label htmlFor="addressLine2" className="text-base font-light text-sky-950">Address Line 2</label>
                                    <textarea id="addressLine2" className="flex overflow-hidden flex-col items-end px-14 pt-14 mt-1 w-full bg-white rounded border border-solid border-stone-300 max-md:pl-5" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col text-sm font-light leading-none text-sky-950 max-md:mt-10">
                                <div className="flex flex-col w-full min-h-[65px]">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input id="phoneNumber" type="tel" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                                </div>
                                <div className="flex flex-col mt-9 w-full min-h-[65px]">
                                    <label htmlFor="gstNumber">GST Number</label>
                                    <input id="gstNumber" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-10 mt-9 max-w-full text-sm font-light leading-none text-sky-950 w-[979px]">
                        <div className="flex flex-col flex-1 whitespace-nowrap min-h-[65px]">
                            <label htmlFor="city">City</label>
                            <input id="city" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                        </div>
                        <div className="flex flex-col flex-1 whitespace-nowrap min-h-[65px]">
                            <label htmlFor="state">State</label>
                            <input id="state" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                        </div>
                        <div className="flex flex-col flex-1 min-h-[65px]">
                            <label htmlFor="pinCode">Pin Code</label>
                            <input id="pinCode" type="number" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                        </div>
                    </div>
                    <button type="submit" className="flex flex-col justify-center items-center self-center px-5 py-3 mt-20 max-w-full text-2xl leading-none text-center text-white bg-blue-700 rounded-xl min-h-[44px] w-[220px] max-md:mt-10">
                        Add to list
                    </button>
                </div>
            </div>
        </form>
    );
}

export default CustomerForm;