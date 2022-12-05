import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { Main } from "./MenuStyle";
import ButtonComponent from "../../Components/Button/Button";
import HeaderComponent from "../../Components/Header/Header";
import HideInformationContext from "../../Contexts/HideInformation";
import UserContext from "../../Contexts/UserContext";
import LoadingComponent from "../../Components/Loading/Loading";

function MenuPage() {
  let navigate = useNavigate();

  const { user }: any = useContext(UserContext);

  const HideContext = useContext(HideInformationContext);

  return (
    <div className="container black">
      <HeaderComponent />
      {user === "" ? (
        <LoadingComponent />
      ) : (
        <Main>
          <div className="balance-box">
            <h2>Meu saldo:</h2>
            <div className="balance-value">
              <p className={HideContext?.visibleInfo ? "" : "blur"}>
                R$ {user === "" ? "" : Number(user.balance).toFixed(2)}
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
      )}
    </div>
  );
}

export default MenuPage;
