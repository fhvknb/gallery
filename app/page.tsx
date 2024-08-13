"use client";
import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";

import "viewerjs/dist/viewer.css";
import Viewer from "viewerjs";

let _GALLERY_GROUP = "gt";
let _IMG_DURATION = 5000;

let _IMG_HOST = `https://raw.githubusercontent.com/fhvknb/raw-assets/master/${_GALLERY_GROUP}/`;

function Config(props: { cb: (data: any) => void }) {
  const { cb } = props;
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data: Record<string, any> = {};
        formData.forEach((value, key) => {
          data[key] = value;
        });

        console.log(data);
        cb && cb(data);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className=" rounded bg-white p-4">
        <form id="conf_form" ref={formRef}>
          <div className="pb-4 flex justify-between">
            <div className="w-20 leading-8">Group:</div>
            <input
              className="w-60 h-8 rounded
              indent-2
              focus:outline-none focus:ring-2
             focus:ring-indigo-500 
             focus:border-indigo-500
            "
              name="group"
            />
          </div>
          <div className="pb-4 flex justify-between">
            <div className="w-20 leading-8">Duration:</div>
            <input
              className="w-60 h-8 rounded
              indent-2
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              type="number"
              name="duration"
            />
          </div>

          <div className="flex justify-end">
            <button className="border-solid border-2 border-indigo-600 pl-4 pr-4 rounded">
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Home() {
  const [imgData, setImgData] = useState<{ imgSrc: string }[]>([]);
  const [clickCount, setClickCount] = useState<number>(0);
  const [showConf, setShowConf] = useState<boolean>(false);

  const galleryRef = useRef<Viewer | null>(null);

  const fetchData = async () => {
    let _GALLERY_DATA = `https://raw.githubusercontent.com/fhvknb/raw-assets/master/json/${_GALLERY_GROUP}.json`;

    try {
      const resp = await fetch(_GALLERY_DATA);
      if (resp.status === 200) {
        const resData = await resp.json();
        setImgData(resData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const initViewer = () => {
    if (galleryRef.current) {
      galleryRef.current?.destroy();
    }
    const confData = localStorage.getItem("viewerConf");
    let opts = confData && JSON.parse(confData);
    console.log(opts);

    galleryRef.current = new Viewer(document.getElementById("images")!, {
      interval: opts?.duration ? Number(opts.duration) : _IMG_DURATION,
    });
  };

  useEffect(() => {
    if (imgData.length) {
      initViewer();
      return;
    }

    const confData = localStorage.getItem("viewerConf");
    let opts = confData && JSON.parse(confData);
    if (opts?.group) {
      _GALLERY_GROUP = opts.group;
      _IMG_HOST = `https://raw.githubusercontent.com/fhvknb/raw-assets/master/${_GALLERY_GROUP}/`;

      console.log("///");
    }

    fetchData();
  }, [imgData]);

  const handleClickCount = () => {
    if (clickCount === 3) {
      setClickCount(0);
      setShowConf(true);
      return;
    }
    setClickCount((preV) => ++preV);
  };

  const handleConfCb = (data: any) => {
    if (data) {
      localStorage.setItem("viewerConf", JSON.stringify(data));
      window.location.href = "/?";
    }
  };

  return (
    <div className="container min-w-fit  min-h-screen">
      <ul className="flex flex-wrap" id="images">
        {imgData &&
          imgData.length > 0 &&
          imgData.map((item, idx) => (
            <li className="w-48 h-48 m-2 " key={`img_${idx + 9}`}>
              <img
                src={`${_IMG_HOST}${item.imgSrc}`}
                className="w-full h-full object-cover rounded"
              />
            </li>
          ))}

        <li onClick={handleClickCount} className="w-48 h-48 m-2"></li>
      </ul>
      {showConf && <Config cb={handleConfCb} />}
    </div>
  );
}

export default function Index() {
  return (
    <>
      <Home />
    </>
  );
}
