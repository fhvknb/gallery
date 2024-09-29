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

const _test_target: any = [];
// const _test_picks: any = [];
let _test_count = 0;

const WheelChoice = function (props: Props) {
  const { choices } = props;

  const [centerLine, showCenterLine] = useState<boolean>(false);
  const [spinning, setSpinning] = useState<boolean>(false);

  const wheelRef = useRef<HTMLDivElement | null>(null);
  const endDeg = useRef<number>(0);
  const shufleIdxRef = useRef<number[]>();

  const sliceNum = choices.length;

  const _testProbablity = (target: number, times: number) => {
    for (let i = 0; i < times; i++) {
      const [pick, _] = calcTargetDegree();
      if (pick === target) {
        _test_target.push(pick);
      }
      _test_count += 1;

      console.log(`(${target})::${_test_target.length / _test_count}`);
    }
  };

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

  const shuffleIndex1 = () => {
    let allItem = 0;
    const allItemArr = [];

    for (let i = 0; i < sliceNum; i++) {
      const w = choices[i].weight;
      allItem += w;
      const _idxArr = [];

      for (let j = 0; j < w; j++) {
        _idxArr.push(i);
      }
      allItemArr.push(_idxArr);
    }
    const minItems = Math.floor(allItem / sliceNum);

    let pushCount = 0;
    let pushItem = -1;
    for (let m = 0; m < sliceNum; m++) {
      const arr = allItemArr[m];
      const l = arr.length;
      if (l < minItems) {
        for (let p = 0; p < minItems - l; p++) {
          arr.push(-1);
          pushCount += 1;
        }
      } else if (l > minItems) {
        arr.splice(0, pushCount);
        pushItem = arr[0];
      }
    }
    const _resArr: number[][] = [];

    for (let i = 0; i < sliceNum; i++) {
      const arr = allItemArr[i];
      const l = arr.length;
      for (let j = 0; j < l; j++) {
        if (arr[j] < 0) {
          arr[j] = pushItem;
        }
      }
      _resArr.push(shuffleArray(arr));
      // _resArr.push(arr);
    }
    shuffleArray(_resArr);
    // console.log(_resArr);

    return _resArr;
  };

  const shuffleIndex = () => {
    const _arrItems = shuffleIndex1();
    let _maxLen = 0;

    for (let i = 0; i < sliceNum; i++) {
      _maxLen = Math.max(_arrItems[i].length, _maxLen);
    }

    const shuffleArr: any[] = [];
    for (let i = 0; i < _maxLen; i++) {
      for (let j = 0; j < sliceNum; j++) {
        const _len = _arrItems[j].length;

        if (_len) {
          shuffleArr.push(_arrItems[j][0]);
          _arrItems[j].shift();
        }
      }
    }
    // console.log(shuffleArr);

    return shuffleArr;
  };

  const getChoice = () => {
    if (!shufleIdxRef.current) {
      return -1;
    }
    const pick = Math.floor(Math.random() * shufleIdxRef.current.length);

    return shufleIdxRef.current[pick];
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

    if (!wheelRef.current) {
      return;
    }

    setSpinning(true);
    wheelRef.current!.style.transition = `transform 3s cubic-bezier(0.2, 0.93, 0.43, 1)`;
    wheelRef.current!.style.transform = `rotate(${targetAngle}deg)`;

    setTimeout(() => {
      setSpinning(false);

      endDeg.current = targetAngle;
      window.alert(
        `已为您自动选择任务--${choices[targetIdx].text}，去完成它吧！🏆🏆🏆`
      );
      // console.log(`::::::成功命中（${choices[targetIdx].text}）号任务`);
    }, 3000);
  };

  const choiceHander = () => {
    // console.log(spinning);

    if (spinning) return;
    spinWheel();
  };

  useEffect(() => {
    if (choices.length) {
      shufleIdxRef.current = shuffleIndex();
      // console.log(shufleIdxRef.current);
      
      endDeg.current = 0;
      wheelRef.current!.style.transition = `unset`;
      wheelRef.current!.style.transform = `rotate(0deg)`;
    }
  }, [choices]);

  useEffect(() => {
    // setTimeout(() => {
    //   _testProbablity(3, 100);
    // }, 100);
  }, []);

  return (
    <div className="scale-75 sm:scale-100 wheel-box">
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
