import ButtonComponent from "../../../Components/Button/Button";
import styled from "styled-components";

export default function FormDateComponent({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: any) {
  function FilterDate(event: any) {
    event.preventDefault();

    if (Date.parse(startDate) > Date.parse(endDate)) {
      return alert("Data inválida");
    }
    console.log({
      startDate,
      endDate,
    });
    return;
  }

  return (
    <FilteForm onSubmit={FilterDate}>
      <div className="date-group">
        <p>De: </p>
        <input
          type="date"
          onChange={(e) => setStartDate(e.target.value)}
        ></input>
      </div>
      <div className="date-group">
        <p>Até: </p>
        <input type="date" onChange={(e) => setEndDate(e.target.value)}></input>
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
  }

  input {
    width: 50%;
    height: 35px;

    font-size: 20px;

    cursor: pointer;
  }

  .date-group {
    width: 30%;

    box-sizing: border-box;

    p {
      margin: 0 20px;
      color: #ffffff;
    }
  }

  .filter-button {
    width: 30%;
    box-sizing: border-box;
  }
`;
