import { useNavigate } from "react-router-dom";
import { HeaderBox } from "./HeaderStyle";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import { IoLogOut } from "react-icons/io5";
import HideInformationContext from "../../Contexts/HideInformation";

function HeaderComponent() {
  const HideContext = useContext(HideInformationContext);

  let navigate = useNavigate();
  const today = new Date(Date.now()).toLocaleDateString("pt-BR");

  function LogOut() {
    navigate("/");
  }

  return (
    <>
      <HeaderBox>
        <div className="salutation-box">
          <h1>NG.CASH</h1>
          <h2 className={HideContext?.visibleInfo ? "" : "blur"}>
            Ola, Fulana(o)
          </h2>
        </div>
        <div className="date-box">
          <h2>{today}</h2>
          {HideContext?.visibleInfo ? (
            <AiFillEye
              onClick={() =>
                HideContext.setVisibleInfo(!HideContext?.visibleInfo)
              }
            />
          ) : (
            <AiFillEyeInvisible
              onClick={() =>
                HideContext!.setVisibleInfo(!HideContext?.visibleInfo)
              }
            />
          )}
        </div>
        <div className="actions-box">
          <h2 onClick={() => navigate("/menu")}>Menu</h2>
          <h2 onClick={() => LogOut()}>Sair</h2>
        </div>
      </HeaderBox>
    </>
  );
}

export default HeaderComponent;
