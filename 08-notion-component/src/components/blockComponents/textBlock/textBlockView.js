import { forwardRef, useEffect } from "react";
import TextBlock from "./textBlock";

function TextBlockView({ data, onChange, onCreate, focusId }, ref) {
  useEffect(() => {
    if (focusId) {
      ref.current.focus();
    }
  }, [focusId]);

  function handleOnChange(item, e) {
    onChange({ type: "text", id: item.id, text: e.target.value });
  }

  function handleOnKeyPressed(item, e) {
    if (e.key === "Enter") {
      onCreate();
    }
  }

  return data.map((item) => (
    <TextBlock
      key={item.id}
      ref={ref}
      item={item}
      focus={focusId === item.id}
      onChange={handleOnChange}
      onKeyPress={handleOnKeyPressed}
    />
  ));
}

export default forwardRef(TextBlockView);
