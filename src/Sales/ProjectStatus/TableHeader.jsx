import React from "react";

function TableHeader() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full text-sm font-bold bg-blue-100 text-sky-950 max-md:max-w-full">
      <div className="flex-1 text-center">Work Order Number</div>
      <div className="flex-1">Customer</div>
      <div className="flex-1">Acceptance Status</div>
      <div className="flex-1">Reason for Rejection</div>
      <div className="flex-1">Slip Date</div>
      <div className="flex-1">Slip Number</div>
      <div className="flex-1">Special Instruction</div>
      <div className="flex-1">Action</div>
    </div>
  );
}

export default TableHeader;
