import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import api from "../../Services/Api";

import { Main } from "./MenuStyle";
import ButtonComponent from "../../Components/Button/Button";
import HeaderComponent from "../../Components/Header/Header";
import HideInformationContext from "../../Contexts/HideInformation";
import TokenContext from "../../Contexts/UserContext";
import UserContext from "../../Contexts/UserContext";

function MenuPage() {
  let navigate = useNavigate();

  const { user, setUser }: any = useContext(UserContext);

  const HideContext = useContext(HideInformationContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    api
      .get(`/balance`, {
        headers: {
          Authorization: `Authorization ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }, []);

  return (
    <div className="container black">
      <HeaderComponent />
      <Main>
        <div className="balance-box">
          <h2>Meu saldo:</h2>
          <div className="balance-value">
            <p className={HideContext?.visibleInfo ? "" : "blur"}>
              R$ {user.balance}
            </p>
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
