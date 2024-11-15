import React from 'react';

function ApprovalStatus() {
    return (
        <section className="mt-7 max-md:max-w-full">
            <div className="flex relative flex-col max-md:max-w-full">
                <div className="flex z-0 flex-col max-w-full w-[1218px]">
                    <div className="flex shrink-0 bg-blue-100 h-[30px] max-md:max-w-full" />
                </div>
                <h3 className="absolute z-0 h-5 text-sm leading-none bottom-[5px] left-[30px] text-sky-950 w-[101px]">Approval Status</h3>
            </div>
            <div className="flex flex-col mt-7 mb-0 ml-8 max-w-full w-[881px] max-md:mb-2.5">
                <div className="flex flex-wrap gap-5 justify-between items-start max-md:max-w-full">
                    <div className="flex flex-col text-sm font-light leading-none whitespace-nowrap min-h-[65px] text-sky-950">
                        <label htmlFor="approverName">Name</label>
                        <input id="approverName" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                    </div>
                    <div className="flex flex-col text-sm font-light leading-none min-h-[65px] text-sky-950">
                        <label htmlFor="approverPhone">Phone Number</label>
                        <input id="approverPhone" type="tel" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                    </div>
                    <div className="flex flex-col items-center px-11 mt-3.5 bg-white rounded-xl border border-solid border-stone-300 max-md:px-5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/27258643438e71d2fcc546f24bc615a453234411ee2143845e557f2b44c692f4?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" className="object-contain aspect-[1.4] w-[91px]" alt="Approval status icon" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ApprovalStatus;