import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import FilterSection from "../../components/FilterSection";
import API_ENDPOINTS from "../../../constants/apiEndPoints";

function QuotationTable() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotations = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.quotations.approvedQuotations);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data);

        // Fix: use correct key from response
        const quotations = data.approvedQuotation || [];

        if (Array.isArray(quotations)) {
          setTableData(quotations);
        } else {
          console.error("Expected approvedQuotation to be an array.");
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
    <div className="flex flex-col w-full max-md:max-w-full overflow-auto">
      <FilterSection />
      <TableHeader />
      {loading ? (
        <p className="text-center text-gray-600 my-4">Loading data...</p>
      ) : (
        tableData.map((row, index) => (
          <TableRow key={index} {...row} />
        ))
      )}
    </div>
  );
}

export default QuotationTable;
