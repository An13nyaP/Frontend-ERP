import React from "react";

function Filters() {
    const filterOptions = [
        { label: "Material Type", id: "materialType" },
        { label: "Good Type", id: "goodType" },
        { label: "Item Selector", id: "itemSelector" },
    ];

    return (
        <div className="flex flex-wrap p-4 gap-10 w-full text-sm max-w-[1020px] max-md:max-w-full">
            {filterOptions.map((option) => (
                <div key={option.id} className="flex flex-col flex-1 min-h-[66px]">
                    <label htmlFor={option.id} className="leading-none text-sky-950">
                        {option.label}
                    </label>
                    <div className="flex overflow-hidden flex-1 gap-1 items-center px-3 py-1.5 mt-1.5 bg-white rounded border border-solid border-stone-300 size-full text-zinc-700">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4052e87f8851c21e1f3675740899b6cef8765a8e63f8743a8e9aec70e3796c80?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[2]"
                        />
                        <select
                            id={option.id}
                            className="self-stretch my-auto w-[100px] bg-transparent border-none appearance-none"
                        >
                            <option value="">Select</option>
                        </select>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Filters;