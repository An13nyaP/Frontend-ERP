import * as React from "react";
import { FormField } from "./FormField";

const formFields = [
    [
        { label: "Customer Name", id: "customerName" },
        { label: "Customer Number", id: "customerNumber" }
    ],
    [
        { label: "Location", id: "location" },
        { label: "Country", id: "country" },
        { label: "Request via", id: "requestVia" }
    ],
    [
        { label: "Request Reference Number", id: "referenceNumber" },
        { label: "Type Of Good", id: "goodType" },
        { label: "Last Date To Submit", id: "submitDate" }
    ],
    [
        { label: "Contact Person Name", id: "contactName" },
        { label: "Contact Person Email", id: "contactEmail" },
        { label: "Contact Person Phone Number", id: "contactPhone" }
    ]
];

export function CustomerForm() {
    return (
        <form className="flex flex-col text-sm max-w-[979px] text-neutral-900">
            <div className="flex flex-wrap gap-5 justify-between w-full max-w-[876px] max-md:max-w-full">
                {formFields[0].map((field) => (
                    <FormField key={field.id} {...field} />
                ))}
                <button
                    type="button"
                    className="flex gap-1.5 items-center self-end mt-5 text-base text-sky-950"
                    aria-label="Add New Customer"
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3624e78c8dd2ba88c42a4bada2454b24455bafa522e11a10ecc52df4f238ce10?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539"
                        className="object-contain shrink-0 self-stretch my-auto w-9 rounded-none aspect-square"
                        alt=""
                    />
                    <span className="self-stretch my-auto w-[141px]">Add New Customer</span>
                </button>
            </div>

            {formFields.slice(1).map((row, index) => (
                <div key={index} className="flex flex-wrap gap-10 mt-7 w-full leading-none max-md:max-w-full">
                    {row.map((field) => (
                        <FormField key={field.id} {...field} />
                    ))}
                </div>
            ))}
        </form>
    );
}