import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import TiktokVideo from "./tiktokVideo";
import "./tiktok.css";

export default function Tiktok2() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(2);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const response = await fetch("http://localhost:4000/page/1");

      const json = await response.json();

      setItems(json);
    }
  }, []);

  function nextVideo() {
    setIndex(index + 1);
    //ref.current.style.marginTop = `${-1 * index * 100}px`;
  }

  return (
    <div>
      <button onClick={() => nextVideo()}>Abajo</button>
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
