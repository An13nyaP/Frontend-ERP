import React from 'react';
import PurchaseOrderRow from './PurchaseOrderRow';

const tableHeaders = [
    'Work Order Number', 'PO Number', 'Customer', 'Po Date', 'Amount',
    'Project Engineer', 'Delivery Date', 'Status', 'Customer Acceptance Status',
    'Remarks', 'Action'
];

const purchaseOrders = [
    {
        workOrderNumber: '#20462',
        poNumber: 'Hat',
        customer: 'Matt Dickerson',
        poDate: '13/05/2022',
        amount: '$4.95',
        projectEngineer: 'Tranfer Bank',
        deliveryDate: '13/05/2024',
        status: 'Delivered',
        customerAcceptanceStatus: 'Accepted',
        remarks: 'Tranfer Bank'
    },
    // Repeat this object 9 more times with different data to match the original 10 rows
];

function PurchaseOrderTable() {
    return (
        <div className="flex flex-col mt-8 w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full text-sm font-bold bg-blue-100 text-sky-950 max-md:max-w-full">
                {tableHeaders.map((header, index) => (
                    <div key={index} className="flex-1 shrink gap-1 self-stretch my-auto text-center">
                        {header}
                    </div>
                ))}
            </div>
            {purchaseOrders.map((order, index) => (
                <PurchaseOrderRow key={index} {...order} />
            ))}
        </div>
    );
}

export default PurchaseOrderTable;