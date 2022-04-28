import { useEffect, useRef, useState } from "react";

export default function Cell({ text, onChange, isLast, onNew, edit }) {
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(text);

  useEffect(() => {
    setValue(text);
  }, [text]);

  useEffect(() => {
    return () => {};
  });

  function handleOnChange(e) {
    setValue(e.target.value);
  }

  function handleDoubleClick() {
    setEditable(true);
  }

  function handleOnKeyDown(e) {
    console.log(e.key);
    if (e.key === "Enter") {
      e.preventDefault();
      if (isLast) {
        console.log("ultima celda, toca crear fila");
        onNew();
      } else {
        onChange(value);
        setEditable(false);
      }
    }
  }

  function handleOnBlur(e) {
    onChange(e.target.value);
    setEditable(false);
  }

  return editable && edit ? (
    <td>
      <input
        tabIndex={0}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyDown}
        value={value}
        onBlur={handleOnBlur}
      />
    </td>
  ) : (
    <td onDoubleClick={handleDoubleClick}>{value}</td>
  );
}
