import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [city, setCity] = useState("london");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = "Weather | " + weather?.location?.name ?? "";
  }, [weather]);

  async function loadInfo() {
    console.log(
      `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}`
    );
    const request = await fetch(
      `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
    );
    const json = await request.json();

    setWeather({ ...json });
  }

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!city || city !== "") {
      setWeather(null);
      loadInfo();
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={handleChange} />
        <button>Actualizar</button>
      </form>
      {weather ? (
        <>
          {" "}
          <div>
            <div>{weather?.location?.name}</div>
            <div>{weather?.location?.country}</div>
            <div>
              <img src={`http:${weather.current.condition.icon}`} />
            </div>
            <div>{weather.current.condition.text}</div>
            <div>{weather.current.temp_c}º</div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
