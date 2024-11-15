import React from 'react';

const tableHeaders = [
    'Sl No.', 'Quotation No', 'Customer', 'Place', 'Brief Description',
    'Value', 'Contact Person', 'Quotation Date', 'Status', 'Reason'
];

const quotationData = [
    {
        slNo: '#20462',
        quotationNo: 'Hat',
        customer: 'Matt Dickerson',
        place: '13/05/2022',
        briefDescription: '$4.95',
        value: 'Tranfer Bank',
        contactPerson: 'Tranfer Bank',
        quotationDate: '13/05/2022',
        status: 'Delivered',
        reason: 'Tranfer Bank'
    },
    // Repeat this object 7 more times for a total of 8 rows
];

function QuotationsTable() {
    return (
        <div className="flex flex-col mt-9 mr-0 w-full text-sm font-medium text-sky-950 max-md:max-w-full">
            <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full font-bold bg-blue-100 max-md:max-w-full">
                {tableHeaders.map((header, index) => (
                    <div key={index} className="flex-1 grow shrink gap-1 self-stretch my-auto text-center">
                        {header}
                    </div>
                ))}
            </div>
            {quotationData.map((row, index) => (
                <div key={index} className="flex flex-wrap gap-4 justify-center items-center p-4 w-full bg-white border-b-2 border-blue-100 max-md:max-w-full">
                    <div className="flex-1 grow shrink gap-1 self-stretch my-auto text-center whitespace-nowrap w-[52px]">
                        {row.slNo}
                    </div>
                    <div className="flex-1 grow shrink gap-2 self-stretch my-auto whitespace-nowrap w-[67px]">
                        {row.quotationNo}
                    </div>
                    <div className="grow shrink gap-2 self-stretch my-auto w-[147px]">
                        {row.customer}
                    </div>
                    <div className="flex-1 grow shrink gap-2 self-stretch my-auto whitespace-nowrap w-[67px]">
                        {row.place}
                    </div>
                    <div className="flex-1 grow shrink gap-2 self-stretch my-auto w-[167px]">
                        {row.briefDescription}
                    </div>
                    <div className="flex-1 grow shrink gap-2 self-stretch my-auto w-[67px]">
                        {row.value}
                    </div>
                    <div className="flex-1 grow shrink gap-2 self-stretch my-auto w-[107px]">
                        {row.contactPerson}
                    </div>
                    <div className="flex-1 grow shrink gap-2 self-stretch my-auto whitespace-nowrap w-[77px]">
                        {row.quotationDate}
                    </div>
                    <div className="flex grow shrink gap-2 items-center self-stretch my-auto text-xs text-green-600 whitespace-nowrap w-[77px]">
                        <div className="gap-2.5 self-stretch px-3 py-2 my-auto bg-emerald-50 rounded-3xl">
                            {row.status}
                        </div>
                    </div>
                    <div className="flex-1 grow shrink gap-2 self-stretch my-auto w-[147px]">
                        {row.reason}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default QuotationsTable;