import React from 'react';

const tableHeaders = [
    'Sl No.', 'Part', 'Item Description', 'Qty Nos', 'Unit Rate in INR', 'Total Amount in INR', 'Delete'
];

const tableData = [
    { id: 1, part: 'Hat', description: 'Matt Dickerson', quantity: '13/05/2022', unitRate: '$4.95', totalAmount: 'Tranfer Bank' },
    { id: 2, part: 'Hat', description: 'Matt Dickerson', quantity: '13/05/2022', unitRate: '$4.95', totalAmount: 'Tranfer Bank' },
    { id: 3, part: 'Hat', description: 'Matt Dickerson', quantity: '13/05/2022', unitRate: '$4.95', totalAmount: 'Tranfer Bank' },
    { id: 4, part: 'Hat', description: 'Matt Dickerson', quantity: '13/05/2022', unitRate: '$4.95', totalAmount: 'Tranfer Bank' },
];

function ItemTable() {
    return (
        <section className="mt-8 ml-4 w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between mb-8 w-full max-w-[1105px] max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                    <label htmlFor="itemDescription" className="text-base font-light text-sky-950 max-md:max-w-full">
                        Item Description
                    </label>
                    <textarea
                        id="itemDescription"
                        className="flex overflow-hidden flex-col items-end px-20 pt-14 mt-1 w-full bg-white rounded border border-solid border-stone-300 max-md:pl-5 max-md:max-w-full"
                    />
                </div>
                <button aria-label="Add item" className="my-auto">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/25d020389ec4a19f9803ac5b99062eef305b45444be8e11697a06e65bbff6f1a?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" className="object-contain shrink-0 rounded-none aspect-square w-[35px]" alt="" />
                </button>
            </div>
            <div className="flex flex-wrap gap-8 mb-8 text-sm font-light leading-none text-sky-950">
                <div className="flex flex-col whitespace-nowrap min-h-[65px]">
                    <label htmlFor="partNumber">Part#</label>
                    <input id="partNumber" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                </div>
                <div className="flex flex-col min-h-[65px]">
                    <label htmlFor="quantity">Qty Nos</label>
                    <input id="quantity" type="number" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                </div>
                <div className="flex flex-col min-h-[65px]">
                    <label htmlFor="unitRate">Unit Rate In INR</label>
                    <input id="unitRate" type="number" className="flex flex-1 gap-1 py-1.5 mt-1.5 w-full bg-white rounded border border-solid border-stone-300 min-h-[39px]" />
                </div>
            </div>
            <table className="w-full text-sm font-bold bg-blue-100 text-sky-950">
                <thead>
                    <tr>
                        {tableHeaders.map((header, index) => (
                            <th key={index} className="p-4 text-left">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id} className="bg-white border-b-2 border-blue-100">
                            <td className="p-4 text-center">{row.id}</td>
                            <td className="p-4">{row.part}</td>
                            <td className="p-4">{row.description}</td>
                            <td className="p-4">{row.quantity}</td>
                            <td className="p-4">{row.unitRate}</td>
                            <td className="p-4">{row.totalAmount}</td>
                            <td className="p-4">
                                <button aria-label={`Delete item ${row.id}`}>
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0e9dfe66fb2151f7ad3ffd364079d37ccca3ad0be1d34298006d7e3d8a96ded?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" className="object-contain w-6 aspect-square" alt="" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default ItemTable;