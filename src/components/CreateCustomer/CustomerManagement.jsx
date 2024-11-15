import React from 'react';
import Sidebar from './Sidebar';
import FilterSection from './FilterSection';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';

function CustomerManagement() {
    return (
        <div className="flex overflow-hidden flex-wrap gap-6 bg-slate-50">
            <Sidebar />
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <FilterSection />
                <main className="flex flex-col items-start pt-12 pb-24 w-full bg-white shadow-[4px_4px_40px_rgba(0,0,0,0.15)] max-md:max-w-full">
                    <CustomerForm />
                    <CustomerList />
                </main>
            </div>
        </div>
    );
}

export default CustomerManagement;