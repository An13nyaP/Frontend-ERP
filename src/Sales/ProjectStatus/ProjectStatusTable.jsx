import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import FilterSection from "../components/FilterSection";
import API_ENDPOINTS from "../../constants/apiEndPoints";

function ProjectStatusTable() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = API_ENDPOINTS.poInwards.customerAcceptance;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // In case the data is nested
        const rows = data.customerAcceptance || data;

        setTableData(rows);
      } catch (error) {
        console.error("Error fetching table data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="pb-[24px]">
        <FilterSection className="my-[24px] mb-[24px]" />
        <TableHeader className="mt-[24px]" />

        {loading ? (
          <div className="text-center text-gray-500 p-4">Loading...</div>
        ) : tableData.length > 0 ? (
          tableData.map((row, index) => (
            <TableRow key={index} {...row} />
          ))
        ) : (
          <div className="text-center text-gray-500 p-4">No data available.</div>
        )}
      </div>
    </div>
  );
}

export default ProjectStatusTable;
