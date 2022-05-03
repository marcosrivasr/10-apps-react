import { useEffect, useMemo, useState } from "react";
import MarkedItem from "./markedItem";

import styled from "styled-components";

const ResultsContainer = styled.div`
  position: absolute;
  width: 400px;
  background: white;
  border: solid 1px #222;
  border-top: solid 1px transparent;
  margin-top: -3px;
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
`;

export default function Results({
  items,
  onItemSelected,
  query,
  onResultsCalculated,
}) {
  const [results, setResults] = useState([]);
  const filteredItems = useMemo(() => findMatch(items, query), [items, query]);

  useEffect(() => {
    onResultsCalculated(results);
  }, [results]);

  function findMatch(items, query) {
    const res = items.filter((q) => {
      return (
        q.title.toLowerCase().indexOf(query) >= 0 &&
        query.length > 0 &&
        query !== ""
      );
    });
    setResults(res);

    return res;
  }
  return (
    <ResultsContainer>
      {query !== ""
        ? filteredItems.map((item) => (
            <MarkedItem
              key={item.id}
              item={item}
              query={query}
              onClick={onItemSelected}
            />
          ))
        : ""}
    </ResultsContainer>
  );
}
