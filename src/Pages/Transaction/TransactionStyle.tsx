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
  margin: 0 20px;
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

  h2 {
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 50px;
  }

  form {
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 30px;

    border: 2px solid #ffffff;
    border-radius: 10px;
  }
`;
