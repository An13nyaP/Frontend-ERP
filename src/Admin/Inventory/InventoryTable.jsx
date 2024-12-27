import React from 'react'

function InventoryTable() {
  const inventoryItems = [
    {
      id: 1,
      part: 'Hat',
      description: 'Matt Dickerson',
      hsnNumber: '13/05/2022',
      unitOfMeasure: '13/05/2022',
      qtyNos: '13/05/2022',
      unitRate: '$4.95',
      totalAmount: 'Tranfer Bank',
    },
    // Add other inventory items here
  ]

  const headers = [
    'Sl No.',
    'Part',
    'Item Description',
    'Hsn Number',
    'Unit Of Mesure',
    'Qty Nos',
    'Unit Rate in INR',
    'Total Amount in INR',
    'Delete',
  ]

  return (
    <div className="flex flex-col self-stretch mt-12 w-full min-h-[647px] max-md:mt-10 max-md:max-w-full">
      <div className="flex justify-between items-center bg-blue-100 text-sm font-bold text-black py-4 px-2">
        {headers.map((header, index) => (
          <div
            key={index}
            className="text-center px-4"
            style={{
              flex:
                index === 0 || index === headers.length - 1 ? '0 0 80px' : '1',
            }}
          >
            {header}
          </div>
        ))}
      </div>
      {inventoryItems.map((item, index) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b border-gray-200 text-sm text-sky-950 py-4 px-2"
        >
          <div className="text-center px-4" style={{ flex: '1' }}>
            {index + 1}
          </div>
          <div className="px-4" style={{ flex: '1' }}>
            {item.part}
          </div>
          <div className="px-4" style={{ flex: '1' }}>
            {item.description}
          </div>
          <div className="px-4" style={{ flex: '1' }}>
            {item.hsnNumber}
          </div>
          <div className="px-4" style={{ flex: '1' }}>
            {item.unitOfMeasure}
          </div>
          <div className="px-4" style={{ flex: '1' }}>
            {item.qtyNos}
          </div>
          <div className="px-4" style={{ flex: '1' }}>
            {item.unitRate}
          </div>
          <div className="px-4" style={{ flex: '1' }}>
            {item.totalAmount}
          </div>
          <div
            className="flex justify-center items-center px-4"
            style={{ flex: '0 0 80px' }}
          >
            <img
              src="https://your-icon-url.com/delete-icon.png"
              alt="Delete"
              className="w-5 h-5"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default InventoryTable
