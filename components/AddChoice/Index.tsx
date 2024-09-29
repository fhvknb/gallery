"use client";

import { useState, useEffect, useRef, ChangeEvent } from "react";

type PropsType = {
  cb?: () => void;
};
const AddChoice = (props: PropsType) => {
  const { cb } = props;
  const [data, setData] = useState<
    { text: string | undefined; weight: number | undefined }[]
  >([]);
  const [errmsg, setErrmsg] = useState<string>("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    idx: number,
    type: string
  ) => {
    const val = e.target.value;

    const _newD = data.slice();

    if (type === "name") {
      _newD[idx].text = val;
    } else {
      _newD[idx].weight = +val;
    }

    setData(_newD);
  };

  const handleAdd = () => {
    const newD = data.slice();
    newD.push({
      text: "",
      weight: void 0,
    });
    setData(newD);
  };

  const handleSave = () => {
    const len = data.length;
    if (!len || len < 2) {
      setErrmsg("数据不正确， 请重新输入");
      return;
    }

    let isValied = true;

    for (let i = 0; i < len; i++) {
      if (!data[i].text || !data[i].weight) {
        isValied = false;
        break;
      }
    }
    // console.log(data);
    if (isValied) {
      localStorage.setItem("choices", JSON.stringify(data));
      setErrmsg("");
    } else {
      setErrmsg("数据不正确， 请重新输入");
      return;
    }
    cb && cb();
  };

  const handleDel = (idx: number) => {
    // console.log(idx);
    const _newD = data.slice();
    _newD.splice(idx, 1);
    // console.log(_newD);
    setData(_newD);
  };

  useEffect(() => {
    const choices = localStorage.getItem("choices") || "";
    const d = choices && JSON.parse(choices);

    if (d) {
      setData(d);
    } else {
      setData([
        {
          text: "",
          weight: void 0,
        },
      ]);
    }
  }, []);
  return (
    <div className="bg-white p-4 rounded  text-base shadow-md">
      <div className="flex mb-4">
        <button
          className="py-1.5 px-3.5 text-white bg-violet-500 rounded "
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          className="py-1.5 px-3.5 ml-4 text-white bg-violet-500 rounded "
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      {data &&
        data.length > 0 &&
        data.map((item, idx) => (
          <div className="flex mb-2" key={`itemadd_${idx + 1}`}>
            <span>Name:</span>
            <input
              value={item.text}
              onChange={(e) => handleInputChange(e, idx, "name")}
              required
              className="w-32 ml-2 pl-1 rounded border-violet-800 border focus:outline-none focus:ring focus:ring-violet-300 "
            />
            <span className="ml-4">Weight:</span>
            <input
              value={item.weight}
              type="number"
              onChange={(e) => handleInputChange(e, idx, "weight")}
              required
              className="w-32  ml-2 pl-1 rounded border-violet-800 border focus:outline-none focus:ring focus:ring-violet-300 "
            />
            <span
              onClick={() => handleDel(idx)}
              className="ml-2 underline cursor-pointer text-red-500"
            >
              Del
            </span>
          </div>
        ))}
      {!!errmsg && <div className="text-sm text-rose-500 ">{errmsg}</div>}
    </div>
  );
};

export default AddChoice;
