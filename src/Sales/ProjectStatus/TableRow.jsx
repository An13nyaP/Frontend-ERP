import React from "react";

function TableRow({
  workordernumber,
  customer,
  customer_acceptance_status,
  reason_for_rejection,
  slip_date,
  slip_number,
  special_instruction,
}) {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full bg-white border-b-2 border-blue-100 max-md:max-w-full">
      <div className="flex-1 text-center text-sm font-medium text-sky-950">
        {workordernumber}
      </div>
      <div className="flex-1 text-sm font-medium text-sky-950">
        {customer}
      </div>
      <div className="flex-1 text-sm font-medium text-sky-950">
        {customer_acceptance_status === 1 ? "Accepted" : "Rejected"}
      </div>
      <div className="flex-1 text-sm font-medium text-sky-950">
        {reason_for_rejection || "-"}
      </div>
      <div className="flex-1 text-sm font-medium text-sky-950">
        {new Date(slip_date).toLocaleDateString()}
      </div>
      <div className="flex-1 text-sm font-medium text-sky-950">
        {slip_number}
      </div>
      <div className="flex-1 text-sm font-medium text-sky-950 truncate">
        {special_instruction}
      </div>
      <div className="flex flex-1 gap-2 justify-center items-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b927a60f8772abac0087201a4aca97ce8701ca514440f12a349586774018b389?placeholderIfAbsent=true&apiKey=59c3577b3bf2468eadc2026e9528e39d"
          className="object-contain w-6 aspect-square"
          alt="edit icon"
        />
      </div>
    </div>
  );
}

export default TableRow;
