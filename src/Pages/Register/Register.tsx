import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { BsFillInfoSquareFill } from "react-icons/bs";

import { Input } from "./RegisterStyle";
import { Main } from "./RegisterStyle";
import { Infos } from "../Login/LoginStyle";
import ButtonComponent from "../../Components/Button/Button";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passworderror, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  let navigate = useNavigate();

  function signUp(event: any) {
    event.preventDefault();
    const body = {
      email,
      password,
      confirmPassword,
    };
    if (
      emailError ||
      passworderror ||
      confirmPasswordError ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Corrija os dados");
      return;
    }
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
          <div className="input-group">
            <Input
              type="email"
              placeholder="E-mail"
              onChange={(e: any) => {
                if (
                  !/\S+@\S+\.\S+/.test(e.target.value) &&
                  e.target.value !== ""
                ) {
                  setEmailError(true);
                } else {
                  setEmailError(false);
                }
                setEmail(e.target.value);
              }}
              value={email}
            />
            {emailError ? (
              <p className="error-message">O dado deve ser um email válido!</p>
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
