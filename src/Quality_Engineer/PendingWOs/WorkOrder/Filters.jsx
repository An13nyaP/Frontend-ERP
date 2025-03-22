import React from "react";

function Filters() {
    return (
        <div className="w-full text-sm">
            {/* Order Information Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold flex justify-between items-center">
                <span>Order Information</span>
                {/* Print Button */}
                <button className="bg-blue-500 text-white p-2 rounded-md shadow hover:bg-blue-600">
                    🖨️
                </button>
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="companyName" className="text-gray-700">
                        Company Name
                    </label>
                    <input
                        id="companyName"
                        type="text"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="workOrderNumber" className="text-gray-700">
                        Work Order Number
                    </label>
                    <input
                        id="workOrderNumber"
                        type="text"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="quotationNumber" className="text-gray-700">
                        Quotation Number
                    </label>
                    <input
                        id="quotationNumber"
                        type="text"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="workOrderIssueDate" className="text-gray-700">
                        Work Order Issue Date
                    </label>
                    <input
                        id="workOrderIssueDate"
                        type="date"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
            </div>

            {/* Assign Engineers Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Assign Engineers
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[300px]">
                    <label htmlFor="projectEngineer" className="text-gray-700">
                        Project Engineer
                    </label>
                    <textarea
                        id="projectEngineer"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full h-16"
                    ></textarea>
                </div>
                <div className="flex flex-col flex-1 min-w-[300px]">
                    <label htmlFor="qualityEngineer" className="text-gray-700">
                        Quality Engineer
                    </label>
                    <textarea
                        id="qualityEngineer"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full h-16"
                    ></textarea>
                </div>
            </div>

            {/* Date of Delivery Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Date of Delivery
            </div>
            <div className="p-4">
                <label htmlFor="deliveryDate" className="text-gray-700 px-3 ">
                    Delivery Date
                </label>
                <input
                    id="deliveryDate"
                    type="date"
                    className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full max-w-[300px]"
                />
            </div>

            {/* Item Details Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Item Details
            </div>
        </div>
    );
}

export default Filters;
