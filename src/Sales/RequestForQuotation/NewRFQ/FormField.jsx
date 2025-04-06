import * as React from "react";

export function FormField({ label, id, value, onChange }) {
    return (
        <div className="flex flex-col flex-1 min-h-[65px]">
            <label htmlFor={id} className="leading-none">{label}</label>
            <input
                id={id}
                type="text"
                value={value}
                onChange={onChange}
                className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-neutral-200 min-h-[39px]"
                aria-label={label}
            />
        </div>
    );
}
