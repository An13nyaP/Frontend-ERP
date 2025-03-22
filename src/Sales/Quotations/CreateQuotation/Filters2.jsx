import React from "react";

function Filters2() {
    return (
        <div className="w-full text-sm">
            {/* Note Section */}
            <div className="p-4">
                <label htmlFor="note" className="text-gray-700">
                    Note
                </label>
                <textarea
                    id="note"
                    className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full h-24"
                ></textarea>
            </div>

            {/* Additional Details Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Additional Details
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[250px]">
                    <label htmlFor="terms" className="text-gray-700">
                        Terms And Conditions
                    </label>
                    <textarea
                        id="terms"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full h-16"
                    ></textarea>
                </div>
                <div className="flex flex-col flex-1 min-w-[250px]">
                    <label htmlFor="paymentTerms" className="text-gray-700">
                        Payment Terms
                    </label>
                    <textarea
                        id="paymentTerms"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full h-16"
                    ></textarea>
                </div>
                <div className="flex flex-col flex-1 min-w-[250px]">
                    <label htmlFor="taxDuties" className="text-gray-700">
                        Tax And Duties
                    </label>
                    <textarea
                        id="taxDuties"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full h-16"
                    ></textarea>
                </div>
                <div className="flex flex-col flex-1 min-w-[250px]">
                    <label htmlFor="briefDescription" className="text-gray-700">
                        Brief Description
                    </label>
                    <textarea
                        id="briefDescription"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full h-16"
                    ></textarea>
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="deliveryDate" className="text-gray-700">
                        Delivery Date
                    </label>
                    <input
                        id="deliveryDate"
                        type="date"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="packing" className="text-gray-700">
                        Packing And Forwarding
                    </label>
                    <input
                        id="packing"
                        type="text"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
            </div>

            {/* Approval Status Section */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Approval Status
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="approverName" className="text-gray-700">
                        Name
                    </label>
                    <input
                        id="approverName"
                        type="text"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="approverPhone" className="text-gray-700">
                        Phone Number
                    </label>
                    <input
                        id="approverPhone"
                        type="text"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label htmlFor="signature" className="text-gray-700">
                        Signature
                    </label>
                    <div className="border border-gray-300 rounded w-full h-16 flex items-center justify-center text-gray-500">
                        [Signature Box]
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="p-4 flex justify-center">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700">
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Filters2;
