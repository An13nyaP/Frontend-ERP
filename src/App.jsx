import React from "react";
import POView from "./components/POSView/POViews";
import PendingPOsPage from './components/PendingPOs/PendingPOsPage'
import ViewQuotationsPage from "./components/ViewAllQuotations/ViewQuotations";
//import DashboardLayout from "./components/Home/DashboardLayout";
//import PendingPOs from "./components/ui/PendingPOs";
//import CustomerManagement from "./components/CreateCustomer/CustomerManagement";
import CreateQuotation from "./components/CreateQuotations/CreateQuotation";
//import P0 from "./components/CreatePoInward/PurchaseOrderForm";
//import POViews from "./components/POSView/POViews";


function App() {
  return (
    <div className="min-h-screen bg-custom-light-blue p-4">
      <ViewQuotationsPage />
    </div>
  )
}

export default App;
