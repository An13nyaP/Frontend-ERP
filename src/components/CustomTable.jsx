const CustomTable = ({
    headers = {}, // e.g. { "Customer": "customer", "Status": "status" }
    data = [],
    isAction = false,
    headerValue = {}, // e.g. { "Status": { delivered: "#22c55e", pending: "#f97316" } }
    onEdit = () => {},
  }) => {
    const headerKeys = Object.keys(headers); // ["Customer", "Status", ...]
    const dataKeys = Object.values(headers); // ["customer", "status", ...]
  
    return (
      <div className="w-full overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-[800px] w-full table-auto divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-blue-100 text-gray-900">
            <tr>
              {headerKeys.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 font-semibold whitespace-nowrap max-w-[300px] break-words"
                >
                  {header}
                </th>
              ))}
              {isAction && (
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Action</th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {headerKeys.map((header, colIndex) => {
                  const key = headers[header];
                  const cellValue = row[key];
  
                  const valueMap = headerValue[header]; // for pill logic
                  const safeKey = typeof cellValue === "string"
                    ? cellValue.toLowerCase()
                    : String(cellValue ?? '').toLowerCase();
                  const color = valueMap?.[safeKey];
  
                  if (color) {
                    return (
                      <td
                        key={colIndex}
                        className="px-4 py-3 max-w-[600px] break-words whitespace-normal"
                      >
                        <span
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{
                            backgroundColor: `${color}20`,
                            color: color,
                          }}
                        >
                          {cellValue}
                        </span>
                      </td>
                    );
                  }
  
                  return (
                    <td
                      key={colIndex}
                      className="px-4 py-3 max-w-[600px] break-words whitespace-normal"
                    >
                      {cellValue ?? '—'}
                    </td>
                  );
                })}
  
                {isAction && (
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => onEdit(row)}
                      className="hover:bg-blue-50 p-1 rounded-full transition"
                      title="Edit"
                    >
                      {/* Edit Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M11.224 4H4.224C3.69357 4 3.18486 4.21071 2.80979 4.58579C2.43471 4.96086 2.224 5.46957 2.224 6V20C2.224 20.5304 2.43471 21.0391 2.80979 21.4142C3.18486 21.7893 3.69357 22 4.224 22H18.224C18.7544 22 19.2631 21.7893 19.6382 21.4142C20.0133 21.0391 20.224 20.5304 20.224 20V13"
                          stroke="#624DE3"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.724 2.49998C19.1218 2.10216 19.6614 1.87866 20.224 1.87866C20.7866 1.87866 21.3262 2.10216 21.724 2.49998C22.1218 2.89781 22.3453 3.43737 22.3453 3.99998C22.3453 4.56259 22.1218 5.10216 21.724 5.49998L12.224 15L8.224 16L9.224 12L18.724 2.49998Z"
                          stroke="#624DE3"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default CustomTable;
  