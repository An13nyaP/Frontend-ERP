import * as React from "react";

export const NavigationItem = ({ text, isActive }) => {
    return (
        <div
            role="tab"
            tabIndex={0}
            className={`gap-2.5 self-stretch px-7 py-6 bg-white max-md:px-5 ${isActive ? "text-blue-700 border-blue-700 border-b-[3px]" : ""
                }`}
            style={{ width: isActive ? "203px" : "auto" }}
        >
            {text}
        </div>
    );
};