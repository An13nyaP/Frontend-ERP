import React from 'react';

function Pagination() {
    return (
        <nav className="flex gap-4 items-start self-center mt-24 max-md:mt-10" aria-label="Pagination">
            <button className="flex justify-center items-center w-10 h-10 bg-white rounded border border-solid border-zinc-700 min-h-[40px]" aria-label="Previous page">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ccfc384a9d51e1e67cb64de203a08d1ecbfcab6a408c8cf19cb78b4bfb524ca?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" className="object-contain self-stretch my-auto w-6 aspect-square" alt="" />
            </button>
            <button className="self-stretch w-10 h-10 text-base font-semibold text-center text-white whitespace-nowrap bg-blue-700 rounded border border-blue-700 border-solid min-h-[40px]" aria-current="page">
                1
            </button>
            <button className="self-stretch w-10 h-10 text-base font-semibold text-center whitespace-nowrap bg-white rounded border border-solid border-zinc-700 min-h-[40px] text-zinc-700">
                2
            </button>
            <button className="self-stretch w-10 h-10 text-base font-semibold text-center whitespace-nowrap bg-white rounded border border-solid border-zinc-700 min-h-[40px] text-zinc-700">
                3
            </button>
            <span className="self-stretch w-10 text-base font-semibold text-center whitespace-nowrap rounded min-h-[40px] text-zinc-700">
                ...
            </span>
            <button className="self-stretch w-10 h-10 text-base font-semibold text-center whitespace-nowrap bg-white rounded border border-solid border-zinc-700 min-h-[40px] text-zinc-700">
                99
            </button>
            <button className="flex justify-center items-center w-10 h-10 bg-white rounded border border-blue-700 border-solid min-h-[40px]" aria-label="Next page">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/79fd2a767593abc708580ac9a80eb2eb5bdbe5f9b71b7f6965cd030c7d3c0c29?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" className="object-contain self-stretch my-auto w-6 aspect-square" alt="" />
            </button>
        </nav>
    );
}

export default Pagination;