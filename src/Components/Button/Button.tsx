import { useContext } from "react";
import LoadingContext from "../../Contexts/LoadingContext";
import { Button } from "./ButtonStyle";

function ButtonComponent(props: any) {
  const { disable }: any = useContext(LoadingContext);
  return (
    <div
      className="button-box"
      onClick={props.function !== "" ? props.function : ""}
    >
      <Button disabled={disable}>{props.textButton}</Button>
    </div>
  );
}

export default ButtonComponent;
