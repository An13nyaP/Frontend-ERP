import React, { useState } from "react";
import AddPOInward from "./AddPOInward1/Inventory";
import BOM from "./BOM/Inventory";
import WO from "./WO/Inventory";
import PS from "./PS/Inventory";

function AddPOInward3() {
    const [activeTab, setActiveTab] = useState("addPO");

    const renderContent = () => {
        switch (activeTab) {
            case "addPO":
                return <AddPOInward />;
            case "bom":
                return <BOM />;
            case "wo":
                return <WO />;
            case "ps":
                return <PS />;
            default:
                return <AddPOInward />;
        }
    };

    return (
        <div className="p-4 mt-4 min-h-screen">
            {/* Tab Buttons */}
            <div className="flex gap-4">
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "addPO"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("addPO")}
                >
                    Add PO Inward
                </button>
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "wo"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("wo")}
                >
                    Work Orders
                </button>
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "bom"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("bom")}
                >
                    Bill Of Materials
                </button>


                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "ps"
                        ? "border-b-4 border-blue-500 text-blue-500"
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("ps")}
                >
                    Prodution Slip
                </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white p-4 rounded shadow">
                {renderContent()}
            </div>
        </div>
    );
}

export default AddPOInward3;
