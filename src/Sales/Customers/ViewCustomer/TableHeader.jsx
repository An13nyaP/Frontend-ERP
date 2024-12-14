import * as React from "react";

function TableHeader() {
    return (
        <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full font-bold bg-blue-100 max-md:max-w-full">
            <div className="flex-1 shrink gap-1 self-stretch my-auto text-center">
                Customer Number
            </div>
            <div className="flex-1 shrink gap-2 self-stretch my-auto whitespace-nowrap">
                Customer
            </div>
            <div className="flex gap-2 items-center self-stretch my-auto whitespace-nowrap min-w-[240px] w-[250px]">
                <div className="flex-1 shrink self-stretch my-auto basis-0">
                    Address
                </div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4" />
            </div>
            <div className="flex-1 shrink gap-2 self-stretch my-auto whitespace-nowrap">
                City
            </div>
            <div className="flex-1 shrink gap-2 self-stretch my-auto w-[120px]">
                Phone Number
            </div>
            <div className="flex-1 shrink gap-2 self-stretch my-auto">
                Email Address
            </div>
        </div>
    );
}

export default TableHeader;