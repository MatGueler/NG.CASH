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
  width: 100%;
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

  .balance-box {
    width: 20em;
    height: 20em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 0 80px 0;

    border-radius: 50%;

    background-color: #ffffff;

    * {
      color: #000000;
    }
  }

  .balance-value {
    max-width: 75%;
    height: 60px;

    display: flex;
    align-items: center;

    padding: 10px;

    white-space: nowrap;

    border: 2px solid #000000;
    border-radius: 5px;

    overflow-x: scroll;

    box-shadow: 0px 2px 5px black;
    background-color: #e6e6e6;

    p {
      font-size: 35px;
      box-sizing: border-box;
    }
  }

  .actions-box {
    width: 60%;
    display: flex;
    box-sizing: border-box;
  }

  @media (max-width: 750px) {
    .actions-box {
      width: 100%;
    }
  }
`;
