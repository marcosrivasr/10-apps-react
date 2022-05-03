import { forwardRef, ref } from "react";

import Input from "../../input";

function TextBlock({ item, onChange, onKeyPress, focus }, ref) {
  function handleChange(e) {
    onChange(item, e);
  }

  function handleOnKeyPress(e) {
    onKeyPress(item, e);
  }
  return (
    <Input
      border
      ref={focus ? ref : null}
      onChange={handleChange}
      onKeyPress={handleOnKeyPress}
      value={item.text}
    ></Input>
  );
}

export default forwardRef(TextBlock);
