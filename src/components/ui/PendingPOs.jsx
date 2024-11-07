import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"; // Importing table components
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"; // Importing pagination components

// Main component for displaying Pending Purchase Orders
const PendingPOs = () => {
    // Sample data to populate the table
    const data = [
        {
            workOrderNumber: "#20462",
            poNumber: "Hat",
            customer: "Angelina Joli",
            poDate: "13/10/2022",
            amount: "$4.95",
            projectEngineer: "Transfer Bank",
            qualityEngineer: "Transfer Bank",
            deliveryDate: "13/05/2022",
            status: "Delivered",
            remarks: "Transfer Bank",
        },
        {
            workOrderNumber: "#20462",
            poNumber: "Hat",
            customer: "Matt Dickerson",
            poDate: "13/05/2022",
            amount: "$4.95",
            projectEngineer: "Transfer Bank",
            qualityEngineer: "Transfer Bank",
            deliveryDate: "13/05/2022",
            status: "Delivered",
            remarks: "Transfer Bank",
        },
        {
            workOrderNumber: "#20462",
            poNumber: "Hat",
            customer: "Matt Dickerson",
            poDate: "13/05/2022",
            amount: "$4.95",
            projectEngineer: "Transfer Bank",
            qualityEngineer: "Transfer Bank",
            deliveryDate: "13/05/2022",
            status: "Delivered",
            remarks: "Transfer Bank",
        },
        {
            workOrderNumber: "#20462",
            poNumber: "Hat",
            customer: "Matt Dickerson",
            poDate: "13/05/2022",
            amount: "$4.95",
            projectEngineer: "Transfer Bank",
            qualityEngineer: "Transfer Bank",
            deliveryDate: "13/05/2022",
            status: "Delivered",
            remarks: "Transfer Bank",
        },
        {
            workOrderNumber: "#20462",
            poNumber: "Hat",
            customer: "Matt Dickerson",
            poDate: "13/05/2022",
            amount: "$4.95",
            projectEngineer: "Transfer Bank",
            qualityEngineer: "Transfer Bank",
            deliveryDate: "13/05/2022",
            status: "Delivered",
            remarks: "Transfer Bank",
        },
        {
            workOrderNumber: "#20462",
            poNumber: "Hat",
            customer: "Matt Dickerson",
            poDate: "13/05/2022",
            amount: "$4.95",
            projectEngineer: "Transfer Bank",
            qualityEngineer: "Transfer Bank",
            deliveryDate: "13/05/2022",
            status: "Delivered",
            remarks: "Transfer Bank",
        },
        {
            workOrderNumber: "#20462",
            poNumber: "Hat",
            customer: "Matt Dickerson",
            poDate: "13/05/2022",
            amount: "$4.95",
            projectEngineer: "Transfer Bank",
            qualityEngineer: "Transfer Bank",
            deliveryDate: "13/05/2022",
            status: "Delivered",
            remarks: "Transfer Bank",
        },
        {
            workOrderNumber: "#20462",
            poNumber: "Hat",
            customer: "Matt Dickerson",
            poDate: "13/05/2022",
            amount: "$4.95",
            projectEngineer: "Transfer Bank",
            qualityEngineer: "Transfer Bank",
            deliveryDate: "13/05/2022",
            status: "Delivered",
            remarks: "Transfer Bank",
        },
        {
            workOrderNumber: "#20462",
            poNumber: "Hat",
            customer: "Matt Dickerson",
            poDate: "13/05/2022",
            amount: "$4.95",
            projectEngineer: "Transfer Bank",
            qualityEngineer: "Transfer Bank",
            deliveryDate: "13/05/2022",
            status: "Delivered",
            remarks: "Transfer Bank",
        },
        {
            workOrderNumber: "#20462",
            poNumber: "Hat",
            customer: "Matt Dickerson",
            poDate: "13/05/2022",
            amount: "$4.95",
            projectEngineer: "Transfer Bank",
            qualityEngineer: "Transfer Bank",
            deliveryDate: "13/05/2022",
            status: "Delivered",
            remarks: "Transfer Bank",
        },
        {
            workOrderNumber: "#20462",
            poNumber: "Hat",
            customer: "Matt Dickerson",
            poDate: "13/05/2022",
            amount: "$4.95",
            projectEngineer: "Transfer Bank",
            qualityEngineer: "Transfer Bank",
            deliveryDate: "13/05/2022",
            status: "Delivered",
            remarks: "Transfer Bank",
        },
        {
            workOrderNumber: "#20462",
            poNumber: "Hat",
            customer: "Matt Dickerson",
            poDate: "13/05/2022",
            amount: "$4.95",
            projectEngineer: "Transfer Bank",
            qualityEngineer: "Transfer Bank",
            deliveryDate: "13/05/2022",
            status: "Delivered",
            remarks: "Transfer Bank",
        },
        {
            workOrderNumber: "#20462",
            poNumber: "Hat",
            customer: "Matt Dickerson",
            poDate: "13/05/2022",
            amount: "$4.95",
            projectEngineer: "Transfer Bank",
            qualityEngineer: "Transfer Bank",
            deliveryDate: "13/05/2022",
            status: "Delivered",
            remarks: "Transfer Bank",
        },

        // ... other rows
    ];

    // State variables for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Set the number of items per page

    // Determine the data for the current page based on pagination state
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex); // Slices data for the current page

    // Refresh function for refreshing data (placeholder here)
    const handleRefresh = () => {
        console.log("Data refreshed");
    };

    // Handlers for navigating pages in pagination
    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1)); // Goes to previous page if not on the first
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(data.length / itemsPerPage))); // Goes to next page if not on the last
    };

    return (
        <div className="flex bg-custom-light-blue m-0 p-0 font-kanit">
            {/* Sidebar for navigation links */}
            <div className="w-64 bg-custom-light-blue text-bhite p-4">
                <div className="mb-6">
                    <img src="src/assets/logo.png" alt="ZEAL Logo" className="w-90.69 h-17.92 mb-2" />
                </div>
                <ul className="space-y-4 font-kanit">
                    <li><a href="#" className="hover:text-blue-400">Home</a></li>
                    <li><a href="#" className="hover:text-blue-400">Pending PO's</a></li>
                    <li><a href="#" className="hover:text-blue-400">View All Quotations</a></li>
                    <li><a href="#" className="hover:text-blue-400">Validate Quotations</a></li>
                    <li><a href="#" className="hover:text-blue-400">View Inventory</a></li>
                    <li><a href="#" className="hover:text-blue-400">Update Company Details</a></li>
                </ul>
            </div>

            <div className="flex-1 bg-custom-light-blue p-6">
                {/* Filter Section outside main content box */}
                <div className="mb-4 flex space-x-4 items-center">
                    <span className="text-xl font-semibold text-black mr-4">
                        Filters
                    </span>
                    <div className="flex items-center space-x-2 font-kanit">
                        <span className="text-black">Customer</span>
                        <input
                            type="text"
                            className="px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center space-x-2 font-kanit">
                        <span className="text-black">Order Id</span>
                        <input
                            type="text"
                            className="px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center space-x-2 font-kanit">
                        <span className="text-black">Delivery Date</span>
                        <input
                            type="text"
                            className="px-4 py-2 border border-gray-300 rounded focus:outline-none"
                        />
                    </div>
                </div>




                {/* Main content area */}
                <div
                    className=" w-full h-screen bg-white p-6 shadow-md m-0 font-montserrat"
                    style={{
                        width: '1219px',
                        height: '888px',
                        margin: '0', // center align without side margins
                        padding: '46px 16px 56px 21px', // custom padding values
                        fontSize: '14px'
                    }}
                >
                    {/* Header Section for the main heading and refresh button */}
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">Pending PO's</h1>
                        <button
                            onClick={handleRefresh}
                            className="p-0 bg-transparent hover:bg-transparent focus:outline-none"
                        >
                            <img src="/src/assets/refresh.png" alt="Refresh" className="w-35 h-35" />
                        </button>
                    </div>


                    {/* Table for displaying purchase orders data */}
                    <Table className="text-[14px]">
                        <TableHeader className="bg-blue-200">
                            <TableRow >
                                <TableHead className="w-[100px] font-semibold ">Work Order Number</TableHead>
                                <TableHead className="w-[100px] font-semibold">PO Number</TableHead>
                                <TableHead className="w-[100px] font-semibold">Customer</TableHead>
                                <TableHead className="w-[100px] font-semibold">PO Date</TableHead>
                                <TableHead className="w-[100px] font-semibold">Amount</TableHead>
                                <TableHead className="w-[100px] font-semibold">Project Engineer</TableHead>
                                <TableHead className="w-[100px] font-semibold">Quality Engineer</TableHead>
                                <TableHead className="w-[100px] font-semibold">Delivery Date</TableHead>
                                <TableHead className="w-[100px] font-semibold">Status</TableHead>
                                <TableHead className="w-[100px] font-semibold">Remarks</TableHead>
                                <TableHead className="w-[100px] font-semibold">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paginatedData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.workOrderNumber}</TableCell>
                                    <TableCell>{row.poNumber}</TableCell>
                                    <TableCell>{row.customer}</TableCell>
                                    <TableCell>{row.poDate}</TableCell>
                                    <TableCell>{row.amount}</TableCell>
                                    <TableCell>{row.projectEngineer}</TableCell>
                                    <TableCell>{row.qualityEngineer}</TableCell>
                                    <TableCell>{row.deliveryDate}</TableCell>
                                    <TableCell>
                                        {/* Status label with conditional styling based on status */}
                                        <span
                                            className={`px-2 py-1 rounded-full text-sm ${row.status === "Delivered"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-yellow-100 text-yellow-800"
                                                }`}
                                        >
                                            {row.status}
                                        </span>
                                    </TableCell>
                                    <TableCell>{row.remarks}</TableCell>
                                    <TableCell>
                                        <button className="p-0 bg-transparent hover:text-blue-600 focus:outline-none">
                                            <img src="/src/assets/edit2.png" alt="Edit" className="w-30 h-30" />
                                        </button>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {/* Pagination component for navigating between pages */}
                    {/* <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious onClick={handlePrevious} disabled={currentPage === 1} />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink>{currentPage}</PaginationLink> {/* Current page indicator */}
                    {/* </PaginationItem>
                            <PaginationItem>
                                <PaginationNext onClick={handleNext} disabled={currentPage === Math.ceil(data.length / itemsPerPage)} />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination> */}
                </div>
            </div>
        </div>
    );
};

export default PendingPOs;
