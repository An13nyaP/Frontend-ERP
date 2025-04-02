import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import FilterSection from "../components/FilterSection";
import API_ENDPOINTS from "../../constants/apiEndPoints";

function PendingWOsTable() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.getPendingWorkOrders);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data);

        // Convert all keys to strings
        if (Array.isArray(data.pendingPOs)) {
          const formattedData = data.pendingPOs.map((po) => {
            const projectEngineers = po.project_engineers
              ? JSON.parse(po.project_engineers).map((eng) => eng.name).join(", ")
              : "";

            const qualityEngineers = po.quality_engineers
              ? JSON.parse(po.quality_engineers).map((eng) => eng.name).join(", ")
              : "";

            // Format delivery_date to remove time
            const formattedDeliveryDate = po.delivery_date
              ? new Date(po.delivery_date).toDateString().slice(4)
              : "";

            const formattedPoDate = po.po_date
              ? new Date(po.po_date).toDateString().slice(4)
              : "";

            // Convert all values to strings
            const convertedPO = Object.fromEntries(
              Object.entries({
                ...po,
                workordernumber: po.workordernumber.toString(),
                project_engineers: projectEngineers,
                quality_engineers: qualityEngineers,
                delivery_date: formattedDeliveryDate,
                po_date: formattedPoDate,
                // Fixed delivery date format
              }).map(([key, value]) => [key, value !== null ? value.toString() : ""])
            );

            return convertedPO;
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
          <TableRow key={row.workordernumber || index} {...row} />
        ))
      )}
    </div>
  );
}

export default PendingWOsTable;
