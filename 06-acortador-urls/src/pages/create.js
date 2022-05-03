import { useCallback, useEffect, useReducer, useState } from "react";
import CreateForm from "../components/createForm";
import Item from "../components/item";
import ItemsContainer from "../components/itemsContainer";
import MainContainer from "../components/mainContainer";

import useReducerApp from "../store/store";

export default function Create() {
  const [state, dispatch] = useReducerApp();
  const [url, setUrl] = useState("");

  console.log("state", state);
  useEffect(() => {
    dispatch({ type: "LOAD" });
  }, []);

  return (
    <MainContainer>
      <CreateForm dispatch={dispatch} />
      <ItemsContainer>
        {state?.items.map((item) => (
          <Item key={crypto.randomUUID()} item={item} />
        ))}
      </ItemsContainer>
    </MainContainer>
  );
}
