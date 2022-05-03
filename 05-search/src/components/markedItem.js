import { useMemo } from "react";
import styled from "styled-components";

const StyledMarker = styled.span`
  background-color: yellow;
  font-weight: bolder;
  border-radius: 2px;
`;

const StyledItem = styled.a`
  color: black;
  display: block;
  padding: 10px;
  text-decoration: none;

  &:hover {
    background-color: #4c91ba;
    color: white;
  }

  &:hover span {
    color: black;
  }
`;

export default function MarkedItem({ item, onClick, query }) {
  const { left, center, right } = useMemo(
    () => getPositions(item, query),
    [item, query]
  );

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

  function handleClick(e) {
    onClick(item);
  }

  return (
    <StyledItem href="#" onClick={handleClick}>
      {left}
      <StyledMarker>{center}</StyledMarker>
      {right}
    </StyledItem>
  );
}
