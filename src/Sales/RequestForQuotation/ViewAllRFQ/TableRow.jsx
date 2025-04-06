import React from "react";

function TableRow({
  rfqid,
  customer_name,
  location,
  created_at,
  typeOfGoods,
  requestVia,
  lastDateToSubmit,
  requestReferenceNumber,
  contactPerson,
  contactPersonEmail,
  contactPersonNumber,
  status,
  action,
}) {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full bg-white border-b-2 border-blue-100 max-md:max-w-full">
      <div className="flex-1 shrink my-auto text-sm font-medium text-center whitespace-nowrap text-sky-950">
        {rfqid}
      </div>
      <div className="flex-1 shrink my-auto text-sm font-medium text-sky-950">
        {customer_name}
      </div>
      <div className="flex-1 shrink my-auto text-sm font-medium text-sky-950">
        {location}
      </div>
      <div className="flex-1 shrink my-auto text-sm font-medium text-sky-950">
        {created_at}
      </div>
      <div className="flex-1 shrink my-auto text-sm font-medium text-sky-950">
        {typeOfGoods}
      </div>
      <div className="flex-1 shrink my-auto text-sm font-medium text-sky-950">
        {requestVia}
      </div>
      <div className="flex-1 shrink my-auto text-sm font-medium text-sky-950">
        {lastDateToSubmit}
      </div>
      <div className="flex-1 shrink my-auto text-sm font-medium text-sky-950">
        {requestReferenceNumber}
      </div>
      <div className="flex-1 shrink my-auto text-sm font-medium text-sky-950">
        {contactPerson}
      </div>
      <div className="flex-1 shrink my-auto text-sm font-medium text-sky-950">
        {contactPersonEmail}
      </div>
      <div className="flex-1 shrink my-auto text-sm font-medium text-sky-950">
        {contactPersonNumber}
      </div>
      <div className="flex flex-1 shrink items-center my-auto text-xs font-medium whitespace-nowrap basis-0">
        <div
          className={`px-3 py-2 rounded-3xl ${status === 0
              ? "bg-yellow-100 text-yellow-600"
              : status === 1
                ? "bg-green-100 text-green-600"
                : "bg-blue-100 text-blue-600"
            }`}
        >
          {status === 0 ? "Pending" : status === 1 ? "Approved" : "Unknown"}
        </div>
      </div>

      {/* <div className="flex flex-1 shrink justify-center items-center basis-0">
        <div className="flex gap-4 items-center">
          {action}
        </div>
      </div> */}
    </div>
  );
}

export default TableRow;
