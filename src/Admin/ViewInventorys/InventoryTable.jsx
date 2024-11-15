import React from "react";
import InventoryTableHeader from "./InventoryTableHeader";
import InventoryTableRow from "./InventoryTableRow";

function InventoryTable() {
    const inventoryItems = [
        {
            id: 1,
            part: "Hat",
            description: "Matt Dickerson",
            hsnNumber: "13/05/2022",
            unitOfMeasure: "13/05/2022",
            qtyNos: "13/05/2022",
            unitRate: "$4.95",
            totalAmount: "Tranfer Bank",
        },
        // Repeat the above object 9 more times to create 10 items
        {
            id: 2,
            part: "Hat",
            description: "Matt Dickerson",
            hsnNumber: "13/05/2022",
            unitOfMeasure: "13/05/2022",
            qtyNos: "13/05/2022",
            unitRate: "$4.95",
            totalAmount: "Tranfer Bank",
        },
        {
            id: 3,
            part: "Hat",
            description: "Matt Dickerson",
            hsnNumber: "13/05/2022",
            unitOfMeasure: "13/05/2022",
            qtyNos: "13/05/2022",
            unitRate: "$4.95",
            totalAmount: "Tranfer Bank",
        },
        {
            id: 4,
            part: "Hat",
            description: "Matt Dickerson",
            hsnNumber: "13/05/2022",
            unitOfMeasure: "13/05/2022",
            qtyNos: "13/05/2022",
            unitRate: "$4.95",
            totalAmount: "Tranfer Bank",
        },
        {
            id: 5,
            part: "Hat",
            description: "Matt Dickerson",
            hsnNumber: "13/05/2022",
            unitOfMeasure: "13/05/2022",
            qtyNos: "13/05/2022",
            unitRate: "$4.95",
            totalAmount: "Tranfer Bank",
        },
        {
            id: 6,
            part: "Hat",
            description: "Matt Dickerson",
            hsnNumber: "13/05/2022",
            unitOfMeasure: "13/05/2022",
            qtyNos: "13/05/2022",
            unitRate: "$4.95",
            totalAmount: "Tranfer Bank",
        },
        {
            id: 7,
            part: "Hat",
            description: "Matt Dickerson",
            hsnNumber: "13/05/2022",
            unitOfMeasure: "13/05/2022",
            qtyNos: "13/05/2022",
            unitRate: "$4.95",
            totalAmount: "Tranfer Bank",
        },
        {
            id: 8,
            part: "Hat",
            description: "Matt Dickerson",
            hsnNumber: "13/05/2022",
            unitOfMeasure: "13/05/2022",
            qtyNos: "13/05/2022",
            unitRate: "$4.95",
            totalAmount: "Tranfer Bank",
        },
        {
            id: 9,
            part: "Hat",
            description: "Matt Dickerson",
            hsnNumber: "13/05/2022",
            unitOfMeasure: "13/05/2022",
            qtyNos: "13/05/2022",
            unitRate: "$4.95",
            totalAmount: "Tranfer Bank",
        },
        {
            id: 10,
            part: "Hat",
            description: "Matt Dickerson",
            hsnNumber: "13/05/2022",
            unitOfMeasure: "13/05/2022",
            qtyNos: "13/05/2022",
            unitRate: "$4.95",
            totalAmount: "Tranfer Bank",
        },
    ];

    return (
        <div className="flex flex-col self-stretch mt-12 w-full min-h-[647px] max-md:mt-10 max-md:max-w-full">
            <InventoryTableHeader />
            {inventoryItems.map((item, index) => (
                <InventoryTableRow key={item.id} item={item} index={index} />
            ))}
        </div>
    );
}

export default InventoryTable;