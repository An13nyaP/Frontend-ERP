import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import PendingWorkOrders from "./PendingWorkOrders/PendingWOsPage";
import RequestForQuotation from "./RequestForQuotation/RFQ";
import Customer from "./Customers/Customer";
import Quotations from "./Quotations/Quotations";
import AddPOInward from "./AddPOInward/AddPOInward3";
import ProjectStatus from "./ProjectStatus/ProjectStatus";

function Sales() {
  const [activeTab, setActiveTab] = useState("Pending Work Orders"); // Default tab

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "Pending Work Orders":
        return <PendingWorkOrders />;
      case "Request For Quotations":
        return <RequestForQuotation />;
      case "Customer's":
        return <Customer />;
      case "Quotation's":
        return <Quotations />;
      case "Add PO Inward":
        return <AddPOInward />;
      case "Project Acceptance Status":
        return <ProjectStatus />;
      default:
        return <PendingWorkOrders />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar - Fixed Width & No Scroll */}
      <Sidebar onTabChange={handleTabChange} activeTab={activeTab} />

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto ">{renderActiveTab()}</div>
    </div>
  );
}

export default Sales;
