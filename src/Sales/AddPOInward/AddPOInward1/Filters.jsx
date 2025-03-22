import React from "react";

function Filters() {
    return (
        <div className="w-full text-sm">
            {/* Work Order Number */}
            <div className="flex flex-col px-4 py-2 flex-1 min-w-[200px]">
                <label className="text-gray-700">Work Order Number</label>
                <input type="text" className="px-3 py-1.5 mt-1.5 mb-4 border border-gray-300 rounded outline-none w-1/3" />
            </div>

            {/* Select Quotation */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Select Quotation
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Customer Name</label>
                    <input type="text" className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full" />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Quotation Number</label>
                    <input type="text" className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full" />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Quotation Issue Date</label>
                    <input type="date" className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full" />
                </div>
            </div>

            {/* Fill Purchase Order Details */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Fill Purchase Order Details
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Project Name</label>
                    <input type="text" className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full" />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Purchase Order Number</label>
                    <input type="text" className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full" />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Delivery Date</label>
                    <input type="date" className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full" />
                </div>
            </div>

            {/* Item Details */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Item Details
            </div>
            <div className="p-4">
                <label className="text-gray-700">Item Description</label>
                <textarea className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full h-20"></textarea>

                <div className="flex flex-wrap gap-4 mt-4">
                    <input type="text" placeholder="Part#" className="border border-gray-300 rounded px-3 py-1.5 w-full max-w-[150px]" />
                    <input type="text" placeholder="HSN Number" className="border border-gray-300 rounded px-3 py-1.5 w-full max-w-[150px]" />
                    <input type="text" placeholder="Unit of Measure" className="border border-gray-300 rounded px-3 py-1.5 w-full max-w-[150px]" />
                    <input type="number" placeholder="Qty Nos" className="border border-gray-300 rounded px-3 py-1.5 w-full max-w-[150px]" />
                    <input type="number" placeholder="Unit Rate in INR" className="border border-gray-300 rounded px-3 py-1.5 w-full max-w-[150px]" />
                </div>

                {/* Add to List Button */}
                <div className="flex justify-end mt-4">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 flex items-center gap-2">
                        <span className="text-lg">+</span> Add to list
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Filters;
