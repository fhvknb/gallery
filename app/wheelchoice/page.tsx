"use client";

import {
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import WheelChoice from "@/components/WheelChoice/Index";

import "./page.css";

const _presetData = {
  play: [
    {
      text: "玩1次",
      icon: "icon",
      weight: 1,
    },
    {
      text: "玩2次",
      icon: "icon",
      weight: 1,
    },
    {
      text: "玩3次",
      icon: "icon",
      weight: 1,
    },
  ],
  test: [
    {
      text: "award-0",
      icon: "icon",
      weight: 1,
    },
    {
      text: "award-1",
      icon: "icon",
      weight: 1,
    },
    {
      text: "award-2",
      icon: "icon",
      weight: 1,
    },
  ],
};

type ChoiceType = keyof typeof _presetData;

export default function Page() {
  const [data, setData] = useState<any[]>([]);

  const changeWheelData = (type: ChoiceType) => {
    setData(_presetData[type]);
  };

  useEffect(() => {
    setData(_presetData["test"]);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-32">
      <WheelChoice choices={data} />
      <div>
        <button
          className="inline-block py-1.5 px-3.5  text-white bg-blue-500 rounded  choice-btn "
          onClick={() => changeWheelData("test")}
        >
          Test Choice
        </button>

        <button
          className="inline-block py-1.5 px-3.5 text-white bg-blue-500 rounded ml-4 choice-btn"
          onClick={() => changeWheelData("play")}
        >
          Paly Choice
        </button>
      </div>
    </main>
  );
}
