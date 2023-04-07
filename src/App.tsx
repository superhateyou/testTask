import { useEffect, useRef, useState } from "react";
import "./App.css";
import Box from "./components/box";
import Button from "./components/button";
import Circle from "./components/circle";
import Field from "./components/field";

const App = (): JSX.Element => {
  console.log("1");

  const defaultDuration = 3;

  const [duration, setDuretion] = useState<number>(defaultDuration);
  const [circleStatus, setCircleStatus] = useState<boolean>(false);
  const [position, setPosition] = useState<number | undefined>(0);

  useEffect(() => {
    let durationCopy = duration;

    const interval = setInterval(() => {
      if (circleStatus) {
        setDuretion((prev) => (prev >= 1 ? prev - 1 : 0));
        durationCopy = durationCopy >= 1 ? durationCopy - 1 : 0;
      }

      if (durationCopy === 0) {
        setCircleStatus(false);
        setDuretion(defaultDuration);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      if (duration === 0) {
        setCircleStatus(false);
        setDuretion(defaultDuration);
      }
      clearInterval(interval);
    };
  }, [circleStatus]);

  const getPosition = useRef();

  const onClickStart = () => {
    const boxObject = getPosition?.current;

    if (boxObject) {
      const transformedBoxCopy = boxObject as HTMLElement;
      if (transformedBoxCopy.offsetTop) {
        setPosition(transformedBoxCopy.offsetTop);
      }
    }
    setCircleStatus(true);
  };

  return (
    <div className="App">
      <div className={`wrapper`}>
        <Field>
          <Box type="moving" setRef={getPosition} title="1" />

          {circleStatus ? (
            <Circle status={circleStatus} startY={position} />
          ) : null}

          <Box type="target" title="2" />
        </Field>
        <Button
          handler={onClickStart}
          disabled={!circleStatus}
          duration={duration}
        />
      </div>
    </div>
  );
};

export default App;
