import { useNavigate } from "react-router-dom";
import { HeaderBox } from "./HeaderStyle";

import api from "../../Services/Api";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext, useEffect } from "react";
import { IoLogOut } from "react-icons/io5";
import HideInformationContext from "../../Contexts/HideInformation";
import UserContext from "../../Contexts/UserContext";
import { config } from "../../Services/AuthHeaders";

function HeaderComponent() {
  const HideContext = useContext(HideInformationContext);

  const { user, setUser }: any = useContext(UserContext);

  let navigate = useNavigate();
  const today = new Date(Date.now()).toLocaleDateString("pt-BR");

  useEffect(() => {
    const token = localStorage.getItem("token");
    api
      .get(`/balance`, config(token))
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        navigate("/");
      });
  }, []);

  function LogOut() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      {user === "" ? (
        ""
      ) : (
        <HeaderBox>
          <div className="salutation-box">
            <h1>NG.CASH</h1>
            <h2 className={HideContext?.visibleInfo ? "" : "blur"}>
              Ola,{user === "" ? "" : user.Users[0].username}
            </h2>
          </div>
          <div className="date-box">
            <h2>{today}</h2>
            {HideContext?.visibleInfo ? (
              <AiFillEye
                onClick={() =>
                  HideContext.setVisibleInfo(!HideContext?.visibleInfo)
                }
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() =>
                  HideContext!.setVisibleInfo(!HideContext?.visibleInfo)
                }
              />
            )}
          </div>
          <div className="actions-box">
            <h2 onClick={() => navigate("/menu")}>Menu</h2>
            <h2 onClick={() => LogOut()}>Sair</h2>
          </div>
        </HeaderBox>
      )}
    </>
  );
}

export default HeaderComponent;
