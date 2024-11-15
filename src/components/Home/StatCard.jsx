import React from 'react';

function StatCard({ title, value }) {
    return (
        <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl text-sky-950">{title}</h2>
            <p className="mt-2.5 text-7xl font-semibold text-blue-700 tracking-[4.92px] max-md:text-4xl">
                {value}
            </p>
        </div>
    );
}

export default StatCard;