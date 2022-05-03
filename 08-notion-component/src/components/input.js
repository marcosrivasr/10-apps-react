import styled, { css } from "styled-components";

const Input = styled.input`
  border: none;
  padding: 5px 10px;
  box-sizing: border-box;
  outline: none;

  ${(props) =>
    props.border &&
    css`
      border-left: solid 2px #ccc;
    `};

  ${(props) =>
    props.fullWith &&
    css`
      width: 100%;
    `};

  ${(props) =>
    props.background &&
    css`
      border: solid 1px #1976d2;
    `};

  &:focus {
    ${(props) =>
      props.border &&
      css`
        border-left: solid 2px #1976d2;
      `};
  }
`;

export default Input;
