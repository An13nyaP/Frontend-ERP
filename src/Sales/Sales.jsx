import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import PendingWorkOrders from './PendingWorkOrders/PendingWOsPage'
import RequestForQuotation from './RequestForQuotation/RFQ'
import Customer from './Customers/Customer'
import Quotations from './Quotations/Quotations'
import AddPOInward from './AddPOInward/AddPOInward3'
import ProjectStatus from './ProjectStatus/ProjectStatus'

function Sales() {
    const [activeTab, setActiveTab] = useState("Customer's") // Default tab

    const handleTabChange = (tabName) => {
        setActiveTab(tabName)
    }

    const renderActiveTab = () => {
        switch (activeTab) {
            case 'Pending Work Orders':
                return <PendingWorkOrders />
            case 'Request For Quotations':
                return <RequestForQuotation />
            case "Customer's":
                return <Customer />
            case "Quotation's":
                return <Quotations />
            case 'Add PO Inward':
                return <AddPOInward />
            case 'Project Acceptance Status':
                return <ProjectStatus />
            default:
                return <Customer /> // Fallback to Customer
        }
    }

    return (
        <div className="flex overflow-hidden flex-row gap-6 bg-slate-50 p-4">
            <Sidebar onTabChange={handleTabChange} activeTab={activeTab} />
            <div className="flex-1">
                {renderActiveTab()}
            </div>
        </div>
    )
}

export default Sales
