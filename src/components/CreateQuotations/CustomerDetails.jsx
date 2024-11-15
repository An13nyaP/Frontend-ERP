import React from 'react';

function CustomerDetails() {
    return (
        <section className="mt-7 max-md:max-w-full">
            <div className="flex relative flex-col max-md:max-w-full">
                <div className="flex z-0 flex-col max-w-full w-[1218px]">
                    <div className="flex shrink-0 bg-blue-100 h-[30px] max-md:max-w-full" />
                </div>
                <h3 className="absolute z-0 h-5 text-sm leading-none bottom-[5px] left-[30px] text-sky-950 w-[102px]">Select Customer</h3>
            </div>
            <div className="flex flex-wrap gap-10 mt-7 ml-7 max-w-full text-sm font-light leading-none text-sky-950 w-[659px]">
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 min-h-[65px] w-fit">
                    <label htmlFor="customerName">Customer Name</label>
                    <input id="customerName" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                </div>
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 min-h-[65px] w-fit">
                    <label htmlFor="customerNumber">Customer Number</label>
                    <input id="customerNumber" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                </div>
            </div>
        </section>
    );
}

export default CustomerDetails;