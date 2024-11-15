import React from 'react';

function NoteSection() {
    return (
        <section className="flex flex-col mt-8 ml-4 max-w-full w-[657px]">
            <label htmlFor="note" className="text-base font-light text-sky-950 max-md:max-w-full">
                Note
            </label>
            <textarea
                id="note"
                className="flex overflow-hidden flex-col items-end px-16 pt-14 mt-1 w-full bg-white rounded border border-solid border-stone-300 max-md:pl-5 max-md:max-w-full"
            />
        </section>
    );
}

export default NoteSection;