import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useReducerApp from "../store/store";

export default function Redirect() {
  const [state, dispatch] = useReducerApp();
  const params = useParams();

  useEffect(() => {
    dispatch({ type: "LOAD" });
    const id = params.id;
    setTimeout(() => {
      console.log("asdasd");
      const item = state.find((item) => item.shortUrl === id);
      if (item) {
        console.log(item);
        dispatch({ type: "ADD_VIEW", data: id });
        window.location.href = item.url;
      }
    }, 1000);
  }, []);

  useEffect(() => {}, [state]);

  return <div>Redirect {params.id}</div>;
}
