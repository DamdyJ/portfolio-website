"use client";

import { ComponentProps, createContext, useContext } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type WindowContextProps = {
  onClose: () => void;
};

const WindowContext = createContext<WindowContextProps | null>(null);

export function useWindowContext() {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error(
      "useWindowContext must be used inside WindowContextProvider",
    );
  }
  return context;
}

type WindowProps = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  z: number;
  onClose: () => void;
};

function Window({
  top,
  bottom,
  left,
  right,
  z,
  children,
  className,
  onClose,
  ref,
  ...props
}: ComponentProps<"div"> & WindowProps) {
  return (
    <>
      <WindowContext.Provider value={{ onClose }}>
        <div
          ref={ref}
          className={cn(
            `bg-pastel-white z-20 fixed hidden w-fit scale-0 border-4 drop-shadow-[8px_8px_0px_rgba(51,47,46,1)] lg:block`,
            className,
          )}
          style={{ top: `${top}vw`, bottom: `${bottom}vw`, left: `${left}vw`, right: `${right}vw`, zIndex: z }}
          {...props}
        >
          {children}
        </div>
      </WindowContext.Provider>
    </>
  );
}

function WindowHeader({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <>
      <div
        className={cn(
          "flex items-center justify-between border-b-4 pl-space-s-m",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
}

function WindowTitle({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("text-sm sm:text-base", className)} {...props}>
      {children}
    </div>
  );
}

function WindowCloseButton({ className, ...props }: ComponentProps<"button">) {
  const { onClose } = useWindowContext();
  return (
    <button className={cn("p-space-s-m", className)} {...props} onClick={onClose}>
      <Image src={"/icons/icon-close.svg"} alt="close" height={24} width={24} className="hover:scale-105" />
    </button>
  );
}

function WindowContent({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <>
      <div
        className={cn(
          "[&::-webkit-scrollbar-thumb]:bg-pastel-black [&::-webkit-scrollbar-track]:border-pastel-black cursor-default overflow-y-auto p-space-s-m [&::-webkit-scrollbar-track]:border-l-4 [&::-webkit-scrollbar]:w-4",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
}

export {
  Window,
  WindowHeader,
  WindowTitle,
  WindowCloseButton,
  WindowContent,
};
