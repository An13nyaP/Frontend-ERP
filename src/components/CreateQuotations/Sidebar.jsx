import React from 'react';

const menuItems = [
    { label: 'Home', active: false },
    { label: "Pending PO's", active: false },
    { label: 'Create Customer', active: false },
    { label: 'Create Quotation', active: true },
    { label: 'View All Quotations', active: false },
    { label: 'Create Po-Inward', active: false },
    { label: 'View all Purchase Order', active: false },
];

function Sidebar() {
    return (
        <aside className="flex flex-col self-start px-7 pt-6 pb-96 text-base bg-slate-50 text-zinc-700 max-md:pb-24 max-md:pl-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b582b661f7272945b096cabc85b5238c9223eed7c5d625931cd61965b5c0b19b?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" className="object-contain self-center max-w-full rounded-none aspect-[3.53] w-[127px]" alt="Company Logo" />
            <nav className="flex flex-col mt-14 max-md:mt-10">
                {menuItems.map((item, index) => (
                    <div key={index} className="flex flex-col mt-8 max-w-full rounded-xl w-[153px]">
                        <div className={`px-2.5 py-1 rounded-xl ${item.active ? 'bg-blue-100 text-sky-950' : 'bg-slate-50'}`}>
                            {item.label}
                        </div>
                    </div>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;