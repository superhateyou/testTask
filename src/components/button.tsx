import { PropsWithChildren, ReactNode } from "react";

interface IStartButton {
  handler: () => void;
  disabled: boolean;
  duration?: number;
}

const Button = (props: IStartButton): JSX.Element => {
  const { disabled, handler, duration } = props;

  const clickHandler = () => {
    handler();
  };

  return (
    <button
      className={!disabled ? "diasbled-button" : "active-button"}
      disabled={!disabled}
      type="button"
      onClick={() => clickHandler()}
      style={{ width: "100px" }}
    >
      {disabled ? "Start" : duration}
    </button>
  );
};

export default Button;
