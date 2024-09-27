import { ReactNode } from "react";

type PropsTyped = {
  children?: ReactNode;
  isOpen?: boolean;
  close?: () => void;
};

const Modal = function (props: PropsTyped) {
  const { isOpen = false, close } = props;
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        {props.children}
      </div>
    )
  );
};

export default Modal;
