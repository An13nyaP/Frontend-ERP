import React from 'react';
import CustomerRow from './CustomerRow';

const customerData = [
    { id: 123, name: 'Zeal Manufacturing Company', address: '48/A, 5th Main Rd, Kempamma Layout, Lakshmi Devi Nagar, Sanjay Gandhi Nagar, Bengaluru, Karnataka 560096', city: 'Bangalore', phone: '4564646469', email: 'zealman@gmail.com' },
    { id: 223, name: 'Zeal Manufacturing Company', address: '48/A, 5th Main Rd, Kempamma Layout, Lakshmi Devi Nagar, Sanjay Gandhi Nagar, Bengaluru, Karnataka 560096', city: 'Mysore', phone: '4564646469', email: 'zealman@gmail.com' },
    { id: 323, name: 'Zeal Manufacturing Company', address: '48/A, 5th Main Rd, Kempamma Layout, Lakshmi Devi Nagar, Sanjay Gandhi Nagar, Bengaluru, Karnataka 560096', city: 'Goa', phone: '4564646469', email: 'zealman@gmail.com' },
    { id: 423, name: 'Zeal Manufacturing Company', address: '48/A, 5th Main Rd, Kempamma Layout, Lakshmi Devi Nagar, Sanjay Gandhi Nagar, Bengaluru, Karnataka 560096', city: 'Hyderabad', phone: '4564646469', email: 'zealman@gmail.com' },
];

function CustomerList() {
    return (
        <section className="mt-4 ml-6 w-full max-w-[1110px] max-md:max-w-full">
            <header className="flex flex-wrap gap-5 justify-between mb-4 text-2xl font-medium tracking-wide text-sky-950">
                <h2>List Of Customers</h2>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/25d020389ec4a19f9803ac5b99062eef305b45444be8e11697a06e65bbff6f1a?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539" alt="" className="object-contain shrink-0 self-start rounded-none aspect-square w-[35px]" />
            </header>
            <div className="flex flex-col text-sm font-medium bg-sky-950 text-sky-950">
                <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full font-bold bg-blue-100 max-md:max-w-full">
                    <div className="flex-1 shrink gap-1 self-stretch my-auto text-center">Customer Number</div>
                    <div className="flex-1 shrink gap-2 self-stretch my-auto whitespace-nowrap">Customer</div>
                    <div className="flex gap-2 items-center self-stretch my-auto whitespace-nowrap min-w-[240px] w-[250px]">
                        <div className="flex-1 shrink self-stretch my-auto basis-0">Address</div>
                        <div className="flex shrink-0 self-stretch my-auto w-4 h-4"></div>
                    </div>
                    <div className="flex-1 shrink gap-2 self-stretch my-auto whitespace-nowrap">City</div>
                    <div className="flex-1 shrink gap-2 self-stretch my-auto w-[120px]">Phone Number</div>
                    <div className="flex-1 shrink gap-2 self-stretch my-auto">Email Address</div>
                </div>
                {customerData.map((customer) => (
                    <CustomerRow key={customer.id} {...customer} />
                ))}
            </div>
        </section>
    );
}

export default CustomerList;