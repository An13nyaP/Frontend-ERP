import * as React from "react";
import TableRow from "./TableRow";
import FilterSection from "../../components/FilterSection";
import TableHeader from "./TableHeader";

const customerData = [
    {
        id: "123",
        name: "Zeal Manufacturing Company",
        address: "48/A, 5th Main Rd, Kempamma Layout, Lakshmi Devi Nagar, Sanjay Gandhi Nagar, Bengaluru, Karnataka 560096",
        city: "Bangalore",
        phone: "4564646469",
        email: "zealman@gmail.com"
    },
    {
        id: "223",
        name: "Zeal Manufacturing Company",
        address: "48/A, 5th Main Rd, Kempamma Layout, Lakshmi Devi Nagar, Sanjay Gandhi Nagar, Bengaluru, Karnataka 560096",
        city: "Mysore",
        phone: "4564646469",
        email: "zealman@gmail.com"
    },
    {
        id: "323",
        name: "Zeal Manufacturing Company",
        address: "48/A, 5th Main Rd, Kempamma Layout, Lakshmi Devi Nagar, Sanjay Gandhi Nagar, Bengaluru, Karnataka 560096",
        city: "Goa",
        phone: "4564646469",
        email: "zealman@gmail.com"
    },
    {
        id: "423",
        name: "Zeal Manufacturing Company",
        address: "48/A, 5th Main Rd, Kempamma Layout, Lakshmi Devi Nagar, Sanjay Gandhi Nagar, Bengaluru, Karnataka 560096",
        city: "Hyderabad",
        phone: "4564646469",
        email: "zealman@gmail.com"
    }
];

function CustomerTable() {
    return (
        <div className="flex flex-col text-sm font-medium text-sky-950">
            <div className="flex flex-col w-full  max-md:max-w-full">
                <FilterSection className="my-[24px]" />
                <TableHeader />
                {customerData.map((customer) => (
                    <TableRow key={customer.id} {...customer} />
                ))}
            </div>
        </div>
    );
}

export default CustomerTable;