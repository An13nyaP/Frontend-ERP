import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import FilterSection from "../../components/FilterSection";

const tableData = [
  {
    siNo: "1",
    quotationNo: "QTN-2001",
    customerName: "Michael Scott",
    place: "Scranton",
    value: "$4500",
    contactPerson: "Dwight Schrute",
    date: "10/02/2024",
    view: "Print",
    approval: "Open Dc",
    reason: "Pending Review",
  },
  {
    siNo: "2",
    quotationNo: "QTN-2002",
    customerName: "Jim Halpert",
    place: "Stamford",
    value: "$5200",
    contactPerson: "Pam Beesly",
    date: "14/02/2024",
    view: "Print",
    approval: "Open Dc",
    reason: "Awaiting Approval",
  },
  {
    siNo: "3",
    quotationNo: "QTN-2003",
    customerName: "Leslie Knope",
    place: "Pawnee",
    value: "$3800",
    contactPerson: "Ben Wyatt",
    date: "20/02/2024",
    view: "Print",
    approval: "Open Dc",
    reason: "Verification Required",
  },
  {
    siNo: "4",
    quotationNo: "QTN-2004",
    customerName: "Ron Swanson",
    place: "Pawnee",
    value: "$6000",
    contactPerson: "April Ludgate",
    date: "25/02/2024",
    view: "Print",
    approval: "Open Dc",
    reason: "Under Processing",
  },
  {
    siNo: "5",
    quotationNo: "QTN-2005",
    customerName: "Walter White",
    place: "Albuquerque",
    value: "$7500",
    contactPerson: "Jesse Pinkman",
    date: "01/03/2024",
    view: "Print",
    approval: "Open Dc",
    reason: "Approval Pending",
  },
  {
    siNo: "6",
    quotationNo: "QTN-2006",
    customerName: "Saul Goodman",
    place: "Albuquerque",
    value: "$2900",
    contactPerson: "Kim Wexler",
    date: "07/03/2024",
    view: "Print",
    approval: "Open Dc",
    reason: "Pending Review",
  },
  {
    siNo: "7",
    quotationNo: "QTN-2007",
    customerName: "Tony Stark",
    place: "New York",
    value: "$8500",
    contactPerson: "Pepper Potts",
    date: "15/03/2024",
    view: "Print",
    approval: "Open Dc",
    reason: "Verification Required",
  },
  {
    siNo: "8",
    quotationNo: "QTN-2008",
    customerName: "Bruce Wayne",
    place: "Gotham",
    value: "$9200",
    contactPerson: "Alfred Pennyworth",
    date: "20/03/2024",
    view: "Print",
    approval: "Open Dc",
    reason: "Awaiting Approval",
  },
  {
    siNo: "9",
    quotationNo: "QTN-2009",
    customerName: "Diana Prince",
    place: "Themyscira",
    value: "$6300",
    contactPerson: "Steve Trevor",
    date: "25/03/2024",
    view: "Print",
    approval: "Open Dc",
    reason: "Pending Review",
  },
  {
    siNo: "10",
    quotationNo: "QTN-2010",
    customerName: "Sherlock Holmes",
    place: "London",
    value: "$7200",
    contactPerson: "Dr. John Watson",
    date: "30/03/2024",
    view: "Print",
    approval: "Open Dc",
    reason: "Under Processing",
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
