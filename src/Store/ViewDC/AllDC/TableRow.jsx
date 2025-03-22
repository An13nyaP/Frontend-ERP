import React from "react";

function TableRow({
  siNo,
  quotationNo,
  customerName,
  place,
  value,
  contactPerson,
  date,
  view,
  approval,
  reason,
}) {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full bg-white border-b-2 border-blue-100 max-md:max-w-full">
      <div className="flex-1 shrink gap-1 self-stretch my-auto text-sm font-medium text-center whitespace-nowrap text-sky-950">
        {siNo}
      </div>
      <div className="flex-1 shrink gap-2 self-stretch my-auto text-sm font-medium whitespace-nowrap text-sky-950">
        {quotationNo}
      </div>
      <div className="flex-1 shrink gap-2 self-stretch my-auto text-sm font-medium text-sky-950">
        {customerName}
      </div>
      <div className="flex-1 shrink gap-2 self-stretch my-auto text-sm font-medium text-sky-950">
        {place}
      </div>
      <div className="flex-1 shrink gap-2 self-stretch my-auto text-sm font-medium text-sky-950">
        {value}
      </div>
      <div className="flex-1 shrink gap-2 self-stretch my-auto text-sm font-medium text-sky-950">
        {contactPerson}
      </div>
      <div className="flex-1 shrink gap-2 self-stretch my-auto text-sm font-medium text-sky-950">
        {date}
      </div>

      {/* View Column */}
      <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto basis-0">
        <div
          className={`gap-2.5 self-stretch px-3 py-2 my-auto text-xs font-medium rounded-3xl text-center cursor-pointer ${view === "Print"
              ? "bg-blue-100 text-blue-600"
              : "bg-gray-600 text-white"
            }`}
        >
          {view}
        </div>
      </div>

      {/* Approval Status Column */}
      <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto basis-0">
        <div
          className={`gap-2.5 self-stretch px-3 py-2 my-auto text-xs font-medium rounded-3xl text-center ${approval === "Closed Dc"
              ? "bg-emerald-50 text-green-600"
              : "bg-red-100 text-red-600"
            }`}
        >
          {approval}
        </div>
      </div>

      <div className="flex-1 shrink gap-2 self-stretch my-auto text-sm font-medium text-sky-950">
        {reason}
      </div>
    </div>
  );
}

export default TableRow;
