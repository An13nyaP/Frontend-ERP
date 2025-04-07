import React, { useState } from "react";

function Filters() {
    const [addQuantity, setAddQuantity] = useState(0);

    return (
        <div className="p-4 w-full text-sm max-w-[1020px] max-md:max-w-full">
            {/* First Row - Dropdowns */}
            <div className="grid grid-cols-3 gap-4">
                {["Material Type", "Good Type", "Item Name"].map((label, index) => (
                    <div key={index} className="flex flex-col">
                        <label className="leading-none text-sky-950">{label}</label>
                        <select className="px-3 py-1.5 mt-1.5 bg-white rounded border border-solid border-stone-300 text-zinc-700">
                            <option value="">Select</option>
                        </select>
                    </div>
                ))}
            </div>

            {/* Second Row - Available Quantity, Add Quantity, Add Button */}
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

                {/* Add Button */}
                <div className="flex items-end">
                    <button className="bg-blue-600 text-white px-4 py-2 mt-1.5 rounded">
                        + Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Filters;
