import { useNavigate } from "react-router-dom";
import { useState } from "react";

import api from "../../Services/Api";

import { BsFillInfoSquareFill } from "react-icons/bs";

import { Infos, Input } from "./LoginStyle";
import { Main } from "./LoginStyle";
import ButtonComponent from "../../Components/Button/Button";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [passworderror, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

  let navigate = useNavigate();

  async function signUp(event: any) {
    event.preventDefault();
    if (password.length < 6) {
      setPasswordError(true);
    }
    api
      .post(`/sign-in`, { username, password })
      .then((response) => {
        localStorage.setItem("token", response.data);
        navigate("/menu");
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }

  return (
    <div className="container black">
      <Infos onClick={() => navigate("/sobre")}>
        <BsFillInfoSquareFill />
      </Infos>
      <Main>
        <h1>Ng.Ca$h</h1>
        <h2>Faça seu login!</h2>
        <form onSubmit={signUp}>
          <div className="input-group">
            <Input
              type="text"
              placeholder="Username"
              onChange={(e: any) => {
                if (e.target.value.length < 3) {
                  setUsernameError(true);
                } else {
                  setUsernameError(false);
                }
                setUsername(e.target.value);
              }}
              value={username}
            />
            {usernameError ? (
              <p className="error-message">username inválido!</p>
            ) : (
              ""
            )}
          </div>
          <div className="input-group">
            <Input
              type="password"
              placeholder="Senha"
              onChange={(e: any) => {
                if (e.target.value.length < 6) {
                  setPasswordError(true);
                } else {
                  setPasswordError(false);
                }
                setPassword(e.target.value);
              }}
              value={password}
            />
            {passworderror ? (
              <>
                <p className="error-message">
                  A senha deve possuir no mínimo 6 caracteres!
                </p>
                <p className="error-message">
                  Deve haver pelo menos um número!
                </p>
                <p className="error-message">
                  Deve haver pelo menos uma letra maiúscula!
                </p>
              </>
            ) : (
              ""
            )}
          </div>
          <ButtonComponent textButton="Entrar" />
        </form>
        <p className="form-link" onClick={() => navigate("/cadastro")}>
          Primeira vez? Cadastre-se!
        </p>
      </Main>
    </div>
  );
}

export default LoginPage;
