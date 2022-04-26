import { useCallback, useEffect, useReducer, useState } from "react";

import useReducerApp from "../store/store";

export default function Create() {
  const [state, dispatch] = useReducerApp();
  const [url, setUrl] = useState("");

  useEffect(() => {
    dispatch({ type: "LOAD" });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: "ADD", data: url });
  }

  function handleOnChange(e) {
    const value = e.target.value;
    setUrl(value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleOnChange} value={url} />
        <button type="submit">Submit</button>
      </form>

      <div>
        {state?.map((item) => (
          <div key={item.url}>
            {item.url} {item.shortUrl} {item.views.toString()}
          </div>
        ))}
      </div>
    </div>
  );
}
