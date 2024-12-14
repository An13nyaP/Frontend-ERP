import * as React from "react";

export function AddressInput({ label, id }) {
    return (
        <div className="flex flex-col mt-9">
            <label htmlFor={id} className="text-base font-light text-sky-950">
                {label}
            </label>
            <div className="flex overflow-hidden flex-col items-end px-14 pt-14 mt-1 w-full bg-white rounded border border-solid border-stone-300 max-md:pl-5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3348d90c6f933ef8d078eacd17a60a2ba81b38860d1fb3cb1111ae21487a71a4?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539"
                    alt=""
                    className="object-contain w-3.5 aspect-[0.93]"
                />
            </div>
        </div>
    );
}