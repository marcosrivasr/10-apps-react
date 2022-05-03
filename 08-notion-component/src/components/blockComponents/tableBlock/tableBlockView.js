import { forwardRef, useEffect, useState } from "react";
import Cell from "./cell";
import TableBlock from "./tableBlock";

import Button from "../../button";
import "./table.css";

function TableBlockView(
  { data, columns, onChange, onCreate, focusId, onCreateNewColumn },
  ref
) {
  useEffect(() => {
    if (focusId) {
      ref.current.focus();
    }
  }, [focusId]);

  useEffect(() => {
    return () => {
      ref = null;
    };
  });

  function handleCellOnChange(row, property, value) {
    const item = (data[row][property] = value);
    onChange({ type: "table", text: item.text, id: item.id, item: item });
  }

  function handleOnNew() {
    onCreate();
  }

  function handleNewColumnClick() {
    const name = prompt("Name of the column");
    onCreateNewColumn(name);
  }

  function handleNewRowClick() {
    onCreate();
  }
  return (
    <div>
      <Button onClick={handleNewColumnClick}>Add new column</Button>
      <Button onClick={handleNewRowClick}>Add new row</Button>
      <table>
        <thead>
          <tr>
            {columns.map((head) => (
              <th key={Math.random()}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={Math.random()}>
              {columns.map((cell, cellIndex) => (
                <Cell
                  key={Math.random()}
                  text={row[cell].toString() ?? ""}
                  onChange={(value) =>
                    handleCellOnChange(rowIndex, cell, value)
                  }
                  isLast={
                    rowIndex === data.length - 1 &&
                    cellIndex === columns.length - 1
                  }
                  onNew={handleOnNew}
                  edit={columns[cellIndex] !== "id"}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default forwardRef(TableBlockView);
