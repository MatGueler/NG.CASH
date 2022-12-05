import styled from "styled-components";

export const HeaderBox = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  background-color: #ffffff;

  * {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    margin: 0 10px;
    font-family: "Saira Stencil One", cursive;
    font-size: 2em;
    color: #000000;
  }

  h2 {
    font-size: 15px;
    margin: 0 10px;
  }

  .date-box {
    width: 30%;

    svg {
      cursor: pointer;
      font-size: 30px;
    }

    h2 {
      font-size: 25px;
      margin: 0 10px;
    }
  }

  .salutation-box {
    width: 30%;
  }

  .actions-box {
    width: 30%;

    h2 {
      cursor: pointer;
    }
  }

  @media (max-width: 750px) {
    .date-box {
      h2 {
        display: none;
      }
    }

    .salutation-box {
      width: max-content;
      justify-content: start;

      h1 {
        display: none;
      }
    }

    .actions-box {
      width: max-content;
    }
  }
`;
