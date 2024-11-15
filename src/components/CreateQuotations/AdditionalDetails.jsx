import React from 'react';

function AdditionalDetails() {
    return (
        <section className="mt-8 max-md:max-w-full">
            <div className="flex relative flex-col max-md:max-w-full">
                <div className="flex z-0 flex-col max-w-full w-[1218px]">
                    <div className="flex shrink-0 bg-blue-100 h-[30px] max-md:max-w-full" />
                </div>
                <h3 className="absolute z-0 h-5 text-sm leading-none bottom-[5px] left-[30px] text-sky-950 w-[113px]">Additional Details</h3>
            </div>
            <div className="flex flex-col mt-7 ml-8 max-w-full w-[967px]">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[33%] max-md:w-full">
                        <label htmlFor="termsAndConditions" className="text-base font-light text-sky-950">
                            Terms And Conditions
                        </label>
                        <textarea
                            id="termsAndConditions"
                            className="flex overflow-hidden flex-col items-end px-14 pt-14 mt-1 w-full bg-white rounded border border-solid border-stone-300 max-md:pl-5"
                        />
                    </div>
                    <div className="flex flex-col w-[33%] max-md:w-full">
                        <label htmlFor="paymentTerms" className="text-base font-light text-sky-950">
                            Payment Terms
                        </label>
                        <textarea
                            id="paymentTerms"
                            className="flex overflow-hidden flex-col items-end px-14 pt-14 mt-1 w-full bg-white rounded border border-solid border-stone-300 max-md:pl-5"
                        />
                    </div>
                    <div className="flex flex-col w-[33%] max-md:w-full">
                        <label htmlFor="taxAndDuties" className="text-base font-light text-sky-950">
                            Tax And Duties
                        </label>
                        <textarea
                            id="taxAndDuties"
                            className="flex overflow-hidden flex-col items-end px-14 pt-14 mt-1 w-full bg-white rounded border border-solid border-stone-300 max-md:pl-5"
                        />
                    </div>
                </div>
                <div className="flex gap-5 mt-7 max-md:flex-col">
                    <div className="flex flex-col w-[33%] max-md:w-full">
                        <label htmlFor="briefDescription" className="text-base font-light text-sky-950">
                            Brief Description
                        </label>
                        <textarea
                            id="briefDescription"
                            className="flex overflow-hidden flex-col items-end px-14 pt-14 mt-1 w-full bg-white rounded border border-solid border-stone-300 max-md:pl-5"
                        />
                    </div>
                    <div className="flex flex-col w-[33%] max-md:w-full">
                        <label htmlFor="deliveryDate" className="text-sm font-light leading-none text-sky-950">Delivery Date</label>
                        <input
                            id="deliveryDate"
                            type="date"
                            className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]"
                        />
                    </div>
                    <div className="flex flex-col w-[33%] max-md:w-full">
                        <label htmlFor="packingAndForwarding" className="text-sm font-light leading-none text-sky-950">Packing And Forwarding</label>
                        <input
                            id="packingAndForwarding"
                            className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdditionalDetails;