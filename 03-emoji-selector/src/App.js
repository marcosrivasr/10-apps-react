import EmojiPicker from "./components/emojiPicker/emojiPicker";
import "./App.css";
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <input ref={inputRef} />

        <EmojiPicker ref={inputRef} />
      </header>
    </div>
  );
}

export default App;
