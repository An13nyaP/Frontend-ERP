import React, { useState } from "react";
import NewRFQ from "./NewRFQ/CustomerForm";
import PendingRFQ from "./PendingRFQ/PendingRFQPage";
import ViewAllRFQ from "./ViewAllRFQ/ViewAllRFQPage";

function RFQ() {
    const [activeTab, setActiveTab] = useState("new");

    // Function to render the appropriate content based on activeTab
    const renderContent = () => {
        switch (activeTab) {
            case "new":
                return <NewRFQ />;
            case "pending":
                return <PendingRFQ />;
            case "viewAll":
            default:
                return <ViewAllRFQ />;
        }
    };

    return (
        <div className="p-4 mt-4 min-h-screen">

            {/* Navigation Buttons */}
            <div className="flex gap-4">
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "new"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("new")}
                >
                    New RFQ
                </button>

                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "pending"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("pending")}
                >
                    Pending RFQ
                </button>

                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "viewAll"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("viewAll")}
                >
                    View All RFQs
                </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white p-4 rounded shadow">
                {renderContent()}
            </div>
        </div>
    );
}

export default RFQ;
