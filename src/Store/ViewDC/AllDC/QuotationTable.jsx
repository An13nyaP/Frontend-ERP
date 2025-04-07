import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import FilterSection from "../../components/FilterSection";

const tableData = [
  {
    siNo: "1",
    quotationNo: "QTN-1001",
    customerName: "John Doe",
    place: "New York",
    value: "$5000",
    contactPerson: "Jane Smith",
    date: "12/12/2023",
    view: "Print",
    approval: "Open Dc",
    reason: "Transfer Bank",
  },
  {
    siNo: "2",
    quotationNo: "QTN-1002",
    customerName: "Alice Brown",
    place: "Los Angeles",
    value: "$3000",
    contactPerson: "Bob Johnson",
    date: "10/10/2023",
    view: "Open",
    approval: "Rejected",
    reason: "Transfer Bank",
  },
  {
    siNo: "3",
    quotationNo: "QTN-1003",
    customerName: "Charlie Green",
    place: "Chicago",
    value: "$4000",
    contactPerson: "Emma White",
    date: "15/11/2023",
    view: "Print",
    approval: "Closed Dc",
    reason: "Transfer Bank",
  },
  {
    siNo: "4",
    quotationNo: "QTN-1004",
    customerName: "Diana Prince",
    place: "San Francisco",
    value: "$6000",
    contactPerson: "Bruce Wayne",
    date: "20/12/2023",
    view: "Print",
    approval: "Open Dc",
    reason: "Transfer Bank",
  },
  {
    siNo: "5",
    quotationNo: "QTN-1005",
    customerName: "Ethan Hunt",
    place: "Boston",
    value: "$2500",
    contactPerson: "Tom Cruise",
    date: "05/10/2023",
    view: "Print",
    approval: "Closed Dc",
    reason: "Transfer Bank",
  },
  {
    siNo: "6",
    quotationNo: "QTN-1006",
    customerName: "Fiona Gallagher",
    place: "Detroit",
    value: "$3200",
    contactPerson: "Liam Gallagher",
    date: "18/09/2023",
    view: "Open",
    approval: "Rejected",
    reason: "Transfer Bank",
  },
];

function QuotationTable() {
  return (
    <div className="flex flex-col w-full max-md:max-w-full overflow-auto">
      <FilterSection />
      <TableHeader />
      {tableData.map((row, index) => (
        <TableRow key={index} {...row} />
      ))}
    </div>
  );
}

export default QuotationTable;
