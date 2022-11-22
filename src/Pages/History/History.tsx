import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import api from "../../Services/Api";

import { Legend, Main, Transaction } from "./HistoryStyle";
import HeaderComponent from "../../Components/Header/Header";
import FormDateComponent from "./FormDate/FormDate";
import { config } from "../../Services/AuthHeaders";
import LoadingComponent from "../../Components/Loading/Loading";
import UserContext from "../../Contexts/UserContext";

function HistoryPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { user }: any = useContext(UserContext);

  const [transactions, setTransactions] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }

    api
      .post(
        `/transactions`,
        { startDate, endDate, credited: true, debited: true },
        config(token)
      )
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function PutTransactions({ transaction }: any) {
    const createdAt = transaction.createdAt.split("T")[0];
    const date = new Date(createdAt).toLocaleDateString("pt-BR");
    return (
      <Transaction>
        <h3>{date}</h3>
        <h3>{Number(transaction.value).toFixed(2)}</h3>
        <h3>{transaction.debitedUser}</h3>
        <h3>{transaction.creditedUser}</h3>
      </Transaction>
    );
  }

  return (
    <div className="container black">
      <HeaderComponent />
      {user === "" ? (
        <LoadingComponent />
      ) : (
        <Main>
          <FormDateComponent
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            setTransactions={setTransactions}
          />
          <div className="history-box">
            <Legend>
              <h3>Data</h3>
              <h3>Valor (R$)</h3>
              <h3>Remetente</h3>
              <h3>Destinatário</h3>
            </Legend>
            <div className="transactions-box">
              {transactions.length === 0 ? (
                <p>Sem transações nesse período ou com esse filtro!</p>
              ) : (
                transactions.map((transaction, index) => (
                  <PutTransactions key={index} transaction={transaction} />
                ))
              )}
            </div>
          </div>
        </Main>
      )}
    </div>
  );
}

export default HistoryPage;
