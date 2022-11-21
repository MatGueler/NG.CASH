import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import api from "../../Services/Api";

import { Input, Main } from "./TransactionStyle";
import ButtonComponent from "../../Components/Button/Button";
import HeaderComponent from "../../Components/Header/Header";
import CheckMessageComponent from "../../Components/Messages/CheckMessage";
import BadMessageComponent from "../../Components/Messages/BadMessage";
import HideInformationContext from "../../../src/Contexts/HideInformation";
import { config } from "../../Services/AuthHeaders";

function TransactionsPage() {
  const [transferAccount, setTransferAccount] = useState("");
  const [value, setValue] = useState("");
  const [status, setStatus]: any = useState("");

  const HideContext = useContext(HideInformationContext);

  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
    console.log("oi");

    api
      .get(`/transactions`, config(token))
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function Transfer(event: any) {
    event.preventDefault();
    console.log({
      transferAccount,
      value,
    });
    setStatus(true);
    return;
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
          Saldo: R$ 5000
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
