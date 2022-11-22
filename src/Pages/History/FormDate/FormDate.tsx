import ButtonComponent from "../../../Components/Button/Button";
import styled from "styled-components";

import api from "../../../Services/Api";
import { useNavigate } from "react-router-dom";
import { config } from "../../../Services/AuthHeaders";
import { useState } from "react";

export default function FormDateComponent({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setTransactions,
}: any) {
  let navigate = useNavigate();

  const [credited, setCredited] = useState(true);
  const [debited, setDebited] = useState(true);

  function FilterDate(event: any) {
    event.preventDefault();

    if (Date.parse(startDate) > Date.parse(endDate)) {
      return alert("Data inválida");
    }

    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }

    api
      .post(
        `/transactions`,
        { startDate, endDate, credited, debited },
        config(token)
      )
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <FilteForm onSubmit={FilterDate}>
      <div className="input-box">
        <div className="date-group">
          <div className="date-input">
            <p>De:</p>
            <input
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
            ></input>
          </div>
          <div className="date-input">
            <p>Até: </p>
            <input
              type="date"
              onChange={(e) => setEndDate(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="ckeck-group">
          <div className="check-input">
            <p>Destinatário</p>
            <input
              type="checkbox"
              checked={credited}
              onChange={(e) => setCredited(e.target.checked)}
            ></input>
          </div>
          <div className="check-input">
            <p>Remetente</p>
            <input
              type="checkbox"
              checked={debited}
              onChange={(e) => setDebited(e.target.checked)}
            ></input>
          </div>
        </div>
      </div>
      <div className="filter-button">
        <ButtonComponent textButton="Filtrar" />
      </div>
    </FilteForm>
  );
}

export const FilteForm = styled.form`
  width: 80%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px;

  * {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin: 0 20px;
      color: #ffffff;
    }
  }

  .input-box {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .date-group {
    width: 100%;

    margin: 20px 0;

    top: 0;

    box-sizing: border-box;

    input {
      width: 50%;
      height: 35px;

      font-size: 20px;

      cursor: pointer;
    }
  }

  .check-group {
    width: 100%;

    margin: 20px 0;
  }

  .filter-button {
    width: 100%;
    box-sizing: border-box;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    .date-group {
      flex-direction: column;

      input {
        height: 20px;
        margin-bottom: 10px;
      }
    }

    .check-group {
      flex-direction: column;
    }

    .check-input {
      flex-direction: column;
    }

    .input-box {
      width: max-content;
    }
  }
`;
