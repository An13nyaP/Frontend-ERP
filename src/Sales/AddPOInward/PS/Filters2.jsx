import React from "react";

function Filters2() {
    return (
        <div className="w-full text-sm">
            {/* Work Info */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Work Info
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                {['Project Engineer', 'Quality Engineer', 'Store', 'Account'].map((role) => (
                    <div key={role} className="flex flex-col flex-1 min-w-[200px]">
                        <label className="text-gray-700">{role}</label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                        />
                    </div>
                ))}
            </div>

            {/* Approval Status And Note */}
            <div className="bg-blue-100 px-4 py-2 text-gray-800 font-semibold">
                Approval Status And Note
            </div>
            <div className="flex flex-wrap gap-10 p-4">
                <div className="flex flex-col flex-1 min-w-[300px]">
                    <label className="text-gray-700">Special Instruction*</label>
                    <textarea
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full h-20"
                    ></textarea>
                </div>
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-gray-700">Name</label>
                    <input
                        type="text"
                        className="px-3 py-1.5 mt-1.5 border border-gray-300 rounded outline-none w-full"
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 p-4">
                <button className="bg-blue-600 text-white px-14 py-2 rounded-md shadow hover:bg-blue-700">
                    Submit
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50">
                    Order Completed
                </button>
            </div>
        </div>
    );
}

export default Filters2;