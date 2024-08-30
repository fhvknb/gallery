"use client";
// import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";

import "viewerjs/dist/viewer.css";
import Viewer from "viewerjs";
import { MD5 } from "crypto-js";
import { getTargetUrl, setCookie, getLoginCookie, shuffleArray } from "@/utils";

const _DEF_GALLERY_GROUP = "gt";
const _LOGIN_HASH = "9eb3489a8d9e592694038d09830713cd";

let _IMG_DURATION = 5000;

let _IMG_HOST = getTargetUrl("IMG", _DEF_GALLERY_GROUP);
let _REQUEST_URL = getTargetUrl("DATA", _DEF_GALLERY_GROUP);

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

        // console.log(data);
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
              focus:outline-none focus:ring
             focus:ring-2-indigo-500 
             focus:border-indigo-500
             border-2 border-indigo-300 
            "
              name="group"
            />
          </div>
          <div className="pb-4 flex justify-between">
            <div className="w-20 leading-8">Duration:</div>
            <input
              className="w-60 h-8 rounded indent-2 border-2 border-indigo-300 
              focus:outline-none focus:ring focus:ring-2-indigo-500 focus:border-indigo-500"
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

function Login(props: { cb: () => void }) {
  const { cb } = props;
  const formRef = useRef<HTMLFormElement | null>(null);

  const [errmsg, setErrmsg] = useState<string>("");

  useEffect(() => {
    if (formRef.current) {
      formRef.current.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data: Record<string, any> = {};
        formData.forEach((value, key) => {
          data[key] = value;
        });
        // console.log(data);
        if (!data?.password) {
          setErrmsg("密码不能为空");
          return;
        }

        const hash = MD5(data.password).toString();
        if (hash === _LOGIN_HASH) {
          cb && cb();
        } else {
          setErrmsg("密码输入错误！Tip：'dwp toor spv'");
        }
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className=" rounded bg-white p-4">
        <form id="login_form" ref={formRef}>
          <div className="pb-4 flex justify-between">
            <div className="w-20 leading-8">Password:</div>
            <input
              className="w-60 h-8 rounded
              indent-2
              focus:outline-none focus:ring
             focus:ring-2-indigo-500 
             focus:border-indigo-500
             border-2 border-indigo-300 
            "
              type="password"
              name="password"
            />
          </div>
          {!!errmsg && (
            <div className="text-sm text-rose-500 pb-4">{errmsg}</div>
          )}

          <div className="flex justify-end">
            <button className="border-solid border-2 border-indigo-600 pl-4 pr-4 rounded">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Home(props: { isLogin: boolean }) {
  const { isLogin = false } = props;
  const [imgData, setImgData] = useState<{ imgSrc: string }[]>([]);
  const [clickCount, setClickCount] = useState<number>(0);
  const [showConf, setShowConf] = useState<boolean>(false);
  const [loginStatus, setLoginStatus] = useState<boolean>(isLogin);

  const galleryRef = useRef<Viewer | null>(null);

  const fetchData = async () => {
    const confData = localStorage.getItem("viewerConf");
    let opts = confData && JSON.parse(confData);

    if (opts?.group) {
      _REQUEST_URL = getTargetUrl("DATA", opts.group);
      _IMG_HOST = getTargetUrl("IMG", opts.group);
    }

    try {
      const resp = await fetch(_REQUEST_URL);
      if (resp.status === 200) {
        const resData = await resp.json();
        setImgData(shuffleArray(resData));
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
    // console.log(opts);

    galleryRef.current = new Viewer(document.getElementById("images")!, {
      interval: opts?.duration ? Number(opts.duration) : _IMG_DURATION,
    });
  };

  useEffect(() => {
    loginStatus && fetchData();
  }, []);

  useEffect(() => {
    if (imgData.length) {
      setTimeout(() => {
        initViewer();
      }, 10);
    }
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

  const handleLoginCb = () => {
    setCookie("isLogin", "1", 1);
    setLoginStatus(true);
    fetchData();
  };

  return (
    <>
      {loginStatus && (
        <div className="container min-w-fit  min-h-screen">
          <ul className="flex flex-wrap" id="images">
            {imgData &&
              imgData.length > 0 &&
              imgData.map((item, idx) => (
                <li className="w-48 h-48 mt-2 ml-2 " key={`img_${idx + 9}`}>
                  <img
                    src={`${_IMG_HOST}${item.imgSrc}`}
                    className="w-full h-full object-cover rounded"
                  />
                </li>
              ))}

            <li onClick={handleClickCount} className="w-48 h-48 ml-2 mt-2"></li>
          </ul>
          {showConf && <Config cb={handleConfCb} />}
        </div>
      )}
      {!loginStatus && <Login cb={handleLoginCb} />}
    </>
  );
}

export default function Index() {
  const [initialStatus, setInitialStatus] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    setIsLogin(getLoginCookie());
    setInitialStatus(true);
  }, []);
  return <>{initialStatus && <Home isLogin={isLogin} />}</>;
}
