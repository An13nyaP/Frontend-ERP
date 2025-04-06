import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import FilterSection from "../../components/FilterSection";
import API_ENDPOINTS from "../../../constants/apiEndPoints";

function ViewAllRFQTable() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.rfq.viewAllRFQ);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data);

        // ✅ Since the API returns an array directly
        if (Array.isArray(data)) {
          const formattedData = data.map((rfq) => {
            const formattedCreatedAt = rfq.created_at
              ? new Date(rfq.created_at).toLocaleDateString()
              : "";
            const formattedLastDate = rfq.lastDateToSubmit
              ? new Date(rfq.lastDateToSubmit).toLocaleDateString()
              : "";

            return {
              rfqid: rfq.rfqid?.toString() || "",
              customer_name: rfq.customer_name || "",
              location: rfq.location || "",
              created_at: formattedCreatedAt,
              typeOfGoods: rfq.typeOfGoods || "",
              requestVia: rfq.requestVia || "",
              lastDateToSubmit: formattedLastDate,
              requestReferenceNumber: rfq.requestReferenceNumber || "",
              contactPerson: rfq.contactPerson || "",
              contactPersonEmail: rfq.contactPersonEmail || "",
              contactPersonNumber: rfq.contactPersonNumber || "",
              status: rfq.status,
              action: null,
            };
          });

          setTableData(formattedData);
        } else {
          setTableData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setTableData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full max-md:max-w-full overflow-auto">
      <FilterSection />
      <TableHeader />
      {loading ? (
        <p>Loading data...</p>
      ) : (
        tableData.map((row, index) => (
          <TableRow key={row.rfqid || index} {...row} />
        ))
      )}
    </div>
  );
}

export default ViewAllRFQTable;
