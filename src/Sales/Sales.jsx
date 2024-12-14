import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import PendingWorkOrders from './PendingWorkOrders/PendingWOsPage'
// import RequestForQuotation from './RequestForQuotation/RequestForQuotation'
import Customer from './Customers/Customer'
// import Quotations from './Quotations/Quotations'
// import AddPOInward from './AddPOInward/AddPOInward'
import ProjectStatus from './ProjectStatus/ProjectStatus'


function Sales() {
    return (
        <div className="flex overflow-hidden flex-row gap-6 bg-slate-50 p-4">
            <Sidebar />
            <div className="flex-1">
                <Customer />
            </div>
        </div>
    )
}

export default Sales

