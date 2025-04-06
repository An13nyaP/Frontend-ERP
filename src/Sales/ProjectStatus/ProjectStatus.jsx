import React from "react";
import ProjectStatusTable from "./ProjectStatusTable";

function ProjectStatus() {
  return (
    <div className="flex overflow-hidden flex-wrap gap-4 bg-slate-50">
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <main className="flex flex-col px-5  mt-[72px] w-full bg-white shadow-[4px_4px_40px_rgba(0,0,0,0.15)] max-md:pl-5 max-md:max-w-full">
          <div className="flex-1 flex-wrap gap-5 justify-between items-start mr-6 w-full text-2xl font-medium tracking-wide max-w-[1159px] text-sky-950 max-md:mr-2.5 max-md:max-w-full">
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/25d020389ec4a19f9803ac5b99062eef305b45444be8e11697a06e65bbff6f1a?placeholderIfAbsent=true&apiKey=59c3577b3bf2468eadc2026e9528e39d"
              className="object-contain shrink-0 rounded-none aspect-square w-[35px]"
              alt=""
            /> */}
          </div>
          <ProjectStatusTable />
        </main>
      </div>
    </div>
  );
}

export default ProjectStatus;
