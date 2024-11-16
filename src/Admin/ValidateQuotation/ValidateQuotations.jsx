import React from 'react';
import Sidebar from '../components/Sidebar';
import FilterSection from '../components/FilterSection';
import QuotationTable from './QuotationTable';
import Pagination from './Pagination';

function ValidateQuotations() {
    return (
        <div className="flex overflow-hidden flex-wrap gap-6 bg-slate-50">
            {/* <Sidebar /> */}
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <FilterSection />
                <main className="flex flex-col pb-24 w-full bg-white shadow-[4px_4px_40px_rgba(0,0,0,0.15)] max-md:max-w-full">
                    <nav className="flex flex-wrap items-start max-w-full text-base tracking-wide w-[498px]">
                        <div className="flex-1 shrink gap-2.5 self-stretch px-7 py-6 text-blue-700 bg-white border-blue-700 border-b-[3px] min-w-[240px] max-md:px-5">
                            Approve Quotations
                        </div>
                        <div className="flex-1 shrink gap-2.5 self-stretch px-7 py-6 bg-white min-w-[240px] text-zinc-700 max-md:px-5">
                            Approve PO out
                        </div>
                    </nav>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/25d020389ec4a19f9803ac5b99062eef305b45444be8e11697a06e65bbff6f1a?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539"
                        alt=""
                        className="object-contain self-end mr-9 rounded-none aspect-square w-[35px] max-md:mr-2.5"
                    />
                    <QuotationTable />
                    <Pagination />
                </main>
            </div>
        </div>
    );
}

export default ValidateQuotations;