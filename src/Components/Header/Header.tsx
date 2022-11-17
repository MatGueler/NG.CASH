import { useNavigate } from "react-router-dom";
import { HeaderBox } from "./HeaderStyle";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

function HeaderComponent() {
  const [visible, setVisible] = useState(true);

  let navigate = useNavigate();
  const today = new Date(Date.now()).toLocaleDateString("pt-BR");

  return (
    <>
      <HeaderBox>
        <div className="salutation-box">
          <h2>Logo</h2>
          {visible ? <h2>Ola, Fulana(o)</h2> : ""}
        </div>
        <div className="date-box">
          <h2>{today}</h2>
          {visible ? (
            <AiFillEye onClick={() => setVisible(!visible)} />
          ) : (
            <AiFillEyeInvisible onClick={() => setVisible(!visible)} />
          )}
        </div>
        <div className="actions-box">
          <h2 onClick={() => navigate("/historic")}>Histórico</h2>
          <h2 onClick={() => navigate("/menu")}>Menu</h2>
          <h2 onClick={() => navigate("/")}>Sair</h2>
        </div>
      </HeaderBox>
    </>
  );
}

export default HeaderComponent;
