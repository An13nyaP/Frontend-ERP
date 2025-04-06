import React, { useState } from "react";
import AddCustomer from "./AddCustomer/CustomerForm";
import ViewCustomer from "./ViewCustomer/CustomerTable";

function Customer() {
    const [activeTab, setActiveTab] = useState("view");

    const renderContent = () => {
        switch (activeTab) {
            case "add":
                return <AddCustomer />;
            case "view":
            default:
                return <ViewCustomer />;
        }
    };

    return (
        <div className="p-4 min-h-screen">
            <h1 className="text-2xl font-bold text-center mb-4 text-sky-950">
            </h1>
            <div className="flex  gap-4 ">
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "view"
                        ? " border-b-4 border-blue-500 text-blue-500 "
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("view")}
                >
                    View Customers
                </button>
                <button
                    className={`px-4 py-2 font-medium rounded ${activeTab === "add"
                        ? " border-b-4 border-blue-500 text-blue-500 "
                        : "text-gray-700"
                        }`}
                    onClick={() => setActiveTab("add")}
                >
                    Add Customer
                </button>
            </div>
            <div className="flex flex-col w-full max-md:max-w-full overflow-auto">
                {renderContent()}
            </div>
        </div>
    );
}

export default Customer;
