import React from 'react'

function UpdateRoleTable() {
  const tableData = [
    {
      id: '#20462',
      name: 'Matt Dickerson',
      email: 'matt.dickerson@example.com',
      phone: '13/05/2022',
      permanentWorkType: 'Product Engineer',
      temporaryWorkType: 'Product Manager',
      tillTime: 'Transfer Bank',
    },
    {
      id: '#20462',
      name: 'Matt Dickerson',
      email: 'matt.dickerson@example.com',
      phone: '13/05/2022',
      permanentWorkType: 'Product Engineer',
      temporaryWorkType: null,
      tillTime: 'Transfer Bank',
    },
    {
      id: '#20462',
      name: 'Matt Dickerson',
      email: 'matt.dickerson@example.com',
      phone: '13/05/2022',
      permanentWorkType: 'Product Engineer',
      temporaryWorkType: null,
      tillTime: 'Transfer Bank',
    },
    {
      id: '#20462',
      name: 'Matt Dickerson',
      email: 'matt.dickerson@example.com',
      phone: '13/05/2022',
      permanentWorkType: 'Product Engineer',
      temporaryWorkType: null,
      tillTime: 'Transfer Bank',
    },
    {
      id: '#20462',
      name: 'Matt Dickerson',
      email: 'matt.dickerson@example.com',
      phone: '13/05/2022',
      permanentWorkType: 'Product Engineer',
      temporaryWorkType: null,
      tillTime: 'Transfer Bank',
    },
    {
      id: '#20462',
      name: 'Matt Dickerson',
      email: 'matt.dickerson@example.com',
      phone: '13/05/2022',
      permanentWorkType: 'Product Engineer',
      temporaryWorkType: null,
      tillTime: 'Transfer Bank',
    },
    {
      id: '#20462',
      name: 'Matt Dickerson',
      email: 'matt.dickerson@example.com',
      phone: '13/05/2022',
      permanentWorkType: 'Product Engineer',
      temporaryWorkType: null,
      tillTime: 'Transfer Bank',
    },
    {
      id: '#20462',
      name: 'Matt Dickerson',
      email: 'matt.dickerson@example.com',
      phone: '13/05/2022',
      permanentWorkType: 'Product Engineer',
      temporaryWorkType: null,
      tillTime: 'Transfer Bank',
    },
    {
      id: '#20462',
      name: 'Matt Dickerson',
      email: 'matt.dickerson@example.com',
      phone: '13/05/2022',
      permanentWorkType: 'Product Engineer',
      temporaryWorkType: null,
      tillTime: 'Transfer Bank',
    },

    // Add more rows as needed
  ]

  return (
    <div className="p-4">
      <table className="w-full border-collapse text-sm font-medium text-center">
        <thead className="bg-blue-100 text-sky-950">
          <tr>
            <th className="px-3 py-2">Id</th>
            <th className="px-3 py-2">Name</th>
            <th className="px-3 py-2">Email Address</th>
            <th className="px-3 py-2">Phone Number</th>
            <th className="px-3 py-2">Permanent Work Type</th>
            <th className="px-3 py-2">Temporary Work Type</th>
            <th className="px-3 py-2">Till Time</th>
            <th className="px-3 py-2">Update</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className="border-y bg-white hover:bg-blue-50"
              style={{ height: '70px' }}
            >
              <td className="px-3 py-2">{row.id}</td>
              <td className="px-3 py-2">{row.name}</td>
              <td className="px-3 py-2">{row.email}</td>
              <td className="px-3 py-2">{row.phone}</td>
              <td className="px-3 py-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                  {row.permanentWorkType}
                </span>
              </td>
              <td className="px-3 py-2">
                {row.temporaryWorkType ? (
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                    {row.temporaryWorkType}
                  </span>
                ) : (
                  <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full">
                    Null
                  </span>
                )}
              </td>
              <td className="px-3 py-2">{row.tillTime}</td>
              <td className="px-3 py-2">
                <button className="bg-blue-700 text-white px-4 py-1 rounded-full">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UpdateRoleTable
