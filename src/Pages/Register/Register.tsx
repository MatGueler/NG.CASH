import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import api from "../../Services/Api";

import { BsFillInfoSquareFill } from "react-icons/bs";

import { Input } from "./RegisterStyle";
import { Main } from "./RegisterStyle";
import { Infos } from "../Login/LoginStyle";
import ButtonComponent from "../../Components/Button/Button";
import LoadingComponent from "../../Components/Loading/Loading";
import LoadingContext from "../../Contexts/LoadingContext";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { loading, setLoading, disable, setDisable }: any =
    useContext(LoadingContext);

  const [passworderror, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

  let navigate = useNavigate();

  function signUp(event: any) {
    event.preventDefault();

    if (
      usernameError ||
      passworderror ||
      confirmPasswordError ||
      username === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Dados inválidos");
      return;
    }
    setLoading(true);
    setDisable(true);

    api
      .post(`/sign-up`, { username, password, confirmPassword })
      .then((response) => {
        setDisable(false);
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setDisable(false);
        setLoading(false);
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
        <h2>Faça seu cadastro!</h2>
        <form onSubmit={signUp}>
          {loading ? <LoadingComponent /> : ""}
          <div className="input-group">
            <Input
              type="text"
              placeholder="Username"
              onChange={(e: any) => {
                if (e.target.value.length < 3 && e.target.value !== "") {
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
              <p className="error-message">
                Username deve possuir pelo menos 3 caracteres
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="input-group">
            <Input
              type="password"
              placeholder="Senha"
              onChange={(e: any) => {
                if (e.target.value.length < 6 && e.target.value !== "") {
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
              <p className="error-message">
                A senha deve possuir no mínimo 6 caracteres!
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="input-group">
            <Input
              type="password"
              placeholder="Confirme sua senha"
              onChange={(e: any) => {
                if (e.target.value !== password) {
                  setConfirmPasswordError(true);
                } else {
                  setConfirmPasswordError(false);
                }
                setConfirmPassword(e.target.value);
              }}
              value={confirmPassword}
              disabled={disable}
            />
            {confirmPasswordError ? (
              <p className="error-message">As senhas devem ser iguais</p>
            ) : (
              ""
            )}
          </div>

          <ButtonComponent textButton="Cadastrar" />
        </form>
        <p className="form-link" onClick={() => navigate("/")}>
          Já tem uma conta? Faça seu login!
        </p>
      </Main>
    </div>
  );
}

export default RegisterPage;
