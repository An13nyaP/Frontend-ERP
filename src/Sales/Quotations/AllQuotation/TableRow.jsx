import React from "react";

function TableRow({
  quotationid,
  name,
  deliveryDate,
  itemDetails,
  phoneNumber,
  emailAddress,
  AdminApproved,
}) {
  let parsedItems = [];
  let totalValue = "0.00";

  try {
    const parsed = JSON.parse(itemDetails);
    parsedItems = Array.isArray(parsed) ? parsed : [];
    totalValue = parsedItems
      .reduce((sum, item) => sum + (item?.totalPrice || 0), 0)
      .toFixed(2);
  } catch (e) {
    console.error("Failed to parse itemDetails:", itemDetails, e);
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full bg-white border-b-2 border-blue-100 max-md:max-w-full">
      <div className="flex-1 text-sm font-medium text-sky-950 text-center">
        {quotationid}
      </div>
      <div className="flex-1 text-sm font-medium text-sky-950 text-center">
        {name}
      </div>
      <div className="flex-1 text-sm font-medium text-sky-950 text-center">
        {new Date(deliveryDate).toLocaleDateString()}
      </div>
      <div className="flex-1 text-sm font-medium text-sky-950 text-center">
        ₹{totalValue}
      </div>
      <div className="flex-1 text-sm font-medium text-sky-950 text-center">
        {phoneNumber}
      </div>
      <div className="flex-1 text-sm font-medium text-sky-950 text-center">
        {emailAddress}
      </div>
      <div className="flex-1 text-sm font-medium text-sky-950 text-center">
        <div
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${AdminApproved === 1
              ? "bg-green-100 text-green-600"
              : AdminApproved === 0
                ? "bg-red-100 text-red-600"
                : "bg-yellow-100 text-yellow-600"
            }`}
        >
          {AdminApproved === 1
            ? "Approved"
            : AdminApproved === 0
              ? "Rejected"
              : "Pending"}
        </div>
      </div>
    </div>
  );
}

export default TableRow;
