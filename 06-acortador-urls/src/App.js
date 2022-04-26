import { Routes, Route } from "react-router-dom";
import "./App.css";
import Create from "./pages/create";
import Redirect from "./pages/redirect";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="u/:id" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
