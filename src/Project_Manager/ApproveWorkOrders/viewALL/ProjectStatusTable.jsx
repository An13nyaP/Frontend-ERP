/**
 * This code was generated by Builder.io
 */
import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import FilterSection from "../../components/FilterSection";

const tableData = [
  {
    id: "#20462",
    item: "Hat",
    customer: "Matt Dickerson",
    poDate: "13/05/2022",
    qualityEngineer: "John Smith",
    projectEngineer: "Transfer Bank",
    deliveryDate: "13/05/2022",
    status: "Delivered",
    remarks: "Transfer Bank",
  },
  {
    id: "#20463",
    item: "Shirt",
    customer: "Sara Johnson",
    poDate: "14/05/2022",
    qualityEngineer: "Jane Doe",
    projectEngineer: "Wire Transfer",
    deliveryDate: "14/05/2022",
    status: "In Progress",
    remarks: "Wire Transfer",
  },
  {
    id: "#20464",
    item: "Shoes",
    customer: "Michael Brown",
    poDate: "15/05/2022",
    qualityEngineer: "Tom Wilson",
    projectEngineer: "Bank Transfer",
    deliveryDate: "15/05/2022",
    status: "Pending",
    remarks: "Bank Transfer",
  },
  {
    id: "#20465",
    item: "Gloves",
    customer: "Anna Taylor",
    poDate: "16/05/2022",
    qualityEngineer: "Emily Davis",
    projectEngineer: "Online Payment",
    deliveryDate: "16/05/2022",
    status: "Delivered",
    remarks: "Online Payment",
  },
  {
    id: "#20466",
    item: "Socks",
    customer: "Chris Evans",
    poDate: "17/05/2022",
    qualityEngineer: "Ryan Thomas",
    projectEngineer: "Direct Deposit",
    deliveryDate: "17/05/2022",
    status: "Delivered",
    remarks: "Direct Deposit",
  },
  {
    id: "#20467",
    item: "Belt",
    customer: "Sophia Lee",
    poDate: "18/05/2022",
    qualityEngineer: "Ava Martinez",
    projectEngineer: "PayPal",
    deliveryDate: "18/05/2022",
    status: "In Progress",
    remarks: "PayPal",
  },
  {
    id: "#20468",
    item: "Jacket",
    customer: "Liam Wilson",
    poDate: "19/05/2022",
    qualityEngineer: "Mason Clark",
    projectEngineer: "Credit Card",
    deliveryDate: "19/05/2022",
    status: "Pending",
    remarks: "Credit Card",
  },
  {
    id: "#20469",
    item: "Scarf",
    customer: "Olivia Garcia",
    poDate: "20/05/2022",
    qualityEngineer: "Sophia Hill",
    projectEngineer: "Bank Transfer",
    deliveryDate: "20/05/2022",
    status: "Delivered",
    remarks: "Bank Transfer",
  },
  {
    id: "#20470",
    item: "Watch",
    customer: "Ethan Miller",
    poDate: "21/05/2022",
    qualityEngineer: "James Scott",
    projectEngineer: "Online Payment",
    deliveryDate: "21/05/2022",
    status: "In Progress",
    remarks: "Online Payment",
  },
  {
    id: "#20471",
    item: "Bag",
    customer: "Isabella Moore",
    poDate: "22/05/2022",
    qualityEngineer: "Charlotte Baker",
    projectEngineer: "PayPal",
    deliveryDate: "22/05/2022",
    status: "Pending",
    remarks: "PayPal",
  },
];



function ProjectStatusTable() {
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

export default ProjectStatusTable;
