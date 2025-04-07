import React from 'react'

function Pagination() {
  return (
    <nav
      className="flex gap-4 p-4 items-start self-center mt-10 max-w-full w-[392px] max-md:mt-10"
      aria-label="Pagination"
    >
      <button
        className="flex justify-center items-center w-10 h-10 bg-white rounded border border-solid border-zinc-700 min-h-[40px]"
        aria-label="Previous page"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c311e20083cab97ddcb5d03bbb41a3a647f392c2b03d31db462f073cdaa12e3?placeholderIfAbsent=true&apiKey=59c3577b3bf2468eadc2026e9528e39d"
          className="object-contain self-stretch my-auto w-6 aspect-square"
          alt=""
        />
      </button>
      <button
        className="self-stretch w-10 h-10 text-base font-semibold text-center text-white whitespace-nowrap bg-blue-700 rounded border border-blue-700 border-solid min-h-[40px]"
        aria-current="page"
      >
        1
      </button>
      <button className="self-stretch w-10 h-10 text-base font-semibold text-center whitespace-nowrap bg-white rounded border border-solid border-zinc-700 min-h-[40px] text-zinc-700">
        2
      </button>
      <button className="self-stretch w-10 h-10 text-base font-semibold text-center whitespace-nowrap bg-white rounded border border-solid border-zinc-700 min-h-[40px] text-zinc-700">
        3
      </button>
      <span className="self-stretch w-10 text-base font-semibold text-center whitespace-nowrap rounded min-h-[40px] text-zinc-700">
        ...
      </span>
      <button className="self-stretch w-10 h-10 text-base font-semibold text-center whitespace-nowrap bg-white rounded border border-solid border-zinc-700 min-h-[40px] text-zinc-700">
        99
      </button>
      <button
        className="flex justify-center items-center w-10 h-10 bg-white rounded border border-blue-700 border-solid min-h-[40px]"
        aria-label="Next page"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/57ea8b7a5d592785fc758f6e45e1d4d12da686091209d9cad2f6696e7dec0052?placeholderIfAbsent=true&apiKey=59c3577b3bf2468eadc2026e9528e39d"
          className="object-contain self-stretch my-auto w-6 aspect-square"
          alt=""
        />
      </button>
    </nav>
  )
}

export default Pagination
