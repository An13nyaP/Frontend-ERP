import React, { useState } from "react";
import Approve from "./approve/ProjectStatus";
import Approved from "./approved/ApprovedStatus";
import Rejected from "./rejected/RejectedStatus";
import ViewAll from "./viewALL/ViewallStatus";

function ApproveWO() {
    const [activeTab, setActiveTab] = useState("approve");

    const renderContent = () => {
        switch (activeTab) {
            case "approve":
                return <Approve />;
            case "approved":
                return <Approved />;
            case "rejected":
                return <Rejected />;
            case "viewall":
                return <ViewAll />;
            default:
                return <Approve />;
        }
    };

    return (
        <div className="pt-4 bg-gray-100 min-h-screen">
            <div className="flex gap-4 mb-0">
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "approve"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("approve")}
                >
                    Approve
                </button>
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "approved"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("approved")}
                >
                    Approved
                </button>
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "rejected"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("rejected")}
                >
                    Rejected
                </button>
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "viewall"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("viewall")}
                >
                    View All
                </button>
            </div>
            <div className="bg-white p-0 rounded ">
                {renderContent()}
            </div>
        </div>
    );
}

export default ApproveWO;
