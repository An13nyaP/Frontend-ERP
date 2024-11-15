import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import PendingPOsPage from './PendingPOs/PendingPOsPage'
import ViewAllQuotationsPage from './ViewAllQuotations/ViewAllQuotations'

function Admin() {
  const [activeTab, setActiveTab] = useState('Home')

  const renderContent = () => {
    switch (activeTab) {
      case "Pending PO's":
        return <PendingPOsPage />
      case 'View All Quotations':
        return <ViewAllQuotationsPage />
      case 'Validate Quotations':
        return <div>Validate Quotations Page</div>
      case 'View Inventory':
        return <div>View Inventory Page</div>
      case 'Update Company Details':
        return <div>Update Company Details Page</div>
      default:
        return <div>Welcome to the Admin Dashboard</div>
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
