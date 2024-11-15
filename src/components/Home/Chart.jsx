import React from 'react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function Chart() {
    return (
        <figure className="flex flex-col self-stretch pt-20 pb-32 mt-6 bg-white max-md:pr-5 max-md:pb-24 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fe2c4a92e6080a811048a76e720094dca9568eff3166ee6bd63960bbffffd40?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" alt="Sales chart" className="object-contain mb-0 w-full rounded-md aspect-[2.91] max-md:mb-2.5 max-md:max-w-full" />
            <figcaption className="flex flex-wrap gap-10 ml-7 max-w-full text-2xl text-center whitespace-nowrap text-sky-950 w-[940px]">
                {months.map((month, index) => (
                    <div key={index} className={index === 0 ? 'grow' : ''}>{month}</div>
                ))}
            </figcaption>
        </figure>
    );
}

export default Chart;