import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import PendingWorkOrders from './PendingWorkOrders/PendingWOsPage';
import ApproveWorkOrders from './ApproveWorkOrders/ApproveWO';
import ViewInventory from './ViewInventory/Inventory';

function ProjectManager() {
    const [activeTab, setActiveTab] = useState('Pending Work Orders'); // Default tab

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    const renderActiveTab = () => {
        switch (activeTab) {
            case 'Pending Work Orders':
                return <PendingWorkOrders />;
            case 'Approve Work Orders':
                return <ApproveWorkOrders />;
            case 'View Inventory':
                return <ViewInventory />;
            default:
                return <PendingWorkOrders />; // Fallback to PendingWorkOrders
        }
    };

    return (
        <div className="flex overflow-hidden flex-row gap-6 bg-slate-50 p-4">
            <Sidebar onTabChange={handleTabChange} activeTab={activeTab} />
            <div className="flex-1">
                {renderActiveTab()}
            </div>
        </div>
    );
}

export default ProjectManager;
