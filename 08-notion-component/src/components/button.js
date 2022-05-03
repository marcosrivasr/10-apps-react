import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #1976d2;
  color: #1976d2;
  margin: 0 1em;
  padding: 5px 12px;
  cursor: pointer;

  ${(props) =>
    props.inverted &&
    css`
      background: #1976d2;
      color: white;
    `};

  ${(props) =>
    props.menu &&
    css`
      position: absolute;
      left: -70px;
    `};

  &:hover {
    background-color: #1976d2;
    color: white;

    ${(props) =>
      props.inverted &&
      css`
        background: white;
        color: #1976d2;
      `};
  }
`;

export default Button;
