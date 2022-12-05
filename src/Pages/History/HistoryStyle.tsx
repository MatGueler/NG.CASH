import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 60px;

  border-radius: 5px;
  border: 0;

  padding: 0 10px;
  margin-bottom: 20px;

  font-size: 20px;
  font-family: "Raleway", sans-serif;
  color: #000000;
  box-sizing: border-box;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 20px;
  box-sizing: border-box;

  padding-top: 100px;

  h1 {
    width: 100%;
    text-align: center;

    font-size: 30px;
    color: #ffffff;
    font-weight: bold;

    margin-bottom: 50px;
  }

  .history-box {
    width: 80%;
    height: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    padding-top: 60px;

    border: 1px solid #ffffff;
    border-radius: 10px;

    p {
      height: 100%;
      max-width: 60%;

      display: flex;
      align-items: center;

      color: #ffffff;

      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
  }

  .transactions-box {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow-y: scroll;
  }

  @media (max-width: 850px) {
    .transactions-box {
      min-height: 120px;
    }
  }
`;

export const Legend = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  top: 0;

  border-radius: 5px 5px 0 0;

  background-color: #ffffff;

  h3 {
    width: 25%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 18px;

    overflow-x: scroll;

    padding: 5px;
    box-sizing: border-box;

    word-break: break-all;
  }
`;

export const Transaction = styled.div`
  width: 100%;
  min-height: 60px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  color: #ffffff;

  border-bottom: 1px solid #ffffff;
  border-radius: 5px 5px 0 0;

  :hover {
    background-color: #616161;
  }

  h3 {
    width: 25%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 15px;

    padding: 0 10px;

    word-break: break-all;
  }
`;
