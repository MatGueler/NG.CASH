import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  box-sizing: border-box;

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 8em;
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
      justify-content: space-between;
    }
  }

  @media (max-width: 950px) {
    h1 {
      font-size: 5em;
    }

    li {
      font-size: 20px;

      margin: 20px 0;
    }
  }

  @media (max-width: 750px) {
    ul {
      width: 80%;
    }
    img {
      display: none;
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
