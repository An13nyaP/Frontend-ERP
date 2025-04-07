import React, { useEffect, useState } from "react";

import FilterSection from "../../components/FilterSection";
import API_ENDPOINTS from "../../../constants/apiEndPoints";
import { HEADER_ITEMS } from "../../../constants/tableHeader";
import CustomTable from "../../../components/CustomTable";

function QuotationTable() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotations = async () => {
      try {
        const response = await fetch(
          API_ENDPOINTS.quotations.approvedQuotations
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data); // 👈 Add this to see the structure

        const quotationsList = data.approvedQuotation;

        if (Array.isArray(quotationsList)) {
          const formattedQuotations = quotationsList.map((q) => {
            const formattedDeliveryDate = q.deliveryDate
              ? new Date(q.deliveryDate).toLocaleDateString()
              : "";

            let adminApproval = "Hold";
            if (q.AdminApproved === 1) adminApproval = "Approved";
            else if (q.AdminApproved === 0) adminApproval = "Rejected";

            let itemDetails = [];
            try {
              itemDetails = JSON.parse(q.itemDetails);
            } catch (err) {
              console.warn("Invalid itemDetails JSON:", err);
            }

            return {
              quotationid: q.quotationid?.toString() || "",
              customerid: q.customerid?.toString() || "",
              name: q.name || "",
              emailAddress: q.emailAddress || "",
              phoneNumber: q.phoneNumber || "",
              deliveryDate: formattedDeliveryDate,
              AdminApproved: adminApproval,
            };
          });

          setTableData(formattedQuotations);
        } else {
          console.error("Expected data.quotations to be an array.");
          setTableData([]);
        }
      } catch (error) {
        console.error("Error fetching quotations:", error);
        setTableData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotations();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full max-md:max-w-full overflow-auto">
      <FilterSection />
      {loading ? (
        <p className="text-center text-gray-600 my-4">Loading data...</p>
      ) : (
        <CustomTable
          headers={HEADER_ITEMS.quotations}
          data={tableData}
          headerValue={{
            "Admin Approved": {
              approved: "#22c55e", // green
              rejected: "#ff7316", // orange
              hold: "#eab308", // yellow
            },
          }}
          isAction={true}
          onEdit={() => {}}
        />
      )}
    </div>
  );
}

export default QuotationTable;
