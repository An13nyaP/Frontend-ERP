import React from 'react';

function Pagination() {
    return (
        <nav className="flex gap-4 items-start self-center mt-24 max-w-full w-[392px] max-md:mt-10" aria-label="Pagination">
            <button className="flex justify-center items-center w-10 h-10 bg-white rounded border border-solid border-zinc-700 min-h-[40px]" aria-label="Previous page">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bd53ba5761257b52f4401be8787ac03392a4fd60473e50995b665264f641943?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
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
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4994c2bad7dd5dd85d6b5690c1f0dbcd9ddee9a455e372f0a32267f0057e2d26?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
            </button>
        </nav>
    );
}

export default Pagination;