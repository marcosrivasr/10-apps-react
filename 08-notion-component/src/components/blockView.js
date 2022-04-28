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
  const [properties, setProperties] = useState(["id", "text", "completed"]);

  const [data, setData] = useState([
    {
      id: crypto.randomUUID(),
      text: "Hola",
      completed: false,
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
    if (type === "table") {
      const temp = [...data];
      let itemIndex = temp.findIndex((it) => it.id === id);
      temp[itemIndex] = e.item;
      setData([...temp]);
    }
  }

  function handleCreate() {
    console.log("CREATE");
    const newItem = {
      id: crypto.randomUUID(),
      text: "",
      completed: false,
    };
    properties.forEach((prop) => {
      if (!newItem.hasOwnProperty(prop)) {
        newItem[prop] = "";
      }
    });
    console.log({ newItem });
    const temp = [...data, newItem];
    console.log({ temp });
    setData([...temp]);
    setCurrentItem(newItem);
  }

  function handleCreateColumn(name) {
    let columnName = name ?? "column" + properties.length;
    updateProperties(columnName);
  }

  function updateProperties(name) {
    const newProperties = [...properties, name];
    //setProperties([...properties, name]);
    console.log(newProperties);
    const temp = [...data];
    console.log({ temp });
    for (let i = 0; i < temp.length; i++) {
      const item = temp[i];
      for (let j = 0; j < newProperties.length; j++) {
        const prop = newProperties[j];
        if (item.hasOwnProperty(prop)) {
          console.log("existe la propiedad", prop);
        } else {
          item[prop] = "value";
          console.log("no existe", prop);
        }
      }
    }
    setProperties([...newProperties]);
    setData([...temp]);
  }

  function TypesSelector() {
    const [visible, setVisible] = useState(false);

    return (
      <div style={{ position: "relative" }}>
        <button onClick={() => setVisible(!visible)}>...</button>
        <div
          className="typesSelectorButtons"
          style={{ display: visible ? "flex" : "none" }}
        >
          <button className="blockViewButton" onClick={() => setType("text")}>
            Text
          </button>
          <button className="blockViewButton" onClick={() => setType("todo")}>
            ToDo
          </button>
          <button className="blockViewButton" onClick={() => setType("table")}>
            Table
          </button>
        </div>
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
        <TableBlockView
          columns={properties}
          data={data}
          onChange={handleChange}
          onCreate={handleCreate}
          onCreateNewColumn={handleCreateColumn}
        />
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
