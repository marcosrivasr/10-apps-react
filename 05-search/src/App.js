import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import SearchBar from "./components/searchbar";

import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: white;
  border: solid 2px #ccc;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }

  .activated{
    background-color: #00366
    color: white;
    border: solid 2px #26aeff;
  }
`;

const emails = [
  {
    id: "email-01",
    title: "Reporte de resultados",
  },
  {
    id: "email-02",
    title: "Requisitos para cambio",
  },
  {
    id: "email-03",
    title: "Estatus de funcionalidad",
  },
  {
    id: "email-04",
    title: "Próximos eventos",
  },
  {
    id: "email-05",
    title: "Participa en la encuesta",
  },
];

const calendar = [
  {
    id: "calendar-01",
    title: "Sesión de seguimiento",
  },
  {
    id: "calendar-02",
    title: "Revisión de propuestas",
  },
  {
    id: "calendar-03",
    title: "Evento para donar juguetes",
  },
  {
    id: "calendar-04",
    title: "Junta semanal de equipo",
  },
  {
    id: "calendar-05",
    title: "Revisión de pendientes con cliente",
  },
];

const people = [
  {
    id: "people-01",
    title: "Juan Perez",
  },
  {
    id: "people-02",
    title: "Marcos Rivas",
  },
  {
    id: "people-03",
    title: "Sergio Martinez",
  },
  {
    id: "people-04",
    title: "Laura Jimenez",
  },
  {
    id: "people-05",
    title: "Horario Martinez",
  },
];

function App() {
  const [data, setData] = useState([...people, ...emails, ...calendar]);

  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");

  function handleClick(e) {
    const location = e.target.name;

    switch (location) {
      case "all":
        setData([...people, ...emails, ...calendar]);
        setCurrentOption("all");
        break;

      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;

      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;

      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;
    }
  }

  function handleOnItemSelected(item) {
    setSelection(item);
  }

  return (
    <div className="App">
      <StyledButton name="all" onClick={handleClick}>
        Search in All
      </StyledButton>
      <StyledButton name="emails" onClick={handleClick}>
        Search in Emails
      </StyledButton>
      <StyledButton name="calendar" onClick={handleClick}>
        Search in Calendar
      </StyledButton>
      <StyledButton name="people" onClick={handleClick}>
        Search in People
      </StyledButton>
      {selection ? <div>You selected: {selection.title}</div> : ""}
      <SearchBar items={data} onItemSelected={handleOnItemSelected} />
    </div>
  );
}

export default App;
