import * as React from "react";
import NavigationItem from "./NavigationItem";

const Navigation = () => {
    const navigationItems = [
        { text: "View All", isActive: true },
        { text: "Approve", isActive: false },
        { text: "Approved", isActive: false },
        { text: "Rejected", isActive: false }
    ];
    return (
        <div
            className="flex flex-wrap items-start text-base tracking-wide"
            role="tablist"
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

export default Navigation;