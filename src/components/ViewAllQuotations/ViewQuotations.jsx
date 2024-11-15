import React from 'react';
import Sidebar from './Sidebar';
import FiltersSection from './FiltersSection';
import QuotationsTable from './QuotationsTable';
import Pagination from './Pagination';

function ViewQuotationsPage() {
    return (
        <div className="flex overflow-hidden flex-wrap gap-6 bg-slate-50">
            <Sidebar />
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <FiltersSection />
                <main className="flex flex-col py-11 pl-8 w-full bg-white shadow-[4px_4px_40px_rgba(0,0,0,0.15)] max-md:pl-5 max-md:max-w-full">
                    <header className="flex flex-wrap gap-5 justify-between mr-10 w-full text-2xl font-medium tracking-wide text-black max-w-[1149px] max-md:mr-2.5 max-md:max-w-full">
                        <h1>View Quotations</h1>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/25d020389ec4a19f9803ac5b99062eef305b45444be8e11697a06e65bbff6f1a?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" className="object-contain shrink-0 self-start rounded-none aspect-square w-[35px]" alt="" />
                    </header>
                    <QuotationsTable />
                    <Pagination />
                </main>
            </div>
        </div>
    );
}

export default ViewQuotationsPage;