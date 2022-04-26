import { forwardRef } from "react";

function ToDoBlock({ item, onChange, onKeyPress, focus }, ref) {
  function handleChange(e) {
    onChange(item, e);
  }

  function handleOnKeyPress(e) {
    onKeyPress(item, e);
  }
  return (
    <div>
      <input
        name="checkbox"
        type={"checkbox"}
        onChange={handleChange}
        checked={item.completed}
      />
      <input
        ref={focus ? ref : null}
        onChange={handleChange}
        onKeyPress={handleOnKeyPress}
        value={item.text}
      />
    </div>
  );
}

export default forwardRef(ToDoBlock);
