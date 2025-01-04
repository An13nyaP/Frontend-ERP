import React, { useState } from "react";
//import CreateQuotation from "./CreateQuotation/QuotationForm";
import ViewAllQuotations from "./AllQuotation/QuotationTable";
import ApprovedQuotations from "./ApprovedQuotation/QuotationTable";
import RejectedQuotations from "./RejectQuotation/QuotationTable";

function Quotations() {
    const [activeTab, setActiveTab] = useState("all");

    const renderContent = () => {
        switch (activeTab) {
            // case "create":
            //     return <CreateQuotation />;
            case "all":
                return <ViewAllQuotations />;
            case "approved":
                return <ApprovedQuotations />;
            case "rejected":
                return <RejectedQuotations />;
            default:
                return <ViewAllQuotations />;
        }
    };

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <div className="flex gap-4">
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "create"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("create")}
                >
                    Create Quotation
                </button>
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "all"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("all")}
                >
                    View All Quotations
                </button>

                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "approved"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("approved")}
                >
                    Approved Quotations
                </button>
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "rejected"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("rejected")}
                >
                    Rejected Quotations
                </button>
            </div>
            <div className="bg-white p-4 rounded shadow">
                {renderContent()}
            </div>
        </div>
    );
}

export default Quotations;
