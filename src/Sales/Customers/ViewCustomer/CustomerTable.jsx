import React, { useEffect, useState } from "react";
import FilterSection from "../../components/FilterSection";
import CustomTable from "../../../components/CustomTable";
import { HEADER_ITEMS } from "../../../constants/tableHeader";
import { fetchAllCustomers } from "../../../utils/apiServices";
import CenteredLoader from "../../../components/LottiLoader";

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
    <div className="flex flex-col w-full max-md:max-w-full bg-white p-4 overflow-auto">
      <FilterSection />

      {loading ? (
        <CenteredLoader />
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
