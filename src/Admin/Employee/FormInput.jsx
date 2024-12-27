import React from 'react';

function FormInput({ label, className = '' }) {
    return (
        <div className={`flex flex-col min-h-[65px] ${className}`}>
            <label htmlFor={label.toLowerCase().replace(/\s+/g, '-')} className="mb-1.5">{label}</label>
            <input
                type="text"
                id={label.toLowerCase().replace(/\s+/g, '-')}
                className="flex flex-1 gap-1 py-1.5 px-2 w-[285px] bg-white rounded border border-solid border-stone-300 h-[39px]"
            />
        </div>
    );
}

export default FormInput;