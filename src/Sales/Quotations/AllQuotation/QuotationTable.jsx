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
    view: "Open",
    approval: "Approved",
    reason: "N/A",
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
    approval: "Pending",
    reason: "Clarification needed",
  },
  {
    siNo: "3",
    quotationNo: "QTN-1003",
    customerName: "Charlie Green",
    place: "Chicago",
    value: "$4000",
    contactPerson: "Emma White",
    date: "15/11/2023",
    view: "Open",
    approval: "Rejected",
    reason: "Budget constraints",
  },
  {
    siNo: "4",
    quotationNo: "QTN-1004",
    customerName: "Diana Prince",
    place: "San Francisco",
    value: "$6000",
    contactPerson: "Bruce Wayne",
    date: "20/12/2023",
    view: "Open",
    approval: "Approved",
    reason: "N/A",
  },
  {
    siNo: "5",
    quotationNo: "QTN-1005",
    customerName: "Ethan Hunt",
    place: "Boston",
    value: "$2500",
    contactPerson: "Tom Cruise",
    date: "05/10/2023",
    view: "Open",
    approval: "Pending",
    reason: "Awaiting response",
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
    reason: "Pricing issues",
  },
  {
    siNo: "7",
    quotationNo: "QTN-1007",
    customerName: "George Lucas",
    place: "Seattle",
    value: "$4500",
    contactPerson: "Leia Organa",
    date: "25/11/2023",
    view: "Open",
    approval: "Approved",
    reason: "N/A",
  },
  {
    siNo: "8",
    quotationNo: "QTN-1008",
    customerName: "Hank Schrader",
    place: "Albuquerque",
    value: "$3800",
    contactPerson: "Walter White",
    date: "30/08/2023",
    view: "Open",
    approval: "Pending",
    reason: "Documents missing",
  },
  {
    siNo: "9",
    quotationNo: "QTN-1009",
    customerName: "Ivy Summers",
    place: "Miami",
    value: "$5000",
    contactPerson: "Peter Parker",
    date: "12/10/2023",
    view: "Open",
    approval: "Approved",
    reason: "N/A",
  },
  {
    siNo: "10",
    quotationNo: "QTN-1010",
    customerName: "Jack Sparrow",
    place: "Orlando",
    value: "$7000",
    contactPerson: "Will Turner",
    date: "01/12/2023",
    view: "Open",
    approval: "Pending",
    reason: "Customer negotiation",
  },
];

function QuotationTable() {
  return (
    <div className="flex flex-col w-full max-md:max-w-full overflow-auto">
      <FilterSection /> {/* Applying 24px top and bottom margin */}
      <TableHeader />
      {tableData.map((row, index) => (
        <TableRow key={index} {...row} />
      ))}
    </div>
  );
}

export default QuotationTable;
