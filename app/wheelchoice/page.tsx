"use client";

import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

import WheelChoice from "@/components/WheelChoice/Index";
import Modal from "@/components/Modals/Index";

import "./page.css";
import AddChoice from "@/components/AddChoice/Index";

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
  doLike: [
    {
      text: "唱歌",
      icon: "icon",
      weight: 20,
    },
    {
      text: "下棋",
      icon: "icon",
      weight: 20,
    },
    {
      text: "玩游戏",
      icon: "icon",
      weight: 20,
    },
    {
      text: "锻炼",
      icon: "icon",
      weight: 20,
    },
    {
      text: "看书",
      icon: "icon",
      weight: 20,
    },
  ],
  test: [
    {
      text: "Task One",
      icon: "icon",
      weight: 20,
    },
    {
      text: "Task Two",
      icon: "icon",
      weight: 20,
    },
    {
      text: "Task Three",
      icon: "icon",
      weight: 20,
    },
    {
      text: "Task Four",
      icon: "icon",
      weight: 20,
    },
  ],
  extra: [],
};

type ChoiceType = keyof typeof _presetData;

export default function Page() {
  const [data, setData] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const [openAdd, setOpenAdd] = useState<boolean>(false);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value);

    const type = e.target.value as ChoiceType;

    if (type === "extra") {
      const choices = localStorage.getItem("choices");
      const _d = (choices && JSON.parse(choices)) || [];

      if (_d.length > 1) {
        setData(_d);
      } else {
        setData(_presetData["test"]);
      }
    } else {
      setData(_presetData[type]);
    }

    setOpen(false);
  };

  useEffect(() => {
    setData(_presetData["test"]);
    // localStorage.setItem("choices", "");
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
          <button
            className="inline-block py-1.5 px-3.5 ml-4 text-white bg-blue-500 rounded mb-12"
            onClick={() => setOpenAdd(true)}
          >
            Add Choice
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
            <option value="doOrNot">Choose Two</option>
            <option value="play">Choose Play</option>
            <option value="doLike">Choose Like</option>
            <option value="extra">Choose Extra</option>
          </select>
        </div>
      </Modal>

      <Modal isOpen={openAdd} close={() => setOpenAdd(false)}>
        <AddChoice cb={() => setOpenAdd(false)} />
      </Modal>
    </main>
  );
}
