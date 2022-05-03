import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/loader";
import useReducerApp from "../store/store";

export default function Redirect() {
  const [state, dispatch] = useReducerApp();
  const [item, setItem] = useState(null);
  const params = useParams();

  useEffect(() => {
    const data = localStorage.getItem("urls") ?? "[]";
    const items = JSON.parse(data);
    const id = params.id;
    const item = items.find((item) => item.shortUrl === id);

    if (item) {
      dispatch({ type: "LOAD" });
      dispatch({ type: "ADD_VIEW", data: id });
      setItem(item);
      setTimeout(() => {
        window.location.href = item.url;
      }, 3000);
    } else {
      setItem(undefined);
    }
  }, []);

  useEffect(() => {}, [state]);

  return <Loader item={item} url={params.id} />;
}
