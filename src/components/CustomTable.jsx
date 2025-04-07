const CustomTable = ({
  headers = {}, // e.g. { "Customer": "customer", "Status": "status", "Action Required": "approval" }
  data = [],
  isAction = false,
  headerValue = {}, // e.g. { "Status": { pending: "orange", delivered: "green" }, "Action Required": "true" }
  onEdit = () => {},
  onApprove = () => {},
  onReject = () => {},
}) => {
  const headerKeys = Object.keys(headers); // ["Customer", "Status", "Action Required"]

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
                const valueMap = headerValue[header];

                // Check if this header column is marked as Approval
                if (valueMap === "true") {
                  return (
                    <td key={colIndex} className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => onApprove(row)}
                          className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-green-700"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => onReject(row)}
                          className="border border-red-500 text-red-500 px-4 py-1 rounded-full text-sm font-medium hover:bg-red-50"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  );
                }

                // Check if this column should render pill color
                if (typeof valueMap === "object" && valueMap !== null) {
                  const safeKey =
                    typeof cellValue === "string"
                      ? cellValue.toLowerCase()
                      : String(cellValue ?? "").toLowerCase();
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
                            backgroundColor: `${color}20`, // Light background
                            color: color, // Main pill color
                          }}
                        >
                          {cellValue}
                        </span>
                      </td>
                    );
                  }
                }

                // Default cell
                return (
                  <td
                    key={colIndex}
                    className="px-4 py-3 max-w-[600px] break-words whitespace-normal"
                  >
                    {cellValue ?? "—"}
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
                    ✏️
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
