import React from 'react';

function CustomerRow({ id, name, address, city, phone, email }) {
    return (
        <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full bg-white border-b-2 border-blue-100 max-md:max-w-full">
            <div className="flex-1 shrink gap-1 self-stretch my-auto text-center whitespace-nowrap">{id}</div>
            <div className="flex-1 shrink gap-2 self-stretch my-auto">{name}</div>
            <div className="flex-1 shrink gap-2 self-stretch my-auto min-w-[240px] w-[250px]">{address}</div>
            <div className="flex-1 shrink gap-2 self-stretch my-auto whitespace-nowrap">{city}</div>
            <div className="flex-1 shrink gap-2 self-stretch my-auto whitespace-nowrap w-[120px]">{phone}</div>
            <div className="flex-1 shrink self-stretch my-auto basis-0">{email}</div>
        </div>
    );
}

export default CustomerRow;