import { ReactNode } from "react";

interface IField {
  children?: ReactNode;
}

const Field = (props: IField): JSX.Element => {
  const { children } = props;

  return <div className="container">{children}</div>;
};

export default Field;
