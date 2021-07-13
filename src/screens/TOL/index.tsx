/* eslint-disable no-unused-vars */
import React, { useState, useEffect, ReactNode } from "react";
import { animated, useTransition } from "react-spring";
import { CustomButton } from "../../components/CustomButton";
import { TOLStack } from "../../components/TOLStack";
import { tolData, trials } from "../../data/TOL";
import useWindowDimensions from "../../utils/viewport";
import styles from "./style.module.css";

export interface TOLProps {
  onNext: Function;
}

export const TOL: React.FC<TOLProps> = ({ onNext }) => {
  const [tolIndex, setTolIndex] = useState(0);
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);

  const [trialList, setTrialList] = useState<ReactNode[]>([]);

  function onResultCallback(
    result: boolean,
    dropsUsed: number,
    stackIndex: number
  ) {
    if (stackIndex < trials.length - 1) {
      setTolIndex(stackIndex + 1);
    } else {
      setEnd(true);
    }
  }

  function onStartHandeler() {
    setStart(true);
  }

  useEffect(() => {
    setTrialList([
      ...trials.map((trial, index) => (
        <TOLStack
          key={index.toString()}
          stackList={trial.stack}
          finalList={trial.final}
          maxDrops={trial.maxDrops}
          sendResult={onResultCallback}
          stackIndex={index}
        />
      )),
    ]);
  }, []);

  const startButtonTransition = useTransition(!start, {
    from: { x: 0, y: 0, opacity: 0 },
    enter: { x: 0, y: (-1 * 10) / 5, opacity: 1 },
    leave: { x: 0, y: -200, opacity: 0 },
  });

  const endTransition = useTransition(end, {
    from: { x: 0, y: 0, opacity: 0 },
    enter: { x: 0, y: (-1 * 20) / 5, opacity: 1 },
    leave: { x: 0, y: -200, opacity: 0 },
    delay: 1000,
  });

  const trialTransition = useTransition(start && !end, {
    from: { x: 0, y: 100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -100, opacity: 0 },
  });

  return (
    <div className={styles.tolCont}>
      {startButtonTransition((style, show) =>
        show ? (
          <animated.div style={style}>
            <CustomButton text="START" onClick={onStartHandeler} />
          </animated.div>
        ) : (
          ""
        )
      )}
      {trialTransition((style, show) =>
        show ? (
          <animated.div style={style}>{trialList[tolIndex]}</animated.div>
        ) : (
          ""
        )
      )}
      {endTransition((transition, show) =>
        show ? (
          <animated.div style={transition}>
            <CustomButton
              text={tolData.lastpageText}
              isSecondary
              onClick={onNext}
            />
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};