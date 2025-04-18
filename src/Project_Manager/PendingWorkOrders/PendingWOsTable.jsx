/**
 * This code was generated by Builder.io
 */
import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import FilterSection from "../components/FilterSection";

const tableData = [
  {
    id: "#20462",
    item: "Hat",
    customer: "Matt Dickerson",
    poDate: "13/05/2022",
    amount: "$4.95",
    projectEngineer: "Transfer Bank",
    qualityEngineer: "Transfer Bank",
    deliveryDate: "13/05/2022",
    status: "Delivered",
    remarks: "Transfer Bank",
  },
  {
    id: "#20462",
    item: "Hat",
    customer: "Matt Dickerson",
    poDate: "13/05/2022",
    amount: "$4.95",
    projectEngineer: "Transfer Bank",
    qualityEngineer: "Transfer Bank",
    deliveryDate: "13/05/2022",
    status: "Delivered",
    remarks: "Transfer Bank",
  },
  {
    id: "#20462",
    item: "Hat",
    customer: "Matt Dickerson",
    poDate: "13/05/2022",
    amount: "$4.95",
    projectEngineer: "Transfer Bank",
    qualityEngineer: "Transfer Bank",
    deliveryDate: "13/05/2022",
    status: "Delivered",
    remarks: "Transfer Bank",
  },
  {
    id: "#20462",
    item: "Hat",
    customer: "Matt Dickerson",
    poDate: "13/05/2022",
    amount: "$4.95",
    projectEngineer: "Transfer Bank",
    qualityEngineer: "Transfer Bank",
    deliveryDate: "13/05/2022",
    status: "Delivered",
    remarks: "Transfer Bank",
  },
  {
    id: "#20462",
    item: "Hat",
    customer: "Matt Dickerson",
    poDate: "13/05/2022",
    amount: "$4.95",
    projectEngineer: "Transfer Bank",
    qualityEngineer: "Transfer Bank",
    deliveryDate: "13/05/2022",
    status: "Delivered",
    remarks: "Transfer Bank",
  },
  {
    id: "#20462",
    item: "Hat",
    customer: "Matt Dickerson",
    poDate: "13/05/2022",
    amount: "$4.95",
    projectEngineer: "Transfer Bank",
    qualityEngineer: "Transfer Bank",
    deliveryDate: "13/05/2022",
    status: "Delivered",
    remarks: "Transfer Bank",
  },
  {
    id: "#20462",
    item: "Hat",
    customer: "Matt Dickerson",
    poDate: "13/05/2022",
    amount: "$4.95",
    projectEngineer: "Transfer Bank",
    qualityEngineer: "Transfer Bank",
    deliveryDate: "13/05/2022",
    status: "Delivered",
    remarks: "Transfer Bank",
  },
  {
    id: "#20462",
    item: "Hat",
    customer: "Matt Dickerson",
    poDate: "13/05/2022",
    amount: "$4.95",
    projectEngineer: "Transfer Bank",
    qualityEngineer: "Transfer Bank",
    deliveryDate: "13/05/2022",
    status: "Delivered",
    remarks: "Transfer Bank",
  },
  {
    id: "#20462",
    item: "Hat",
    customer: "Matt Dickerson",
    poDate: "13/05/2022",
    amount: "$4.95",
    projectEngineer: "Transfer Bank",
    qualityEngineer: "Transfer Bank",
    deliveryDate: "13/05/2022",
    status: "Delivered",
    remarks: "Transfer Bank",
  },
  {
    id: "#20462",
    item: "Hat",
    customer: "Matt Dickerson",
    poDate: "13/05/2022",
    amount: "$4.95",
    projectEngineer: "Transfer Bank",
    qualityEngineer: "Transfer Bank",
    deliveryDate: "13/05/2022",
    status: "Delivered",
    remarks: "Transfer Bank",
  },
];

function PendingWOsTable() {
  return (
    <div className="flex flex-col w-full max-md:max-w-full overflow-auto ">
      <FilterSection /> {/* Applying 24px top and bottom margin */}
      <TableHeader />
      {tableData.map((row, index) => (
        <TableRow key={index} {...row} />
      ))}
    </div>
  );
}

export default PendingWOsTable;
