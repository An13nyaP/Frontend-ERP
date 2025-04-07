import React, { useState } from "react";

function Filters() {
    const [addQuantity, setAddQuantity] = useState(0);

    return (
        <div className="p-4 w-full text-sm max-w-[1020px] max-md:max-w-full">
            {/* First Row - Dropdowns & Item Name Input */}
            <div className="grid grid-cols-3 gap-4">
                {["Material Type", "Good Type"].map((label, index) => (
                    <div key={index} className="flex flex-col">
                        <label className="leading-none text-sky-950">{label}</label>
                        <select className="px-3 py-1.5 mt-1.5 bg-white rounded border border-solid border-stone-300 text-zinc-700">
                            <option value="">Select</option>
                        </select>
                    </div>
                ))}

                {/* Item Name Input */}
                <div className="flex flex-col">
                    <label className="leading-none text-sky-950">Item Name</label>
                    <input
                        type="text"
                        className="px-3 py-1.5 mt-1.5 bg-white rounded border border-solid border-stone-300 text-zinc-700"
                        placeholder=""
                    />
                </div>
            </div>

            {/* Second Row - Available Quantity, Add Quantity, Work Order Number */}
            <div className="grid grid-cols-3 gap-4 mt-4">
                {/* Available Quantity */}
                <div className="flex flex-col">
                    <label className="leading-none text-sky-950">Available Quantity</label>
                    <input
                        type="text"
                        value="100"
                        readOnly
                        className="px-3 py-1.5 mt-1.5 bg-white rounded border border-solid border-stone-300 text-zinc-700"
                    />
                </div>

                {/* Add Quantity */}
                <div className="flex flex-col">
                    <label className="leading-none text-sky-950">Add Quantity</label>
                    <input
                        type="number"
                        value={addQuantity}
                        onChange={(e) => setAddQuantity(Number(e.target.value))}
                        className="px-3 py-1.5 mt-1.5 bg-white rounded border border-solid border-stone-300 text-zinc-700"
                    />
                </div>

                {/* Work Order Number */}
                <div className="flex flex-col">
                    <label className="leading-none text-sky-950">Work Order Number</label>
                    <input
                        type="text"
                        className="px-3 py-1.5 mt-1.5 bg-white rounded border border-solid border-stone-300 text-zinc-700"
                        placeholder=""
                    />
                </div>
            </div>

            {/* Third Row - Deduct Button Under Work Order */}
            <div className="grid grid-cols-3 gap-4 mt-4">
                {/* Empty Space to Align Deduct Button */}
                <div></div>
                <div></div>

                {/* Deduct Button (Smaller Width) */}
                <div className="flex justify-end">
                    <button className="bg-blue-600 text-white font-bold px-5 py-2 mt-1.5 rounded">
                        + Deduct
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Filters;
