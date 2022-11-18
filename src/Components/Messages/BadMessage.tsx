import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { messageInterface } from "../../types/MessageType";
import { MessageBox } from "./MessageStyle";

function BadMessageComponent({ text, setStatus }: messageInterface) {
  const [visible, setVisible] = useState(true);
  setTimeout(() => {
    setVisible(false);
    setStatus("");
  }, 2000);
  return (
    <>
      {visible ? (
        <MessageBox color="red">
          <AiFillCloseCircle />
          <p>{text}</p>
        </MessageBox>
      ) : (
        ""
      )}
    </>
  );
}

export default BadMessageComponent;
