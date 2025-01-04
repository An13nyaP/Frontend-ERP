import * as React from "react";
import { FormField } from "./FormField";

export default function CustomerForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

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

    return (
        <form onSubmit={handleSubmit} className="flex flex-col rounded-none">
            <div className="flex flex-col px-20 pt-11 pb-32 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <div className="flex flex-col w-full max-w-[979px] max-md:max-w-full">
                    {/* First Row */}
                    <div className="flex gap-5 mb-9 max-md:flex-col">
                        {formFields[0].map((field) => (
                            <div
                                key={field.id}
                                className="flex flex-col w-[48%] max-md:w-full"
                            >
                                <FormField label={field.label} id={field.id} />
                            </div>
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

                    {/* Next Rows */}
                    {formFields.slice(1).map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="flex gap-5 mb-9 max-md:flex-col"
                        >
                            {row.map((field) => (
                                <div
                                    key={field.id}
                                    className="flex flex-col w-[32%] max-md:w-full"
                                >
                                    <FormField label={field.label} id={field.id} />
                                </div>
                            ))}
                        </div>
                    ))}

                    {/* Add to List Button */}
                    <button
                        type="submit"
                        className="flex flex-col justify-center items-center self-center px-5 py-3 mt-20 text-2xl leading-none text-white bg-blue-700 rounded-xl min-h-[44px] w-[220px] max-md:mt-10"
                    >
                        Add to list
                    </button>
                </div>
            </div>
        </form>
    );
}
