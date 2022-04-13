import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState(null);

  function handleInputChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    const oldTodos = [...todos];
    oldTodos.unshift(newTodo);

    setTodos(oldTodos);
  }

  function handleDeleteClick(id) {
    const tempTodos = todos.filter((item) => item.id !== id);

    setTodos([...tempTodos]);
  }

  function handleEditClick(id) {
    const item = todos.find((item) => item.id === id);
    const index = todos.findIndex((item) => item.id === id);

    if (!editItem) {
      setEditItem({
        id: item.id,
        index: index,
        title: item.title,
      });
    }
  }

  function handleEditChange(e) {
    setEditItem({
      id: editItem.id,
      index: editItem.index,
      title: e.target.value,
    });
  }

  function handleUpdateClick(e) {
    const temp = [...todos];
    temp[editItem.index].title = editItem.title;
    setTodos([...temp]);
    setEditItem(null);
  }

  function handleCheckboxChange(e, id) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.completed = !!e.target.checked;

    console.log("Holis");
    setTodos([...temp]);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange} value={title} />
        <input type={"submit"} />
      </form>

      <div>
        {todos.map((item) => (
          <div key={item.id}>
            {editItem && editItem.id === item.id ? (
              <span>
                <input
                  value={editItem.title}
                  onChange={(e) => handleEditChange(e, item.id)}
                />
                <button onClick={handleUpdateClick}>Actualizar</button>
              </span>
            ) : (
              <span
                style={{
                  color: item.completed ? "#ccc" : "",
                  textDecoration: item.completed ? "line-through" : "",
                }}
              >
                <input
                  type={"checkbox"}
                  onChange={(e) => handleCheckboxChange(e, item.id)}
                />
                {item.title}
                <button onClick={() => handleEditClick(item.id)}>Editar</button>
                <button onClick={() => handleDeleteClick(item.id)}>
                  Eliminar
                </button>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
