import React from "react";

function InventoryTableHeader() {
    const headers = [
        { label: "Sl No.", width: "w-12" },
        { label: "Part", width: "w-[108px]" },
        { label: "Item Description", width: "w-[190px]" },
        { label: "Hsn Number", width: "w-[88px]" },
        { label: "Unit Of Mesure", width: "w-[88px]" },
        { label: "Qty Nos", width: "w-[88px]" },
        { label: "Unit Rate in INR", width: "w-[108px]" },
        { label: "Total Amount in INR", width: "w-[138px]" },
        { label: "Delete", width: "w-12" },
    ];

    return (
        <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full text-sm font-bold text-black bg-blue-100 max-md:max-w-full">
            {headers.map((header, index) => (
                <div
                    key={index}
                    className={`flex-1 grow shrink gap-1 self-stretch my-auto ${header.width} text-center`}
                >
                    {header.label}
                </div>
            ))}
        </div>
    );
}

export default InventoryTableHeader;