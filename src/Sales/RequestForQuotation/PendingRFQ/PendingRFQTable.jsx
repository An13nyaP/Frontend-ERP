import React, { useEffect, useState } from "react";
import FilterSection from "../../components/FilterSection";
import CustomTable from "../../../components/CustomTable";
import { HEADER_ITEMS } from "../../../constants/tableHeader";
import { fetchPendingRFQs } from "../../../utils/apiServices";

function PendingRFQTable() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRFQData = async () => {
      setLoading(true);
      const data = await fetchPendingRFQs();
      setTableData(data);
      setLoading(false);
    };

    getRFQData();
  }, []);
 

  return (
    <div className="flex flex-col w-full max-md:max-w-full overflow-auto">
      <FilterSection />
      {loading ? (
        <p>Loading data...</p>
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

export default PendingRFQTable;
