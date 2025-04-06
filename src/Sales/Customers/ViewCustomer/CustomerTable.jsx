import React, { useEffect, useState } from "react";
import FilterSection from "../../components/FilterSection";
import API_ENDPOINTS from "../../../constants/apiEndPoints";
import CustomTable from "../../../components/CustomTable";
import { HEADER_ITEMS } from "../../../constants/tableHeader";

function ViewAllCustomersTable() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.customer.viewAllCustomers);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const formattedData = data.map((item) => ({
          id: item.customerid,
          name: item.customerName,
          address: `${item.addressLine1}, ${item.addressLine2}`,
          city: item.city,
          phone: item.phoneNumber,
          email: item.emailAddress,
        }));

        setTableData(formattedData);
      } catch (error) {
        console.error("Failed to fetch customers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);
  { console.log("API Response:", tableData)}
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
