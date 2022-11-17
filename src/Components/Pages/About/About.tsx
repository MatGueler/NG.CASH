import { useNavigate } from "react-router-dom";
import { Button, Main } from "./AboutStyle";

import { IoReturnDownBackOutline } from "react-icons/io5";

function AboutPage() {
  let navigate = useNavigate();

  return (
    <>
      <div className="container">
        <Button className="back-button" onClick={() => navigate("/")}>
          <IoReturnDownBackOutline />
        </Button>
        <Main>
          <h1>Ng.Ca$h</h1>
          <ul>
            <li>Somos a carteira digital da Nova Geração.</li>
            <li>
              Viemos te ajudar a construir a sua independência financeira.
            </li>
            <li>
              Vivemos o novo, transformando o futuro. Afinal, depois do ponto,
              vem um novo começo.
            </li>
          </ul>
        </Main>
      </div>

      <div className="container">
        <Main>
          <div className="beneficits">
            <img src="https://ng.cash/_nuxt/img/ngcard.ced5acb.svg" alt="" />
            <ul>
              <h1>Benefícios</h1>
              <li>Conta grátis</li>
              <li>Cartão físico grátis</li>
              <li>Cartão virtual grátis</li>
              <li>Mesada programada</li>
            </ul>
          </div>
        </Main>
      </div>
    </>
  );
}

export default AboutPage;
