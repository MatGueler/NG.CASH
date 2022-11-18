import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { messageInterface } from "../../types/MessageType";
import { MessageBox } from "./MessageStyle";

function CheckMessageComponent({ text, setStatus }: messageInterface) {
  const [visible, setVisible] = useState(true);
  setTimeout(() => {
    setVisible(false);
    setStatus("");
  }, 2000);
  return (
    <>
      {visible ? (
        <MessageBox color="green">
          <BsFillCheckCircleFill />
          <p>{text}</p>
        </MessageBox>
      ) : (
        ""
      )}
    </>
  );
}

export default CheckMessageComponent;
