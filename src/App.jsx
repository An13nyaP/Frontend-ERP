import React from "react";
import { BrowserRouter,Routes, Route } from 'react-router-dom'

// import POView from "./components/POSView/POViews";
// import PendingPOsPage from './Admin/PendingPOs/PendingPOsPage';
// import ViewQuotationsPage from "./Admin/ViewAllQuotations/ViewAllQuotations";
// //import DashboardLayout from "./components/Home/DashboardLayout";
// //import PendingPOs from "./components/ui/PendingPOs";
// //import CustomerManagement from "./components/CreateCustomer/CustomerManagement";
// import CreateQuotation from "./components/CreateQuotations/CreateQuotation";
// //import P0 from "./components/CreatePoInward/PurchaseOrderForm";
// //import POViews from "./components/POSView/POViews";
import Admin from "./Admin/Admin";
import Login from "./Login"


function App() {
  return (
    // keep this p-4 inside each component otherwise the whole screen has padding
    // <div className="min-h-screen  bg-custom-light-blue p-4">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" exact element={<Admin />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
