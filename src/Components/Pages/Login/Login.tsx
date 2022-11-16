import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Input } from "./LoginStyle";
import { Button } from "./LoginStyle";
import { Main } from "./LoginStyle";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passworderror, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  let navigate = useNavigate();

  function signUp(event: any) {
    event.preventDefault();
    const body = {
      email,
      password,
    };
    if (password.length < 6) {
      setPasswordError(true);
    }
  }

  return (
    <div className="container black">
      <Main>
        <h1>Ng.Ca$h</h1>
        <h2>Faça seu login!</h2>
        <form onSubmit={signUp}>
          <div className="input-group">
            <Input
              type="email"
              placeholder="E-mail"
              onChange={(e: any) => {
                if (!/\S+@\S+\.\S+/.test(e.target.value)) {
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
              <p className="error-message">
                A senha deve possuir no mínimo 6 caracteres!
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="button-box">
            <Button>Entrar</Button>
          </div>
        </form>
        <h2 onClick={() => navigate("/cadastro")}>
          Primeira vez? Cadastre-se!
        </h2>
      </Main>
    </div>
  );
}

export default LoginPage;
