import { Button } from "./ButtonStyle";

function ButtonComponent({ textButton }: { textButton: string }) {
  return (
    <div className="button-box">
      <Button>{textButton}</Button>
    </div>
  );
}

export default ButtonComponent;
