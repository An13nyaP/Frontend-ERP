import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import PendingPOsPage from './PendingPOs/PendingPOs'
import ViewAllQuotationsPage from './ViewAllQuotations/ViewAllQuotations'
import ValidateQuotations from './ValidateQuotation/ValidateQuotations'
import ViewInventory from './ViewInventorys/ViewInventory'
import CompanyDetails from './UpdateCompanyDetails/UpdateCompanyDetails'
import Dashboard from './Home/Dashboard'

function Admin() {
  const [activeTab, setActiveTab] = useState('Home')

  const renderContent = () => {
    switch (activeTab) {
      case "Pending PO's":
        return <PendingPOsPage />
      case 'View All Quotations':
        return <ViewAllQuotationsPage />
      case 'Validate Quotations':
        return <ValidateQuotations />
      case 'View Inventory':
        return <ViewInventory />
      case 'Update Company Details':
        return <CompanyDetails />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Sticky Sidebar */}
      <div className="w-64 flex-shrink-0 bg-white ">
        <Sidebar onTabChange={setActiveTab} activeTab={activeTab} />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4">{renderContent()}</div>
    </div>
  )
}

export default Admin
