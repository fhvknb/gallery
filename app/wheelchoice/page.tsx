"use client";

import {
  ChangeEvent,
  ChangeEventHandler,
  EventHandler,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import WheelChoice from "@/components/WheelChoice/Index";
import Modal from "@/components/Modals/Index";

import "./page.css";

const _presetData = {
  play: [
    {
      text: "玩1次",
      icon: "icon",
      weight: 10,
    },
    {
      text: "玩2次",
      icon: "icon",
      weight: 10,
    },
    {
      text: "玩3次",
      icon: "icon",
      weight: 10,
    },
  ],
  doOrNot: [
    {
      text: "做",
      icon: "icon",
      weight: 20,
    },
    {
      text: "不做",
      icon: "icon",
      weight: 20,
    },
  ],
  test: [
    {
      text: "award-0",
      icon: "icon",
      weight: 10,
    },
    {
      text: "award-1",
      icon: "icon",
      weight: 10,
    },
    {
      text: "award-2",
      icon: "icon",
      weight: 10,
    },
    {
      text: "award-3",
      icon: "icon",
      weight: 10,
    },
  ],
};

type ChoiceType = keyof typeof _presetData;

export default function Page() {
  const [data, setData] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value);

    const type = e.target.value as ChoiceType;

    setData(_presetData[type]);
    setOpen(false);
  };

  useEffect(() => {
    setData(_presetData["test"]);
  }, []);

  return (
    <main className="flex min-h-screen justify-center">
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <div>
          <button
            className="inline-block py-1.5 px-3.5 text-white bg-blue-500 rounded mb-12"
            onClick={() => setOpen(true)}
          >
            Change Choice
          </button>
        </div>
        <WheelChoice choices={data} />
      </div>

      <Modal isOpen={open} close={() => setOpen(false)}>
        <div className="bg-white p-4 rounded  text-base shadow-md">
          <label className="">抉择类型：</label>
          <select
            className="w-52  h-8 rounded border  border-gray-700"
            onChange={handleSelect}
          >
            <option value="">--Please choose--</option>
            <option value="doOrNot">Choice</option>
            <option value="play">Play</option>
          </select>
        </div>
      </Modal>
    </main>
  );
}
