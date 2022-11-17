import { Button } from "./ButtonStyle";

function ButtonComponent(props: any) {
  return (
    <div className="button-box" onClick={() => props.function()}>
      <Button>{props.textButton}</Button>
    </div>
  );
}

export default ButtonComponent;
