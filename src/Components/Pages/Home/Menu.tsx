import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Main } from "./MenuStyle";
import ButtonComponent from "../../Button/Button";
import HeaderComponent from "../../Header/Header";

function MenuPage() {
  let navigate = useNavigate();

  return (
    <div className="container black">
      <HeaderComponent />
      <Main>
        <div className="balance-box">
          <p className="">R$ Balanço</p>
        </div>
        <div className="actions-box">
          <ButtonComponent
            textButton="Transações"
            function={() => navigate("/transações")}
          />
          <ButtonComponent
            textButton="Solicitar"
            function={() => navigate("/transações/nova")}
          />
        </div>
      </Main>
    </div>
  );
}

export default MenuPage;
