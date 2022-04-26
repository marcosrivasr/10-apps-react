import { forwardRef, useEffect, useState } from "react";
import TableBlock from "./tableBlock";

function TableBlockView({ data, onChange, onCreate, focusId }, ref) {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    getHeaders();
  }, []);

  useEffect(() => {
    if (focusId) {
      ref.current.focus();
    }
  }, [focusId]);

  function getHeaders() {
    const keys = data.map((item) => Object.keys(item)).flat();
    const items = new Set(keys);
    setHeaders([...items]);
  }

  return (
    <table>
      <thead>
        <tr>
          {headers.map((head) => (
            <th key={crypto.randomUUID()}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {headers.map((cell) => (
              <td>{row[cell].toString() ?? ""}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default forwardRef(TableBlockView);
