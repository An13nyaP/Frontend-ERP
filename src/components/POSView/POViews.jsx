import React from 'react';
import Sidebar from './Sidebar';
import FilterSection from './FilterSection';
import PurchaseOrderTable from './PurchaseOrderTable';

function POViews() {
    return (
        <div className="flex overflow-hidden flex-wrap gap-6 bg-slate-50">
            <Sidebar />
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <FilterSection />
                <main className="flex flex-col pt-9 pr-2 pb-20 pl-8 w-full bg-white shadow-[4px_4px_40px_rgba(0,0,0,0.15)] max-md:pl-5 max-md:max-w-full">
                    <header className="flex flex-wrap gap-5 justify-between w-full text-2xl font-medium tracking-wide max-w-[1081px] text-sky-950 max-md:max-w-full">
                        <h1>View all Customer Purchase Order</h1>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8a0cd6fded6cd81850d900a7a01a6c11dae361e2658061cebedb41cf695cd76?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" className="object-contain shrink-0 rounded-none aspect-[1.04] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[52px]" alt="" />
                    </header>
                    <PurchaseOrderTable />
                </main>
            </div>
        </div>
    );
}

export default POViews;