import React, { useEffect, useState, useMemo } from "react";
import TiktokVideo from "./tiktokVideo";
import UseFetch from "./useFetch";
import UseItems from "./useItems";

import "./tiktok.css";

let keyPressed = false;
export default function Tiktok() {
  const [count, setCount] = useState(0);
  const [url, setUrl] = useState("");
  const [response, data, isLoading] = UseFetch(url, "json");
  const [items] = UseItems(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setUrl("http://localhost:4000/page/" + count);
    if (index !== 0) {
      setIndex(index + 1);
    }
  }, [count]);

  function nextVideo() {
    if (index + 2 === items.length) {
      setCount(count + 1);
    } else {
      setIndex(index + 1);
    }
  }
  function prevVideo() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div>
      <div>
        {isLoading ? " Loading more..." : ""}
        {index}
        {index * 5 + 5}
      </div>
      <button onClick={() => setCount(count + 1)}>More {index}</button>
      <button onClick={() => nextVideo()} disabled={isLoading}>
        Abajo
      </button>
      <button onClick={() => prevVideo()}>Arriba</button>
      <div className="tiktoksContainerView">
        <div
          className="tiktoksContainer"
          style={{ transform: `translateY(${-1 * index * 960 + "px"})` }}
        >
          <Videos items={items} />
        </div>
      </div>
    </div>
  );
}

const Videos = React.memo(({ items }) => {
  console.log("hOLA");
  return (
    <>
      {items?.map((item) => (
        <TiktokVideo key={item.id} item={item} />
      ))}
    </>
  );
});
