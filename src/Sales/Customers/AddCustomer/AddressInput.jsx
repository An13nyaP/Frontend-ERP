import * as React from "react";

export function AddressInput({ label, id, value, onChange, className = "" }) {
    return (
        <div className={`flex flex-col w-full text-sm font-light leading-none pt-9 min-h-[65px] text-sky-950 ${className}`}>
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                value={value}
                onChange={onChange}
                className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]"
                aria-label={label}
            />
        </div>
    );
}
