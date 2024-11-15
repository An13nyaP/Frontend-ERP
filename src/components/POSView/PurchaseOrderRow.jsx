import React from 'react';

function PurchaseOrderRow({
    workOrderNumber,
    poNumber,
    customer,
    poDate,
    amount,
    projectEngineer,
    deliveryDate,
    status,
    customerAcceptanceStatus,
    remarks
}) {
    return (
        <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full bg-white border-b-2 border-blue-100 max-md:max-w-full">
            <div className="flex-1 shrink gap-1 self-stretch my-auto text-sm font-medium text-center whitespace-nowrap text-sky-950">
                {workOrderNumber}
            </div>
            <div className="flex-1 shrink gap-2 self-stretch my-auto text-sm font-medium whitespace-nowrap text-sky-950">
                {poNumber}
            </div>
            <div className="flex-1 shrink gap-2 self-stretch my-auto text-sm font-medium text-sky-950">
                {customer}
            </div>
            <div className="flex-1 shrink gap-2 self-stretch my-auto text-sm font-medium whitespace-nowrap text-sky-950">
                {poDate}
            </div>
            <div className="flex-1 shrink gap-2 self-stretch my-auto text-sm font-medium text-sky-950">
                {amount}
            </div>
            <div className="flex-1 shrink gap-2 self-stretch my-auto text-sm font-medium text-sky-950">
                {projectEngineer}
            </div>
            <div className="flex-1 shrink gap-2 self-stretch my-auto text-sm font-medium whitespace-nowrap text-sky-950">
                {deliveryDate}
            </div>
            <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto text-xs font-medium text-green-600 whitespace-nowrap basis-0">
                <div className="gap-2.5 self-stretch px-3 py-2 my-auto bg-white rounded-3xl">
                    {status}
                </div>
            </div>
            <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto text-xs font-medium text-green-600 whitespace-nowrap basis-0">
                <div className="gap-2.5 self-stretch px-3 py-2 my-auto bg-white rounded-3xl">
                    {customerAcceptanceStatus}
                </div>
            </div>
            <div className="flex-1 shrink gap-2 self-stretch my-auto text-sm font-medium text-sky-950">
                {remarks}
            </div>
            <div className="flex flex-1 shrink gap-2 justify-center items-center self-stretch my-auto basis-0">
                <div className="flex gap-4 items-center self-stretch my-auto w-6">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bef5ba3ca8bb8f8ea64924e63b97b32c4a7e2cb16a5cc82123f681755dc285e7?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" className="object-contain self-stretch my-auto w-6 aspect-square" alt="" />
                </div>
            </div>
        </div>
    );
}

export default PurchaseOrderRow;