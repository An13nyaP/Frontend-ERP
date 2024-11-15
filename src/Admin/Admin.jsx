import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import PendingPOsPage from './PendingPOs/PendingPOsPage'
import ViewAllQuotationsPage from './ViewAllQuotations/ViewAllQuotations'
import ValidateQuotations from './ValidateQuotation/ValidateQuotations'
import ViewInventory from './ViewInventorys/ViewInventory'
import CompanyDetails from './UpdateCompanyDetails/CompanyDetails'
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
    <div className="flex overflow-hidden flex-row gap-6 bg-slate-50 p-4">
      <Sidebar onTabChange={setActiveTab} activeTab={activeTab} />
      <div className="flex-1">{renderContent()}</div>
    </div>
  )
}

export default Admin
