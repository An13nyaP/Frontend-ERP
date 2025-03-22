import React from "react";

function SearchBar() {
    return (
        <div className="overflow-hidden gap-1 self-stretch px-3 py-3.5 mt-2 ml-[120px] w-full text-base bg-white rounded border border-solid border-stone-300 max-w-[1020px] min-h-[46px] text-zinc-700 max-md:mt-10 max-md:max-w-full">
            <input
                type="text"
                placeholder="Search Items"
                className="w-full bg-transparent border-none outline-none"
                aria-label="Search Items"
            />
        </div>
    );
}

export default SearchBar;