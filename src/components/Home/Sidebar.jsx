import React from 'react'

const menuItems = [
  { label: 'Home', isActive: true },
  { label: "Pending PO's", isActive: false },
  { label: 'View All Quotations', isActive: false },
  { label: 'Validate Quotations', isActive: false },
  { label: 'View Inventory', isActive: false },
  { label: 'Update Company Details', isActive: false },
]

function Sidebar() {
  return (
    <aside className="flex flex-col px-7 pt-6 pb-96 text-base bg-slate-50 text-zinc-700 max-md:pb-24 max-md:pl-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4adbf643213a930e4bab9ee16adf3e29664ca64ec9551a4ea412e38f9c7116e?placeholderIfAbsent=true&apiKey=4b67e31b94e242ca8da7bea04ad48539"
        alt="Zeal-logo"
        className="object-contain self-center max-w-full rounded-none aspect-[3.53] w-[127px]"
      />
      <nav className="flex flex-col mt-14 max-md:mt-10">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col mt-8 max-w-full rounded-xl w-[153px]"
          >
            <div
              className={`px-2.5 py-1 rounded-xl ${
                item.isActive ? 'bg-blue-100 text-sky-950' : 'bg-slate-50'
              }`}
            >
              {item.label}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
