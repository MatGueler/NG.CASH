import styled from "styled-components";

export const Infos = styled.div`
  position: fixed;
  right: 30px;
  top: 30px;
  cursor: pointer;

  svg {
    font-size: 3em;
    color: #ffffff;
  }
`;

export const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  box-sizing: border-box;

  padding-top: 100px;

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 10em;
    color: #ffffff;
  }

  h2 {
    font-size: 15px;
    color: #ffffff;

    margin: 20px;
  }
`;
