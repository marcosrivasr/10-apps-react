import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});

export default function Store({ children }) {
  const [items, setItems] = useState([
    {
      id: "2ad6b5e2-9c2b-4959-b740-9335c85eed74",
      title: "Harry Potter y el caliz de fuego",
      author: "J.K. Rowling",
      cover: "http://localhost:3000/img/cover01.png",
      intro: "",
      completed: false,
      review: "",
    },
    {
      id: "9942219d-eecc-42b5-a421-2d9b12736b76",
      title: "Los ojos de la ciudad",
      author: "Marcos Rivas",
      cover: "http://localhost:3000/img/cover02.png",
      intro: "",
      completed: false,
      review: "",
    },
    {
      id: "9942219d-eecc-42b5-a421-2d9b12736b76",
      title: "Los ojos de la ciudad",
      author: "Marcos Rivas",
      cover: "http://localhost:3000/img/cover03.png",
      intro: "",
      completed: false,
      review: "",
    },
    {
      id: "9942219d-eecc-42b5-a421-2d9b12736b76",
      title: "Los ojos de la ciudad",
      author: "Marcos Rivas",
      cover: "http://localhost:3000/img/cover04.png",
      intro: "",
      completed: false,
      review: "",
    },
    {
      id: "9942219d-eecc-42b5-a421-2d9b12736b76",
      title: "Los ojos de la ciudad",
      author: "Marcos Rivas",
      cover: "http://localhost:3000/img/cover05.png",
      intro: "",
      completed: false,
      review: "",
    },
  ]);

  function createItem(item) {
    const temp = [...items];

    temp.unshift(item);

    setItems([...temp]);
  }

  function getItem(id) {
    const item = items.find((item) => item.id === id);

    return item;
  }

  function updateItem(item) {
    const index = items.findIndex((i) => i.id === item.id);

    const temp = [...items];

    temp[index] = { ...item };

    return true;
  }

  return (
    <AppContext.Provider
      value={{
        items,
        createItem,
        getItem,
        updateItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
