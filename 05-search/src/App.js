import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/searchbar";

function App() {
  return (
    <div className="App">
      <SearchBar
        items={["casa", "copete", "hamburguesa", "tocino", "microsoft"]}
      />
    </div>
  );
}

export default App;
