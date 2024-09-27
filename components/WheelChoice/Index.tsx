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
  const endDeg = useRef<number>(0);

  const sliceNum = choices.length;

  const genSlice = () => {
    const item: ReactNode[] = [];
    const degree = 360 / sliceNum;
    const calcDeg = 180 - degree;
    if (!sliceNum) return;
    // console.log(calcDeg);
    if (calcDeg < 0) {
      return item;
    }

    if (calcDeg === 0) {
      for (let i = 0; i < 2; i++) {
        const color = COLORS[i];
        item.push(
          <div
            className="slice"
            key={`slice_k${i}`}
            style={{
              transform: `translateY(-50%) rotate(-${180 * i + 90}deg)`,
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
              transform: `rotate(-${degree * i + degree / 2}deg)`,
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
              transform: `rotate(-${degree * i + degree / 2}deg)`,
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
    let awardIdx = [];

    for (let i = 0; i < sliceNum; i++) {
      const w = choices[i].weight;
      for (let j = 0; j < w; j++) {
        awardIdx.push(i);
      }
    }
    shuffleArray(awardIdx);
    const target = Math.floor(Math.random() * awardIdx.length);

    /* 概率测试 start */
    // if (awardIdx[target] === 0) {
    //   _r.push(awardIdx[target]);
    // }
    // _count += 1;
    // console.log(_r.length / _count);
    /* 概率测试 end */
    return awardIdx[target];
  };

  const calcTargetDegree = () => {
    const targetIdx = getChoice();
    const sliceDeg = 360 / sliceNum;
    const randomDeg = Math.random() * sliceDeg;
    const preDeg = Math.floor(endDeg.current / 360) * 360;
    const targetDeg = 360 * 2 + targetIdx * sliceDeg + randomDeg + preDeg;
    // console.log(targetIdx);
    // console.log(targetDeg);
    return [targetIdx, targetDeg];
  };

  const spinWheel = () => {
    const [targetIdx, targetAngle] = calcTargetDegree();

    // for (let i = 0; i < 100; i++) {
    //   calcTargetDegree();
    // }
    // return;

    if (!wheelRef.current) {
      return;
    }

    setSpinning(true);
    wheelRef.current!.style.transform = `rotate(${targetAngle}deg)`;

    setTimeout(() => {
      setSpinning(false);

      endDeg.current = targetAngle;
      // window.alert(
      //   `已为您自动选择任务--${choices[targetIdx].text}，去完成它吧！🏆🏆🏆`
      // );
      console.log(`::::::成功命中（${choices[targetIdx].text}）号任务`);
    }, 3000);
  };

  const choiceHander = () => {
    // console.log(spinning);

    if (spinning) return;
    spinWheel();
  };

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
          spinning
            ? "bg-amber-200 cursor-not-allowed"
            : "bg-amber-600 cursor-pointer"
        }   text-white rounded choice-btn `}
        onClick={choiceHander}
      >
        帮我选择
      </div>
    </div>
  );
};

export default WheelChoice;
