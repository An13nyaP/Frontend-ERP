import React from "react";

function TableHeader() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full text-sm font-bold bg-blue-100 text-sky-950 max-md:max-w-full">
      <div className="flex-1 shrink gap-1 self-stretch my-auto text-center">
        RFQ <br /> Number
      </div>
      <div className="flex-1 shrink gap-1 self-stretch my-auto">Customer Name</div>
      <div className="flex-1 shrink gap-2 self-stretch my-auto whitespace-nowrap">
        Place
      </div>
      <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto basis-0">
        <div className="flex-1 shrink self-stretch my-auto basis-0">
          RFQ Date
        </div>
        <div className="flex shrink-0 self-stretch my-auto w-4 h-4" />
      </div>
      <div className="flex-1 shrink gap-2 self-stretch my-auto whitespace-nowrap">
        Type of <br /> Goods
      </div>
      <div className="flex-1 shrink gap-2 self-stretch my-auto">
        RFQ <br /> Media
      </div>
      <div className="flex-1 shrink gap-2 self-stretch my-auto">
        Last date of<br />Submission
      </div>
      <div className="flex-1 shrink gap-2 self-stretch my-auto">
        Request <br />Reference<br /> Number
      </div>
      <div className="flex-1 shrink gap-2 self-stretch my-auto whitespace-nowrap">
        Contact <br />Person Name
      </div>
      <div className="flex-1 shrink gap-2 self-stretch my-auto whitespace-nowrap">
        Contact <br />email
      </div>
      <div className="flex-1 shrink self-stretch my-auto basis-0">Contact <br />number</div>
      <div className="flex-1 shrink gap-2 self-stretch my-auto whitespace-nowrap">
        Status
      </div>
      {/* <div className="flex-1 shrink gap-2 self-stretch my-auto whitespace-nowrap">
        Action
      </div> */}
    </div>
  );
}

export default TableHeader;
