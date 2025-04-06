import React from "react";
// import Sidebar from "../Components/Sidebar";
import PendingRFQTable from "./PendingRFQTable";

function PendingRFQPage() {
  return (
    <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
      {/* <FilterSection /> */}
      <main className="flex flex-col px-5 w-full bg-white max-md:pl-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start mr-6 w-full text-2xl font-medium tracking-wide max-w-[1159px] text-sky-950 max-md:mr-2.5 max-md:max-w-full">
          {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/25d020389ec4a19f9803ac5b99062eef305b45444be8e11697a06e65bbff6f1a?placeholderIfAbsent=true&apiKey=59c3577b3bf2468eadc2026e9528e39d"
              className="object-contain shrink-0 rounded-none aspect-square w-[35px]"
              alt=""
            /> */}
        </div>
        <PendingRFQTable />
      </main>
    </div>
  );
}

export default PendingRFQPage;
