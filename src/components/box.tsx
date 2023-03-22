import { ReactNode } from "react";

interface IBox {
  children?: string;
  type?: "target" | "moving";
  projectile?: ReactNode;
  setRef?: any;
  title?: string;
}

const Box = (props: IBox): JSX.Element => {
  return (
    <>
      <div
        ref={props?.setRef}
        id={props.type === "moving" ? "moving" : ""}
        className={`box ${props.type}`}
      >
        {props.title}
      </div>
    </>
  );
};

export default Box;
