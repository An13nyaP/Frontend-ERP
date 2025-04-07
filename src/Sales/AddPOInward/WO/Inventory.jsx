import React, { useEffect, useState } from "react";
import FilterSection from "./Filters";
import FilterSection2 from "./Filters2";
import InventoryTable from "./InventoryTable";
import { createPO } from "../../../utils/apiServices"; // Same function InventoryTable uses

function Inventory() {
    const [apiResponse, setApiResponse] = useState(null);
    const quotationId = "some-id"; // Replace with actual id logic

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await createPO(quotationId);
                setApiResponse(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [quotationId]);

    return (
        <div className="flex overflow-hidden flex-wrap gap-6 mb-10 bg-slate-50">
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="flex flex-col items-center py- w-full bg-white shadow-[4px_4px_40px_rgba(0,0,0,0.15)] max-md:max-w-full">
                    <FilterSection data={apiResponse} />
                    <InventoryTable quotationId={quotationId} />
                    <FilterSection2 data={apiResponse} />
                </div>
            </div>
        </div>
    );
}

export default Inventory;
