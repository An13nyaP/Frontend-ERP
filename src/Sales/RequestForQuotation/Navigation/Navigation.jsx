import * as React from "react";
import { NavigationItem } from "./NavigationItem";

export const Navigation = () => {
    const navigationItems = [
        { text: "New RFQ", isActive: true },
        { text: "View All RFQ's", isActive: false },
        { text: "Pending RFQ's", isActive: false }
    ];

    return (
        <div
            role="tablist"
            className="flex flex-wrap items-start text-base tracking-wide text-zinc-700"
        >
            {navigationItems.map((item, index) => (
                <NavigationItem
                    key={index}
                    text={item.text}
                    isActive={item.isActive}
                />
            ))}
        </div>
    );
};