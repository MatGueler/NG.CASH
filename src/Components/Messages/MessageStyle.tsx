import styled from "styled-components";

export const MessageBox = styled.div`
  max-width: 250px;
  height: 60px;

  position: fixed;
  top: 200px;
  right: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  background-color: #ffffff;

  animation-duration: 0.2s;
  animation-name: checkMessage;

  p {
    width: 70%;
    font-size: 18px;
    text-align: center;
  }

  svg {
    margin: 10px;

    font-size: 30px;
    color: ${(props) => props.color};

    box-sizing: border-box;
  }

  @keyframes checkMessage {
    from {
      right: -250px;
    }

    to {
      right: 30px;
    }
  }
`;
