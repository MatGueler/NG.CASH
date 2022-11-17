import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Input, Main } from "./TransactionsStyle";
import ButtonComponent from "../../Button/Button";
import HeaderComponent from "../../Header/Header";

function TransactionsPage() {
  let navigate = useNavigate();

  function Transfer(event: any) {
    event.preventDefault();
    console.log("oi");
    return;
  }

  return (
    <div className="container black">
      <HeaderComponent />
      <Main>
        <form onSubmit={Transfer}>
          <h1>Nova transação</h1>
          <Input type="text" placeholder="Para quem quer transferir?" />
          <Input type="text" placeholder="Valor" />
          <ButtonComponent textButton="Transferir" />
        </form>
      </Main>
    </div>
  );
}

export default TransactionsPage;
