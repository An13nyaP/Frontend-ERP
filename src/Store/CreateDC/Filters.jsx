import React from "react";

function Filters() {
    const filterOptions = [
        { label: "Material Type", id: "materialType" },
        { label: "Good Type", id: "goodType" },
        { label: "Item Selector", id: "itemSelector" },
    ];

    return (
        <div className="w-full text-sm">
            {/* Select Quotation Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Select Quotation
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="supplierName" className="text-gray-700">
                        Supplier Name
                    </label>
                    <input
                        id="supplierName"
                        type="text"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="supplierNumber" className="text-gray-700">
                        Supplier Number
                    </label>
                    <input
                        id="supplierNumber"
                        type="text"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
            </div>

            {/* Add New Delivery Callahan Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Add New Delivery Callahan
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="placeToSupply" className="text-gray-700">
                        Place To Supply
                    </label>
                    <input
                        id="placeToSupply"
                        type="text"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="orderDate" className="text-gray-700">
                        Order Date
                    </label>
                    <input
                        id="orderDate"
                        type="date"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="dispatchDate" className="text-gray-700">
                        Dispatch Date
                    </label>
                    <input
                        id="dispatchDate"
                        type="date"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="driverName" className="text-gray-700">
                        Driver Name
                    </label>
                    <input
                        id="driverName"
                        type="text"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="phoneNumber" className="text-gray-700">
                        Phone Number
                    </label>
                    <input
                        id="phoneNumber"
                        type="text"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="vehicleNumber" className="text-gray-700">
                        Vehicle Number
                    </label>
                    <input
                        id="vehicleNumber"
                        type="text"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
            </div>

            {/* Plus Button for Delivery Section */}
            <div className="p-4">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">
                    <span className="text-lg">+</span>
                </button>
            </div>

            {/* Item Details Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Item Details
            </div>

            {/* First Row - Dropdowns */}
            <div className="flex flex-wrap gap-10 p-4">
                {filterOptions.map((option) => (
                    <div key={option.id} className="flex flex-col flex-1 min-w-[200px]">
                        <label htmlFor={option.id} className="text-gray-700">
                            {option.label}
                        </label>
                        <select
                            id={option.id}
                            className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                        >
                            <option value="">Select</option>
                        </select>
                    </div>
                ))}
            </div>

            {/* Second Row - Quantity, Quoted Price, Work Order */}
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="quantity" className="text-gray-700">
                        Quantity
                    </label>
                    <input
                        id="quantity"
                        type="number"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                        defaultValue="0"
                    />
                </div>

                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="unitPrice" className="text-gray-700">
                        Quoted unit price
                    </label>
                    <input
                        id="unitPrice"
                        type="text"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>

                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="workOrder" className="text-gray-700">
                        Work Order Number
                    </label>
                    <input
                        id="workOrder"
                        type="text"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
            </div>

            {/* Add Button */}
            <div className="p-4">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">
                    <span className="text-lg">+</span> Add
                </button>
            </div>
        </div>
    );
}

export default Filters;
