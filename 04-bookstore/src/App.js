import Index from "./pages/index";
import Create from "./pages/create";
import View from "./pages/view";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Store from "./store/store";

function App() {
  return (
    <Store>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="create" element={<Create />} />
          <Route path="view/:bookId" element={<View />} />
        </Routes>
      </div>
    </Store>
  );
}

export default App;
