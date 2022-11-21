import styled from "styled-components";

export const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  box-sizing: border-box;

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 10em;
    color: #000000;

    margin-bottom: 0.5em;
  }

  img {
    width: 40%;
  }

  ul {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    font-size: 30px;
    text-align: justify;
    color: #000000;

    margin: 20px 0;
  }

  .beneficits {
    width: 100%;
    display: flex;
    justify-content: center;

    ul {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const Button = styled.div`
  width: 50px;
  height: 50px;

  position: fixed;
  top: 30px;
  left: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: black;
  cursor: pointer;

  svg {
    font-size: 30px;
    color: #ffffff;
  }
`;
