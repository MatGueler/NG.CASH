import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import api from "../../Services/Api";

import { Input, Main } from "./TransactionStyle";
import ButtonComponent from "../../Components/Button/Button";
import HeaderComponent from "../../Components/Header/Header";
import CheckMessageComponent from "../../Components/Messages/CheckMessage";
import BadMessageComponent from "../../Components/Messages/BadMessage";
import HideInformationContext from "../../../src/Contexts/HideInformation";
import { config } from "../../Services/AuthHeaders";
import UserContext from "../../Contexts/UserContext";

function TransactionsPage() {
  const [transferAccount, setTransferAccount] = useState("");
  const [value, setValue] = useState("");
  const [status, setStatus]: any = useState("");

  const HideContext = useContext(HideInformationContext);

  const { user }: any = useContext(UserContext);

  let navigate = useNavigate();

  function Transfer(event: any) {
    event.preventDefault();
    console.log({
      transferAccount,
      value,
    });
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }

    api
      .post(
        `/new/transaction`,
        { username: transferAccount, value },
        config(token)
      )
      .then((response) => {
        console.log(response);
        setStatus(true);
      })
      .catch((err) => {
        console.log(err);
        setStatus(false);
      });
  }

  return (
    <div className="container black">
      <HeaderComponent />
      {status !== "" && status !== false ? (
        <CheckMessageComponent
          text="Transferência realizada!"
          setStatus={setStatus}
        />
      ) : (
        ""
      )}
      {status !== "" && status !== true ? (
        <BadMessageComponent
          text="Transferência não realizada!"
          setStatus={setStatus}
        />
      ) : (
        ""
      )}
      <Main>
        <h2 className={HideContext?.visibleInfo ? "" : "blur"}>
          Saldo: R$ {user === "" ? "" : Number(user.balance).toFixed(2)}
        </h2>
        <form onSubmit={Transfer}>
          <h1>Nova transação</h1>
          <Input
            type="text"
            placeholder="Para quem quer transferir?"
            onChange={(e) => setTransferAccount(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Valor"
            onChange={(e) => setValue(e.target.value)}
          />
          <ButtonComponent textButton="Transferir" />
        </form>
      </Main>
    </div>
  );
}

export default TransactionsPage;
