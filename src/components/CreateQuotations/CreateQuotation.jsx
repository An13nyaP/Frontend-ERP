import React from 'react';
import Sidebar from './Sidebar';
import FilterSection from './FilterSection';
import CustomerDetails from './CustomerDetails';
import ContactPersonDetails from './ContactPersonDetails';
import EnquiryDetails from './EnquiryDetails';
import ItemTable from './ItemTable';
import NoteSection from './NoteSection';
import AdditionalDetails from './AdditionalDetails';
import ApprovalStatus from './ApprovalStatus';

function CreateQuotation() {
    return (
        <main className="flex flex-col pb-[1412px] max-md:pb-24">
            <div className="flex overflow-hidden flex-wrap gap-6 bg-slate-50">
                <Sidebar />
                <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                    <FilterSection />
                    <section className="flex flex-col pt-12 pb-36 w-full bg-white shadow-[4px_4px_40px_rgba(0,0,0,0.15)] max-md:pb-24 max-md:max-w-full">
                        <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1129px] text-sky-950 max-md:max-w-full">
                            <h1 className="text-2xl font-medium tracking-wide">Create Quotation</h1>
                            <button className="flex gap-1.5 items-center text-base">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/06c1e65a131e1020efdefae827bcd7c986caaad60d865b98850485bb962c56e3?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" className="object-contain shrink-0 self-stretch my-auto w-9 rounded-none aspect-square" alt="" />
                                <span className="self-stretch my-auto w-[141px]">Add New Customer</span>
                            </button>
                        </div>
                        <CustomerDetails />
                        <ContactPersonDetails />
                        <EnquiryDetails />
                        <ItemTable />
                        <NoteSection />
                        <AdditionalDetails />
                        <ApprovalStatus />
                        <div className="flex justify-center mt-24 mr-48 max-w-full max-md:mt-10 max-md:mr-2.5">
                            <button className="px-5 py-3 text-2xl leading-none text-center text-white whitespace-nowrap bg-blue-700 rounded-xl w-[230px]">
                                Submit
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default CreateQuotation;