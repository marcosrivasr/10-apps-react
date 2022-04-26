import PropTypes from "prop-types";
import TextBlockView from "./blockComponents/textBlock/textBlockView";
import TableBlockView from "./blockComponents/tableBlock/tableBlockView";
import ToDoBlockView from "./blockComponents/todoBlock/toDoBlockView";
import { useId, useRef, useState } from "react";

import "./blockView.css";

export default function BlockView() {
  const ref = useRef(null);

  const [currentItem, setCurrentItem] = useState(null);
  const [type, setType] = useState("text");

  const [data, setData] = useState([
    {
      id: crypto.randomUUID(),
      text: "Hola",
      completed: false,
      school: "almoloyita",
      name: "Marcos",
      age: 28,
    },
  ]);

  function handleChange(e) {
    const { type, text, id } = e;
    if (type === "text") {
      const temp = [...data];
      const item = temp.find((it) => it.id === id);
      item.text = text;
      setData([...temp]);
    }
    if (type === "todo") {
      const temp = [...data];
      const index = temp.findIndex((item) => item.id === id);
      const item = temp.find((it) => it.id === id);
      item.text = text ?? item.text;
      item.completed = e.completed ?? item.completed;
      console.log(temp);
      setData([...temp]);
    }
  }

  function handleCreate() {
    const newItem = {
      id: crypto.randomUUID(),
      text: "Hola",
      completed: false,
      school: "",
      name: "",
      age: 0,
    };
    setData([...data, newItem]);
    setCurrentItem(newItem);
  }

  function TypesSelector() {
    return (
      <div>
        <button onClick={() => setType("text")}>Text</button>
        <button onClick={() => setType("todo")}>ToDo</button>
        <button onClick={() => setType("table")}>Table</button>
      </div>
    );
  }

  if (type === "todo") {
    return (
      <div className="blockViewContainer">
        <TypesSelector />
        <ToDoBlockView
          ref={ref}
          data={data}
          focusId={currentItem?.id}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      </div>
    );
  }

  if (type === "table") {
    return (
      <div>
        <TypesSelector />
        <TableBlockView data={data} onChange={handleChange} />
      </div>
    );
  }

  return (
    <div className="blockViewContainer">
      <TypesSelector />
      <TextBlockView
        ref={ref}
        data={data}
        focusId={currentItem?.id}
        onChange={handleChange}
        onCreate={handleCreate}
      />
    </div>
  );
}

BlockView.propTypes = {
  type: PropTypes.string,
};
