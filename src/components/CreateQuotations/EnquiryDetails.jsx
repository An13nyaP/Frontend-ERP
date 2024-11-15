import React from 'react';

function EnquiryDetails() {
    return (
        <div className="flex flex-wrap gap-10 mt-20 ml-3.5 max-w-full text-base font-light text-sky-950 w-[659px] max-md:mt-10">
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 min-h-[65px] w-fit">
                <label htmlFor="enquiryMedium">Enquiry Medium</label>
                <select id="enquiryMedium" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[35px]">
                    <option value="">Select medium</option>
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                    <option value="website">Website</option>
                </select>
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 min-h-[65px] w-fit">
                <label htmlFor="enquiryDate">Enquiry Date</label>
                <input id="enquiryDate" type="date" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[35px]" />
            </div>
        </div>
    );
}

export default EnquiryDetails;