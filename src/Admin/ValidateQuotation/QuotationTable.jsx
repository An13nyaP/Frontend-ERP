import React from 'react';

function QuotationTable() {
    const tableData = [
        {
            slNo: '#20462',
            quotationNo: 'Hat',
            customer: 'Matt Dickerson',
            place: '13/05/2022',
            value: 'Tranfer Bank',
            contactPerson: 'Tranfer Bank',
            quotationDate: '13/05/2022',
            reason: 'Tranfer Bank'
        },
        {
            slNo: '#20462',
            quotationNo: 'Hat',
            customer: 'Matt Dickerson',
            place: '13/05/2022',
            value: 'Tranfer Bank',
            contactPerson: 'Tranfer Bank',
            quotationDate: '13/05/2022',
            reason: 'Tranfer Bank'
        }, {
            slNo: '#20462',
            quotationNo: 'Hat',
            customer: 'Matt Dickerson',
            place: '13/05/2022',
            value: 'Tranfer Bank',
            contactPerson: 'Tranfer Bank',
            quotationDate: '13/05/2022',
            reason: 'Tranfer Bank'
        }, {
            slNo: '#20462',
            quotationNo: 'Hat',
            customer: 'Matt Dickerson',
            place: '13/05/2022',
            value: 'Tranfer Bank',
            contactPerson: 'Tranfer Bank',
            quotationDate: '13/05/2022',
            reason: 'Tranfer Bank'
        }, {
            slNo: '#20462',
            quotationNo: 'Hat',
            customer: 'Matt Dickerson',
            place: '13/05/2022',
            value: 'Tranfer Bank',
            contactPerson: 'Tranfer Bank',
            quotationDate: '13/05/2022',
            reason: 'Tranfer Bank'
        }, {
            slNo: '#20462',
            quotationNo: 'Hat',
            customer: 'Matt Dickerson',
            place: '13/05/2022',
            value: 'Tranfer Bank',
            contactPerson: 'Tranfer Bank',
            quotationDate: '13/05/2022',
            reason: 'Tranfer Bank'
        }, {
            slNo: '#20462',
            quotationNo: 'Hat',
            customer: 'Matt Dickerson',
            place: '13/05/2022',
            value: 'Tranfer Bank',
            contactPerson: 'Tranfer Bank',
            quotationDate: '13/05/2022',
            reason: 'Tranfer Bank'
        }, {
            slNo: '#20462',
            quotationNo: 'Hat',
            customer: 'Matt Dickerson',
            place: '13/05/2022',
            value: 'Tranfer Bank',
            contactPerson: 'Tranfer Bank',
            quotationDate: '13/05/2022',
            reason: 'Tranfer Bank'
        }
        // Repeat this object 7 more times to create 8 rows of data
    ];

    return (
        <div className="flex flex-col mt-4 ml-8 text-sm font-medium max-md:max-w-full">
            <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full font-bold bg-blue-100 text-sky-950 max-md:max-w-full">
                <div className="flex-1 grow shrink gap-1 self-stretch my-auto text-center w-[52px]">Sl No.</div>
                <div className="flex-1 grow shrink gap-1 self-stretch my-auto w-[67px]">Quotation No</div>
                <div className="flex-1 grow shrink gap-2 self-stretch my-auto whitespace-nowrap w-[147px]">Customer</div>
                <div className="flex-1 grow shrink gap-2 self-stretch my-auto whitespace-nowrap w-[67px]">Place</div>
                <div className="flex-1 grow shrink gap-2 self-stretch my-auto whitespace-nowrap w-[67px]">Value</div>
                <div className="flex-1 grow shrink gap-2 self-stretch my-auto w-[107px]">Contact Person</div>
                <div className="flex-1 grow shrink gap-2 self-stretch my-auto w-[77px]">Quotation Date</div>
                <div className="flex-1 grow shrink gap-2 self-stretch my-auto whitespace-nowrap w-[77px]">View</div>
                <div className="flex-1 grow shrink gap-2 self-stretch my-auto whitespace-nowrap w-[136px]">Approval</div>
                <div className="grow shrink gap-2 self-stretch my-auto whitespace-nowrap w-[85px]">Reason</div>
            </div>
            {tableData.map((row, index) => (
                <div key={index} className="flex flex-wrap gap-4 justify-center items-center p-4 w-full bg-white border-b-2 border-blue-100 max-md:max-w-full">
                    <div className="flex-1 grow shrink gap-1 self-stretch my-auto text-center whitespace-nowrap text-sky-950 w-[52px]">{row.slNo}</div>
                    <div className="flex-1 grow shrink gap-2 self-stretch my-auto whitespace-nowrap text-sky-950 w-[67px]">{row.quotationNo}</div>
                    <div className="grow shrink gap-2 self-stretch my-auto text-sky-950 w-[147px]">{row.customer}</div>
                    <div className="flex-1 grow shrink gap-2 self-stretch my-auto whitespace-nowrap text-sky-950 w-[67px]">{row.place}</div>
                    <div className="flex-1 grow shrink gap-2 self-stretch my-auto text-sky-950 w-[67px]">{row.value}</div>
                    <div className="flex-1 grow shrink gap-2 self-stretch my-auto text-sky-950 w-[107px]">{row.contactPerson}</div>
                    <div className="flex-1 grow shrink gap-2 self-stretch my-auto whitespace-nowrap text-sky-950 w-[77px]">{row.quotationDate}</div>
                    <div className="flex grow shrink gap-2 justify-center items-center self-stretch my-auto text-xs whitespace-nowrap text-slate-50 w-[77px]">
                        <button className="gap-2.5 self-stretch px-3 py-1 my-auto bg-blue-700 rounded-3xl">Open</button>
                    </div>
                    <div className="flex grow shrink gap-1 justify-center items-center self-stretch my-auto text-xs whitespace-nowrap w-[133px]">
                        <button className="gap-2.5 self-stretch px-3 py-1 my-auto bg-green-600 rounded-3xl text-slate-50">Approve</button>
                        <button className="gap-2.5 self-stretch px-3 py-1 my-auto text-red-500 rounded-3xl border border-red-500 border-solid">Reject</button>
                    </div>
                    <div className="flex-1 grow shrink gap-2 self-stretch my-auto text-sky-950 w-[84px]">{row.reason}</div>
                </div>
            ))}
        </div>
    );
}

export default QuotationTable;