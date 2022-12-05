import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import api from "../../Services/Api";

import { BsFillInfoSquareFill } from "react-icons/bs";

import { Infos, Input } from "./LoginStyle";
import { Main } from "./LoginStyle";
import ButtonComponent from "../../Components/Button/Button";
import LoadingContext from "../../Contexts/LoadingContext";
import LoadingComponent from "../../Components/Loading/Loading";
import BadMessageComponent from "../../Components/Messages/BadMessage";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, setLoading, disable, setDisable }: any =
    useContext(LoadingContext);

  const [passworderror, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [status, setStatus]: any = useState("");

  let navigate = useNavigate();

  async function signUp(event: any) {
    event.preventDefault();
    if (password.length < 8) {
      setPasswordError(true);
    }
    setDisable(true);
    setLoading(true);
    api
      .post(`/sign-in`, { username, password })
      .then((response) => {
        localStorage.setItem("token", response.data);
        setLoading(false);
        setDisable(false);
        navigate("/menu");
      })
      .catch((err) => {
        setStatus(false);
        setLoading(false);
        setDisable(false);
        console.log(err);
      });
  }

  return (
    <div className="container black">
      <Infos onClick={() => navigate("/sobre")}>
        <BsFillInfoSquareFill />
      </Infos>
      {status !== "" && status !== true ? (
        <BadMessageComponent
          text="Username ou senha incorretos!"
          setStatus={setStatus}
        />
      ) : (
        ""
      )}
      {loading ? <LoadingComponent /> : ""}
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
              disabled={disable}
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
                if (e.target.value.length < 8) {
                  setPasswordError(true);
                } else {
                  setPasswordError(false);
                }
                setPassword(e.target.value);
              }}
              value={password}
              disabled={disable}
            />
            {passworderror ? (
              <>
                <p className="error-message">
                  A senha deve possuir no mínimo 8 caracteres!
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
