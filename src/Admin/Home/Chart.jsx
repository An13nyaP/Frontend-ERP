import React from 'react';

function Chart() {
    return (
        <figure className="flex flex-col items-start self-stretch pt-20 pb-28 mt-6 bg-white max-md:pr-5 max-md:pb-24 max-md:max-w-full">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e26a90e5e0dd8d44702985df2f732d8ba25c9dcddd551d58468dd9721d124c44?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539"
                alt="Sales chart"
                className="object-contain -mb-6 w-full rounded-md aspect-[2.82] max-md:mb-2.5 max-md:max-w-full"
            />
        </figure>
    );
}

export default Chart;