/**
 * This code was generated by Builder.io
 */
import React from "react";

function FilterSection() {
    return (
        <section className="flex flex-wrap gap-10 self-end py-7 pr-20 pl-9 max-w-full bg-slate-50 text-sky-950 w-[1171px] max-md:px-5">
            <h2 className="my-auto text-2xl">Filters</h2>
            <div className="flex flex-wrap flex-auto gap-7 text-base max-md:max-w-full">
                <div className="flex gap-1.5 items-center whitespace-nowrap">
                    <label htmlFor="customer" className="self-stretch my-auto w-[70px]">
                        Customer
                    </label>
                    <input
                        id="customer"
                        type="text"
                        className="flex shrink-0 self-stretch my-auto bg-white rounded border border-solid border-stone-300 h-[35px] w-[171px]"
                    />
                </div>
                <div className="flex gap-1.5 items-center">
                    <label htmlFor="orderId" className="self-stretch my-auto w-[70px]">
                        Order Id
                    </label>
                    <input
                        id="orderId"
                        type="text"
                        className="flex shrink-0 self-stretch my-auto bg-white rounded border border-solid border-stone-300 h-[35px] w-[171px]"
                    />
                </div>
                <div className="flex gap-1.5 items-center">
                    <label htmlFor="deliveryDate" className="self-stretch my-auto w-24">
                        Delivery Date
                    </label>
                    <input
                        id="deliveryDate"
                        type="date"
                        className="flex shrink-0 self-stretch my-auto bg-white rounded border border-solid border-stone-300 h-[35px] w-[171px]"
                    />
                </div>
            </div>
        </section>
    );
}

export default FilterSection;
