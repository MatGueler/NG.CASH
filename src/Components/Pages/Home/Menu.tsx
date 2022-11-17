import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { Main } from "./MenuStyle";
import ButtonComponent from "../../Button/Button";
import HeaderComponent from "../../Header/Header";
import HideInformationContext from "../../../Contexts/HideInformation";

function MenuPage() {
  let navigate = useNavigate();

  const HideContext = useContext(HideInformationContext);

  return (
    <div className="container black">
      <HeaderComponent />
      <Main>
        <div className="balance-box">
          <h2>Meu saldo:</h2>
          <div className="balance-value">
            <p className={HideContext?.visibleInfo ? "" : "blur"}>R$ 4500000</p>
          </div>
        </div>
        <div className="actions-box">
          <ButtonComponent
            textButton="Transações"
            function={() => navigate("/transacoes")}
          />
          <ButtonComponent
            textButton="Solicitar"
            function={() => navigate("/transacoes/nova")}
          />
        </div>
      </Main>
    </div>
  );
}

export default MenuPage;
