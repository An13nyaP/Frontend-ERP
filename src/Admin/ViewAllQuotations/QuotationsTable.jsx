import React from 'react'

function QuotationsTable() {
  const headers = [
    'Sl No.',
    'Quotation No',
    'Customer',
    'Place',
    'Brief Description',
    'Value',
    'Contact Person',
    'Quotation Date',
    'Status',
    'Reason',
  ]

  const quotations = [
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      briefDescription: '$4.95',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      status: 'Delivered',
      reason: 'Tranfer Bank',
    },
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      briefDescription: '$4.95',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      status: 'Delivered',
      reason: 'Tranfer Bank',
    },
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      briefDescription: '$4.95',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      status: 'Delivered',
      reason: 'Tranfer Bank',
    },
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      briefDescription: '$4.95',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      status: 'Delivered',
      reason: 'Tranfer Bank',
    },
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      briefDescription: '$4.95',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      status: 'Delivered',
      reason: 'Tranfer Bank',
    },
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      briefDescription: '$4.95',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      status: 'Delivered',
      reason: 'Tranfer Bank',
    },
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      briefDescription: '$4.95',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      status: 'Delivered',
      reason: 'Tranfer Bank',
    },
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      briefDescription: '$4.95',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      status: 'Delivered',
      reason: 'Tranfer Bank',
    },
    {
      slNo: '#20462',
      quotationNo: 'Hat',
      customer: 'Matt Dickerson',
      place: '13/05/2022',
      briefDescription: '$4.95',
      value: 'Tranfer Bank',
      contactPerson: 'Tranfer Bank',
      quotationDate: '13/05/2022',
      status: 'Delivered',
      reason: 'Tranfer Bank',
    }
    // Repeat this object 7 more times to have 8 rows of data
  ]

  return (
    <div className="flex flex-col mt-9 mr-0 w-full text-sm font-medium text-sky-950 max-md:max-w-full">
      <div className="flex flex-wrap gap-4 justify-center items-center p-4 w-full font-bold bg-blue-100 max-md:max-w-full">
        {headers.map((header, index) => (
          <div
            key={index}
            className="flex-1 grow shrink gap-1 self-stretch my-auto text-center"
          >
            {header}
          </div>
        ))}
      </div>
      {quotations.map((quotation, index) => (
        <div
          key={index}
          className="flex flex-wrap gap-4 justify-center items-center p-4 w-full bg-white border-b-2 border-blue-100 max-md:max-w-full"
        >
          {Object.values(quotation).map((value, cellIndex) => (
            <div
              key={cellIndex}
              className="flex-1 grow shrink gap-2 self-stretch my-auto"
            >
              {cellIndex === 8 ? (
                <div className="flex grow shrink gap-2 items-center self-stretch my-auto text-xs text-green-600 whitespace-nowrap w-[77px]">
                  <div className="gap-2.5 self-stretch px-3 py-2 my-auto bg-emerald-50 rounded-3xl">
                    {value}
                  </div>
                </div>
              ) : (
                value
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default QuotationsTable
