import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { BsFillInfoSquareFill } from "react-icons/bs";

import { Infos } from "./MenuStyle";
import { Main } from "./MenuStyle";
import ButtonComponent from "../../Button/Button";

function MenuPage() {
  let navigate = useNavigate();

  return (
    <div className="container black">
      <Infos onClick={() => navigate("/sobre")}>
        <BsFillInfoSquareFill />
      </Infos>
      <Main>
        <ButtonComponent textButton="Transação" />
        <ButtonComponent textButton="Solicitar" />
      </Main>
    </div>
  );
}

export default MenuPage;
