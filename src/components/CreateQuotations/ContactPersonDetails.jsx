import React from 'react';

function ContactPersonDetails() {
    return (
        <section className="mt-7 max-md:max-w-full">
            <div className="flex relative flex-col max-md:max-w-full">
                <div className="flex z-0 flex-col max-w-full w-[1218px]">
                    <div className="flex shrink-0 bg-blue-100 h-[30px] max-md:max-w-full" />
                </div>
                <h3 className="absolute z-0 h-5 text-sm leading-none bottom-[5px] left-[30px] text-sky-950 w-[143px]">Contact Person Details</h3>
            </div>
            <div className="flex flex-col items-start px-3.5 mt-7 w-full max-md:max-w-full">
                <div className="flex flex-wrap gap-10 ml-3.5 w-full text-sm font-light leading-none max-w-[1021px] text-sky-950 max-md:max-w-full">
                    <div className="flex flex-col flex-1 whitespace-nowrap min-h-[65px]">
                        <label htmlFor="contactName">Name</label>
                        <input id="contactName" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                    </div>
                    <div className="flex flex-col flex-1 min-h-[65px]">
                        <label htmlFor="contactEmail">Email Address</label>
                        <input id="contactEmail" type="email" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                    </div>
                    <div className="flex flex-col flex-1 min-h-[65px]">
                        <label htmlFor="contactPhone">Phone Number</label>
                        <input id="contactPhone" type="tel" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactPersonDetails;