import React from 'react'

function QuotationTable() {
  const tableData = [
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      reason: 'Tranfer Bank',
    },
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      reason: 'Tranfer Bank',
    },
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      reason: 'Tranfer Bank',
    },
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      reason: 'Tranfer Bank',
    },
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      reason: 'Tranfer Bank',
    },
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      reason: 'Tranfer Bank',
    },
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      reason: 'Tranfer Bank',
    },
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      reason: 'Tranfer Bank',
    },
    // Repeat this object 7 more times to create 8 rows of data
  ]

  return (
    <div className="p-4 mt-2">
      <table className="w-full border-collapse text-sm font-medium text-center">
        <thead className="bg-blue-100 text-sky-950">
          <tr>
            <th className="px-3 py-4 w-[50px]">Sl No.</th>
            <th className="px-3 py-4 w-[80px]">Quotation No</th>
            <th className="px-3 py-4 w-[150px]">Customer</th>
            <th className="px-3 py-4 w-[80px]">Place</th>
            <th className="px-3 py-4 w-[80px]">Value</th>
            <th className="px-3 py-4 w-[120px]">Contact Person</th>
            <th className="px-3 py-4 w-[100px]">Quotation Date</th>
            <th className="px-3 py-4 w-[80px]">View</th>
            <th className="px-3 py-4 w-[150px]">Approval</th>
            <th className="px-3 py-4 w-[100px]">Reason</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className="border-y-2 border-blue-100 bg-white hover:bg-blue-50"
              style={{ height: '50px' }} // Adjust row height
            >
              <td className="px-4 py-4">{row.slNo}</td>
              <td className="px-4 py-4">{row.quotationNo}</td>
              <td className="px-4 py-4">{row.customer}</td>
              <td className="px-4 py-4">{row.place}</td>
              <td className="px-4 py-4">{row.value}</td>
              <td className="px-4 py-4">{row.contactPerson}</td>
              <td className="px-4 py-4">{row.quotationDate}</td>
              <td className="px-4 py-4">
                <button className="bg-blue-700 text-white px-3 py-1 rounded-3xl">
                  Open
                </button>
              </td>
              <td className="px-4 py-4 flex justify-center gap-2">
                <button className="bg-green-600 text-white px-3 py-1 rounded-3xl">
                  Approve
                </button>
                <button className="border border-red-500 text-red-500 px-3 py-1 rounded-3xl">
                  Reject
                </button>
              </td>
              <td className="px-4 py-4">{row.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default QuotationTable
