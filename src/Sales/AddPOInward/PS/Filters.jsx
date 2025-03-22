import React from "react";

function Filters() {
    return (
        <div className="w-full text-sm">
            {/* Header Section */}
            <div className="flex justify-between items-center px-4 py-4">
                <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50">
                    Order Completed
                </button>
                <button className="bg-blue-600 text-white p-3 rounded-md shadow hover:bg-blue-700">
                    🖨️
                </button>
            </div>

            {/* Production Slip Information */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Production Slip Information
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Work Order Number</label>
                    <input type="text" className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full" />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Slip Number</label>
                    <input type="text" className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full" />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Project Name</label>
                    <input type="text" className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full" />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Slip Date</label>
                    <input type="date" className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full" />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Customer</label>
                    <input type="text" className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full" />
                </div>
            </div>

            {/* Item Information */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Item Information
            </div>
        </div>
    );
}

export default Filters;
