import { memo } from "react";

interface ICircle {
  status?: boolean;
  startY?: number;
}

const Circle = (props: ICircle): JSX.Element | null => {
  const { startY, status } = props;

  if (status && startY) {
    return (
      <div
        className="circle"
        id="circle"
        style={{
          top: startY + "px",
        }}
      />
    );
  } else return null;
};

export default memo(Circle);
