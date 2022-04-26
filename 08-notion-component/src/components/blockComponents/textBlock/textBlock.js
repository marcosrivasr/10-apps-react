import { forwardRef, ref } from "react";

function TextBlock({ item, onChange, onKeyPress, focus }, ref) {
  function handleChange(e) {
    onChange(item, e);
  }

  function handleOnKeyPress(e) {
    onKeyPress(item, e);
  }
  return (
    <input
      ref={focus ? ref : null}
      onChange={handleChange}
      onKeyPress={handleOnKeyPress}
      value={item.text}
    />
  );
}

export default forwardRef(TextBlock);
