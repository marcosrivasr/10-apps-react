import { useState, useCallback, useMemo } from "react";
export default function SearchBar({ items, onItemSelected }) {
  const [query, setQuery] = useState("mi");

  function getPositions(item, query) {
    const index = item.title.toLowerCase().indexOf(query);
    const left = item.title.slice(0, index);
    const center = item.title.slice(index, index + query.length);
    const right = item.title.slice(index + query.length);

    return {
      left,
      center,
      right,
    };
  }

  function Results({ onItemSelected }) {
    const r = items.filter((q) => {
      return (
        q.title.toLowerCase().indexOf(query) >= 0 &&
        query.length > 0 &&
        query !== ""
      );
    });

    return (
      <div>
        {r.map((res) => (
          <MarkedItem key={res.id} item={res} onClick={onItemSelected} />
        ))}
      </div>
    );
  }

  function MarkedItem({ item, onClick }) {
    const { left, center, right } = getPositions(item, query);

    function handleClick(e) {
      onClick(item);
    }
    return (
      <div onClick={handleClick}>
        {left}
        <span style={{ fontWeight: "bolder" }}>{center}</span>
        {right}
      </div>
    );
  }

  function handleOnChange(e) {
    const value = e.target.value;
    setQuery(value);
  }
  return (
    <div>
      <input type={"text"} onChange={handleOnChange} value={query} />
      <Results onItemSelected={onItemSelected} />
    </div>
  );
}
