import React, { useEffect, useState } from "react";
import FilterSection from "../../components/FilterSection";
import API_ENDPOINTS from "../../../constants/apiEndPoints";
import CustomTable from "../../../components/CustomTable";
import { HEADER_ITEMS } from "../../../constants/tableHeader";
import CenteredLoader from "../../../components/LottiLoader";


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

              let statusText = "Pending";
          if (rfq.status === 0) statusText = "Rejected";
          else if (rfq.status === 1) statusText = "Quoted";

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
              status: statusText,
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
      {loading ? (
       <CenteredLoader />
      ) : (
        <CustomTable
        headers={HEADER_ITEMS.rfqs}
        data={tableData}
        headerValue={{
          Status: {
            quoted: "#22c55e",
            pending: "#eab308",
            rejected: "#ff7316",
          },
        }}
        isAction={false}
      />
      )}
    </div>
  );
}

export default ViewAllRFQTable;
