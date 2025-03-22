import React, { useState } from "react";
import AllDC from "./AllDC/QuotationTable";
import OpenDC from "./OpenDC/QuotationTable";
import ApprovedDC from "./ApproveDC/QuotationTable";

function ViewDC() {
    const [activeTab, setActiveTab] = useState("all");

    const renderContent = () => {
        switch (activeTab) {
            case "all":
                return <AllDC />;
            case "open":
                return <OpenDC />;
            case "approved":
                return <ApprovedDC />;
            default:
                return <AllDC />;
        }
    };

    return (
        <div className=" bg-white min-h-screen">
            <div className="flex gap-4">
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "all"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("all")}
                >
                    View All DC
                </button>

                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "open"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("open")}
                >
                    Open DC
                </button>

                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "approved"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("approved")}
                >
                    Approved DC
                </button>
            </div>
            <div className="bg-white p-4 rounded shadow">
                {renderContent()}
            </div>
        </div>
    );
}

export default ViewDC;
