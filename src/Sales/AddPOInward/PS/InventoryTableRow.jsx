import React from "react";

function InventoryTableRow({ item, index }) {
    return (
        <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full bg-white border-b-2 border-blue-100 max-md:max-w-full">
            <div className="flex-1 grow shrink gap-1 self-stretch my-auto w-12 text-sm font-medium text-center whitespace-nowrap text-sky-950">
                {item.id}
            </div>
            <div className="flex-1 grow shrink gap-2 self-stretch my-auto text-sm font-medium whitespace-nowrap text-sky-950 w-[108px]">
                {item.part}
            </div>
            <div className="grow shrink gap-2 self-stretch my-auto text-sm font-medium text-sky-950 w-[190px]">
                {item.description}
            </div>
            <div className="flex-1 grow shrink gap-2 self-stretch my-auto text-sm font-medium whitespace-nowrap text-sky-950 w-[88px]">
                {item.hsnNumber}
            </div>
            <div className="flex-1 grow shrink gap-2 self-stretch my-auto text-sm font-medium whitespace-nowrap text-sky-950 w-[88px]">
                {item.unitOfMeasure}
            </div>
            <div className="flex-1 grow shrink gap-2 self-stretch my-auto text-sm font-medium whitespace-nowrap text-sky-950 w-[88px]">
                {item.qtyNos}
            </div>
            <div className="flex-1 grow shrink gap-2 self-stretch my-auto text-sm font-medium text-sky-950 w-[108px]">
                {item.unitRate}
            </div>
            <div className="flex-1 grow shrink gap-2 self-stretch my-auto text-sm font-medium text-sky-950 w-[138px]">
                {item.totalAmount}
            </div>
            <div className="flex grow shrink gap-2 justify-center items-center self-stretch my-auto w-12">
                <div className="flex gap-4 items-center self-stretch my-auto w-[25px]">
                    <img
                        loading="lazy"
                        src={`http://b.io/ext_${index + 3}-`}
                        alt="Delete item"
                        className="object-contain self-stretch my-auto aspect-square w-[25px]"
                    />
                </div>
            </div>
        </div>
    );
}

export default InventoryTableRow;