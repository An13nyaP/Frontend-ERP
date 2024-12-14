import React from 'react';
import Header from './Header';
import CompanyForm from './CompanyForm';

function CompanyDetails() {
    return (
        <div className="flex overflow-hidden flex-wrap gap-6 bg-slate-50">
            {/* <Sidebar /> */}
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <Header />
                <main className="flex flex-col items-start px-16 pt-32 pb-80 w-full bg-white shadow-[4px_4px_40px_rgba(0,0,0,0.15)] max-md:px-5 max-md:py-24 max-md:max-w-full">
                    <div className="flex flex-wrap gap-5 justify-between w-full text-black max-w-[1033px] max-md:max-w-full">
                        <h1 className="text-2xl font-medium tracking-wide">Company Details</h1>
                        <div className="flex gap-1.5 items-center self-start text-base leading-5">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/25d020389ec4a19f9803ac5b99062eef305b45444be8e11697a06e65bbff6f1a?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" alt="" className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-square w-[35px]" />
                            <span className="my-auto w-[127px]">Update Company Details</span>
                        </div>
                    </div>
                    <CompanyForm />
                </main>
            </div>
        </div>
    );
}

export default CompanyDetails;