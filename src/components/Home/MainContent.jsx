import React from 'react';
import StatCard from './StatCard';
import Chart from './Chart';

function MainContent() {
    return (
        <main className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <header className="flex shrink-0 self-end max-w-full bg-slate-50 h-[89px] w-[1171px]" />
            <section className="flex overflow-hidden flex-col items-start px-20 py-14 w-full bg-white max-md:px-5 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between ml-6 max-w-full w-[945px]">
                    <StatCard title="No Of Purchase Order" value="3600" />
                    <StatCard title="Monthly Sales" value="3600" />
                </div>
                <Chart />
            </section>
        </main>
    );
}

export default MainContent;