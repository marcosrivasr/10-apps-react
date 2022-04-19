import { useState, useCallback, useMemo } from "react";
export default function SearchBar({ items }) {
  const [query, setQuery] = useState("mi");
  const [value, setValue] = useState(0);

  const queryPositions = useMemo(
    () => getPositions(value, query),
    [value, query]
  );

  function getPositions(item, query) {
    console.log(query);
    const index = item.toLowerCase().indexOf(query);
    const left = item.slice(0, index);
    const center = item.slice(index, index + query.length);
    const right = item.slice(index + query.length);

    return {
      left,
      center,
      right,
    };
  }

  const Results = useCallback(() => {
    console.log("query", query);
    const r = items.filter((q) => {
      return (
        q.toLowerCase().indexOf(query) >= 0 && query.length > 0 && query !== ""
      );
    });

    return (
      <div>
        {r.map((res) => (
          <MarkedItem item={res} />
        ))}
      </div>
    );
  }, [items, query]);

  function MarkedItem({ item }) {
    const { left, center, right } = queryPositions(item, query);
    return (
      <div>
        {left}
        <span style={{ fontWeight: "bolder" }}>{center}</span>
        {right}
      </div>
    );
  }

  /* const Results = () => {
    console.log("query", query);
    const r = items.filter((item) => {
      return (
        item.toLowerCase().indexOf(query) > 0 &&
        query.length > 0 &&
        query !== ""
      );
    });

    return (
      <div>
        {r.map((i) => (
          <div key={i}>{i}</div>
        ))}
      </div>
    );
  }; */

  function handleOnChange(e) {
    const value = e.target.value;
    setQuery(value);
  }

  function handleClick() {
    setValue(value + 1);
  }
  return (
    <div>
      <input type={"text"} onChange={handleOnChange} value={query} />
      <Results />

      <button onClick={handleClick}>Click {value}</button>
    </div>
  );
}
