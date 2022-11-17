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

  background-color: #ffffff;

  h2 {
    font-size: 25px;
    margin: 0 10px;
  }

  .date-box {
    width: 30%;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 30px;
    }
  }

  .salutation-box {
    width: 30%;

    display: flex;
    justify-content: center;
  }

  .actions-box {
    width: 30%;

    display: flex;
    justify-content: center;

    h2 {
      font-size: 15px;
      cursor: pointer;
    }
  }
`;
