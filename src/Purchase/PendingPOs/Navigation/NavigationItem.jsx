import * as React from "react";

const NavigationItem = ({ text, isActive, className }) => {
    const baseStyles = "gap-2.5 self-stretch px-7 py-6 bg-white max-md:px-5";
    const activeStyles = isActive ? "text-blue-700 border-blue-700 border-b-[3px] w-[203px]" : "text-zinc-700";

    return (
        <div
            className={`${baseStyles} ${activeStyles} ${className}`}
            role="tab"
            tabIndex={0}
            aria-selected={isActive}
        >
            {text}
        </div>
    );
};

export default NavigationItem;