/* eslint-disable no-unused-vars */
import React, { CSSProperties, useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import styles from "./style.module.css";
import { BalloonBackground } from "../BalloonBackground";
import { CustomButton } from "../CustomButton";
import { BalloonPump } from "../BalloonPump";
import { BalloonAnimated } from "../BalloonAnimated";
import useWindowDimensions from "../../utils/viewport";
import { bartText } from "../../data/bart";

export interface BalloonScreenAnimatedProps {
  style?: CSSProperties;
  trialCounts?: number[];
  balloonColors?: string[];
  initialBalloonDim?: [width: number, height: number];
}

export const BalloonScreenAnimated: React.FC<BalloonScreenAnimatedProps> = ({
  style = {},
  trialCounts = [15],
  balloonColors = [
    ...Array(trialCounts.length).map(() => {
      return "blue";
    }),
  ],
  initialBalloonDim = [
    Math.min(useWindowDimensions().width * 0.08, 120), // width
    Math.min(useWindowDimensions().width * 0.08 * 1.2, 140), // height
  ],
}) => {
  const [start, setStart] = useState(false);
  const [collect, setCollect] = useState(false);
  const [explode, setExplode] = useState(false);
  const [balloonNumberWithFills, setBalloonNumberWithFills] = useState([1, 0]);
  const { width } = useWindowDimensions();
  const [balloonDimensions, setBalloonDimensions] = useState(initialBalloonDim);

  useEffect(() => {
    setTimeout(() => {
      // eslint-disable-next-line no-constant-condition
      if (balloonNumberWithFills[0] > 1) {
        setBalloonDimensions(initialBalloonDim);
        setCollect(false);
        setStart(true);
        setExplode(false);
      }
    }, 1000);
  }, [balloonNumberWithFills[0]]);

  const onStartHandeler = (e: React.MouseEvent) => {
    setStart(!start);
  };

  const pushNextBalloon = () => {
    setBalloonNumberWithFills([balloonNumberWithFills[0] + 1, 0]);
  };

  const handelBalloonCollect = () => {
    setCollect(true);
    if (trialCounts.length > balloonNumberWithFills[0]) {
      pushNextBalloon();
    }
  };
  const handelBalloonFill = () => {
    const increment = Math.min(width * 0.005, 720 * 0.005);
    setBalloonDimensions([
      balloonDimensions[0] + increment,
      balloonDimensions[1] + increment,
    ]);
    setBalloonNumberWithFills([
      balloonNumberWithFills[0],
      balloonNumberWithFills[1] + 1,
    ]);

    if (
      trialCounts[balloonNumberWithFills[0] - 1] === balloonNumberWithFills[1]
    ) {
      setBalloonDimensions([10, 10]);
      setExplode(true);
      setCollect(true);
      if (trialCounts.length > balloonNumberWithFills[0]) {
        pushNextBalloon();
      }
    }
  };

  const startButtonTransition = useTransition(!start, {
    from: { x: 0, y: 0, opacity: 0 },
    enter: { x: 0, y: (-1 * width) / 5, opacity: 1 },
    leave: { x: 0, y: -200, opacity: 0 },
  });

  const tunnelTransition = useTransition(start, {
    from: { x: 0, y: 100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -100, opacity: 0 },
  });

  const balloonTransition = useTransition(!collect && start, {
    from: { x: 0, y: 100, opacity: 0 },
    enter: { x: 0, y: -1 * Math.min(width * 0.1, 60), opacity: 1 },
    leave: explode
      ? { opacity: 0, overflow: "none" }
      : { x: 0, y: -200, opacity: 0 },
    trails: 1000,
    order: ["leave", "enter", "update"],
  });

  const controlTransition = useTransition(start, {
    from: { x: 0, y: 100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -100, opacity: 0 },
  });

  return (
    <div className={styles.page} style={{ ...style }}>
      <div className={styles.container}>
        <div className={styles.background}>
          <BalloonBackground />
        </div>
        {startButtonTransition((transition, show) =>
          show ? (
            <animated.div style={transition} className={styles.tunnel}>
              <CustomButton text="START" onClick={onStartHandeler} />
            </animated.div>
          ) : (
            ""
          )
        )}
        {tunnelTransition((transition, show) =>
          show ? (
            <animated.div style={transition} className={styles.tunnel}>
              <BalloonPump />
            </animated.div>
          ) : (
            ""
          )
        )}
        {balloonTransition((transition, show) =>
          show ? (
            <animated.div style={transition} className={styles.tunnel}>
              <BalloonAnimated
                color={balloonColors[balloonNumberWithFills[0] - 1]}
                height={balloonDimensions[1]}
                stringColor="rgba(0,0,0,0.2)"
                width={balloonDimensions[0]}
              />
            </animated.div>
          ) : (
            ""
          )
        )}
      </div>
      {controlTransition((transition, show) =>
        show ? (
          <animated.div style={transition} className={styles.controlButtons}>
            <CustomButton
              text={bartText.pump}
              onClick={() => {
                handelBalloonFill();
              }}
              disabled={collect}
            />
            <CustomButton
              text={bartText.collect}
              onClick={() => {
                handelBalloonCollect();
              }}
              disabled={collect}
            />
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};