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

export default function Page() {
  const data = [
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
    // {
    //   text: "award-0",
    //   icon: "icon",
    // },
    // {
    //   text: "award-0",
    //   icon: "icon",
    // },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-32">
      <WheelChoice choices={data} />
    </main>
  );
}
