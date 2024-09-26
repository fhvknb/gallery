"use client";

import { shuffleArray, degreeToRadian } from "@/utils";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

import "./index.css";

const COLORS = [
  "#eccc68",
  "#ff7f50",
  "#ff6b81",
  "#7bed9f",
  "#5352ed",
  "#a4b0be",
  "#dfe4ea",
  "#2ed573",
  "#1e90ff",
  "#3742fa",
  "#ff4757",
  "#ff6348",
  "#ffa502",
  "#eccc68",
  "#ff7f50",
  "#ff6b81",
  "#7bed9f",
  "#5352ed",
  "#a4b0be",
  "#dfe4ea",
  "#2ed573",
  "#1e90ff",
  "#3742fa",
  "#ff4757",
  "#ff6348",
  "#ffa502",
];

// const shuffleColors = shuffleArray(COLORS);

type Props = {
  choices: any[];
};

const _r = [];
let _count = 0;

const WheelChoice = function (props: Props) {
  const { choices } = props;

  const [centerLine, showCenterLine] = useState<boolean>(false);
  const [spinning, setSpinning] = useState<boolean>(false);

  const wheelRef = useRef<HTMLDivElement | null>(null);
  const nextDegeree = useRef<number>(0);

  const sliceNum = choices.length;

  const genSlice = () => {
    const item: ReactNode[] = [];
    const degree = 360 / sliceNum;
    const calcDeg = 180 - degree;
    // console.log(calcDeg);
    if (calcDeg < 0) {
      return (
        <div>
          <div
            className="slice"
            style={{
              backgroundColor: COLORS[0],
              width: "100%",
              height: "100%",
            }}
          >
            <div className="slice-inner" style={{ lineHeight: "400px" }}>
              {choices[0].text}
            </div>
          </div>
        </div>
      );
    } else if (calcDeg === 0) {
      for (let i = 0; i < 2; i++) {
        const color = COLORS[i];
        item.push(
          <div
            className="slice"
            key={`slice_k${i}`}
            style={{
              transform: `translateY(-50%) rotate(${180 * i}deg)`,
              backgroundColor: color,
              width: "100%",
              height: "100%",
            }}
          >
            <div className="slice-inner" style={{ paddingTop: "300px" }}>
              {choices[i].text}
            </div>
          </div>
        );
      }
      return item;
    } else if (calcDeg < 90) {
      for (let i = 0; i < sliceNum; i++) {
        const color = COLORS[i];
        const rectH = 250 * Math.tan(degreeToRadian(calcDeg / 2));
        item.push(
          <div
            className="slice"
            key={`slice_k${i}`}
            style={{
              transform: `rotate(${degree * i}deg)`,
              backgroundColor: color,
              width: 500,
              height: rectH * 2,
              left: -50,
              top: -rectH + (200 - rectH),
              clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)",
            }}
          >
            <div className="slice-inner" style={{ paddingTop: `${rectH}px` }}>
              {choices[i].text}
            </div>
          </div>
        );
      }

      return item;
    } else if (calcDeg >= 90) {
      for (let i = 0; i < sliceNum; i++) {
        const color = COLORS[i];
        const rectW = 200 / Math.tan(degreeToRadian(calcDeg / 2));

        item.push(
          <div
            className="slice"
            key={`slice_k${i}`}
            style={{
              transform: `rotate(${degree * i}deg)`,
              backgroundColor: color,
              width: rectW * 2,
              height: 400,
              top: -200,
              left: 200 - rectW,
              clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)",
            }}
          >
            <div
              className="slice-inner"
              style={{ paddingTop: `${200 + 30}px` }}
            >
              {choices[i].text}
            </div>
          </div>
        );
      }

      return item;
    }
  };

  const getChoice = () => {
    let totalWeight = 0;
    let awardIdx = [];

    for (let i = 0; i < sliceNum; i++) {
      const w = choices[i].weight;
      for (let j = 0; j < w; j++) {
        awardIdx.push(i);
      }
    }
    shuffleArray(awardIdx);
    const target = Math.floor(Math.random() * awardIdx.length);

    /* 概率测试 */
    // if (shuffleIdx[target] === 1) {
    //   _r.push(shuffleIdx[target]);
    // }
    // _count += 1;
    // console.log(_r.length / _count);

    return awardIdx[target];
  };

  const calcTargetDegree = () => {
    const targetIdx = getChoice();
    let addDeg = 360 * 2;
    const sliceDeg = 360 / sliceNum;
    const randomDeg = Math.random() * sliceDeg;

    const targetDeg = addDeg + (sliceDeg + sliceDeg * targetIdx);

    console.log(targetIdx);
    console.log(targetDeg);

    return targetDeg;
  };

  const spinWheel = () => {
    const targetAngle = calcTargetDegree();

    // return;
    if (!wheelRef.current) {
      return;
    }

    setSpinning(true);
    wheelRef.current!.style.transform = `rotate(${targetAngle}deg)`;

    setTimeout(() => {
      setSpinning(false);
      nextDegeree.current = targetAngle;

      console.log("抽奖结束！");
    }, 3000);
  };

  const choiceHander = () => {
    // console.log(spinning);

    if (spinning) return;
    spinWheel();
  };

  console.log("////");

  return (
    <div className="wheel-box">
      <div className="wheel" ref={wheelRef}>
        {genSlice()}

        {centerLine && <div className="inner-line-x"></div>}
        {centerLine && <div className="inner-line-y"></div>}
      </div>

      <div className="target"></div>

      <div
        className={`inline-block py-1.5 px-3.5 ${
          spinning ? "bg-amber-300" : "bg-amber-600"
        }   text-white rounded choice-btn `}
        onClick={choiceHander}
      >
        帮我选择
      </div>
    </div>
  );
};

export default WheelChoice;
