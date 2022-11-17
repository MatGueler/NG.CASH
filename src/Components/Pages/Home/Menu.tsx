import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { BsFillInfoSquareFill } from "react-icons/bs";

import { Infos } from "./MenuStyle";
import { Main } from "./MenuStyle";
import ButtonComponent from "../../Button/Button";
import HeaderComponent from "../../Header/Header";

function MenuPage() {
  let navigate = useNavigate();

  return (
    <div className="container black">
      <HeaderComponent />
      <Infos onClick={() => navigate("/sobre")}>
        <BsFillInfoSquareFill />
      </Infos>
      <Main>
        <div className="actions-box">
          <ButtonComponent textButton="Transação" />
          <ButtonComponent textButton="Solicitar" />
        </div>
      </Main>
    </div>
  );
}

export default MenuPage;
