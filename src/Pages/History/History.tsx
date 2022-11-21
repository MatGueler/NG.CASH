import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Legend, Main, Transaction } from "./HistoryStyle";
import HeaderComponent from "../../Components/Header/Header";
import FormDateComponent from "./FormDate/FormDate";

function HistoryPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  let navigate = useNavigate();

  return (
    <div className="container black">
      <HeaderComponent />
      <Main>
        <FormDateComponent
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <div className="history-box">
          <Legend>
            <h3>Data</h3>
            <h3>Valor (R$)</h3>
            <h3>Remetente</h3>
            <h3>Destinatário</h3>
          </Legend>
          <Transaction>
            <h3>05/11/2022</h3>
            <h3>200.00aaaaaaaaaaaaaaaaa</h3>
            <h3>Mateus Gueleraaaaaaaaaaaaaaaaa</h3>
            <h3>Uribe Santosaaaaaaaaaaaaa</h3>
          </Transaction>
        </div>
      </Main>
    </div>
  );
}

export default HistoryPage;
