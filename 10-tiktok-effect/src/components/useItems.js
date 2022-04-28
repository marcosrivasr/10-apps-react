import { useEffect, useState } from "react";

export default function UseItems(arr) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (Array.isArray(arr)) {
      setItems([...items, ...arr]);
    }
  }, [arr]);

  return [items];
}
