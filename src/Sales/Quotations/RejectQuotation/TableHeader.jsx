import React from "react";

function TableHeader() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full text-sm font-bold bg-blue-100 text-sky-950 max-md:max-w-full">
      <div className="flex-1 text-center">Quotation No</div>
      <div className="flex-1 text-center">Customer Name</div>
      <div className="flex-1 text-center">Delivery Date</div>
      <div className="flex-1 text-center">Value</div>
      <div className="flex-1 text-center">Phone Number</div>
      <div className="flex-1 text-center">Email Address</div>
      <div className="flex-1 text-center">Approval</div>
    </div>
  );
}

export default TableHeader;
