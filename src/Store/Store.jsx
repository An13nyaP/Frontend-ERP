import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import IssueItems from "./IssueItems/Inventory";
import RegisterItems from "./RegisterItems/Inventory";
import ViewDC from "./ViewDC/ViewDC";
import ViewInventory from "./ViewInventory/Inventory";
import CreateDC from "./CreateDC/Inventory";


function Store() {
    const [activeTab, setActiveTab] = useState("Home");

    const renderContent = () => {
        switch (activeTab) {
            case "Create DC":
                return <CreateDC />
            case "Issue Items":
                return <IssueItems />;
            case "Register Items":
                return <RegisterItems />;
            case "View DC":
                return <ViewDC />;
            case "View Inventory":
                return <ViewInventory />;
            default:
                return <ViewInventory />;
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-slate-50">
            {/* Sticky Sidebar */}
            <div className="w-64 flex-shrink-0 bg-white">
                <Sidebar onTabChange={setActiveTab} activeTab={activeTab} />
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto pt-20">{renderContent()}</div>
        </div>
    );
}

export default Store;
