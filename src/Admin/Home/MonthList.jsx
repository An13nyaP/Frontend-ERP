import React from 'react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function MonthList() {
    return (
        <ul className="flex flex-wrap gap-10 ml-7 max-w-full text-2xl text-center whitespace-nowrap text-sky-950 w-[940px]">
            {months.map((month, index) => (
                <li key={index} className="grow">{month}</li>
            ))}
        </ul>
    );
}

export default MonthList;