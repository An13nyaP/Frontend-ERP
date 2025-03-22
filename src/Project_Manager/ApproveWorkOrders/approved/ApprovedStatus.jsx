/**
 * This code was generated by Builder.io
 */
import React from "react";
// import Sidebar from "../Components/Sidebar";
// import FilterSection from "../components/FilterSection";
import ProjectStatusTable from "./ProjectStatusTable";

function ApprovedStatus() {
  return (
    <div className="flex overflow-hidden flex-wrap gap-4 bg-slate-50">
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <main className="flex flex-col px-5 w-full bg-white shadow-[4px_4px_40px_rgba(0,0,0,0.15)] max-md:pl-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between items-start mr-6 w-full text-2xl font-medium tracking-wide max-w-[1159px] text-sky-950 max-md:mr-2.5 max-md:max-w-full">
          </div>
          <ProjectStatusTable />
        </main>
      </div>
    </div>
  );
}

export default ApprovedStatus;
