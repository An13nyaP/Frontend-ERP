import React from "react";
// import Sidebar from "../Components/Sidebar";
import PendingRFQTable from "./PendingRFQTable";

function PendingRFQPage() {
  return (
    <div className="flex flex-col p-4 min-h-screen bg-white">
      <PendingRFQTable />
    </div>
  );
}

export default PendingRFQPage;
