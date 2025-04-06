import React, { useEffect, useState } from "react";
import FilterSection from "../../components/FilterSection";
import API_ENDPOINTS from "../../../constants/apiEndPoints";
import CustomTable from "../../../components/CustomTable";
import { HEADER_ITEMS } from "../../../constants/tableHeader";
import { fetchAllCustomers } from "../../../utils/apiServices";

function ViewAllCustomersTable() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchAllCustomers();
      setTableData(data);
      setLoading(false);
    };

    getData();
  }, []);
  {
    console.log("API Response:", tableData);
  }
  return (
    <div className="flex flex-col w-full max-md:max-w-full overflow-auto">
      <FilterSection />

      {loading ? (
        <p className="text-center py-4">Loading Customers...</p>
      ) : (
        <CustomTable
          headers={HEADER_ITEMS.customers}
          data={tableData}
          isAction={false}
        />
      )}
    </div>
  );
}

export default ViewAllCustomersTable;
