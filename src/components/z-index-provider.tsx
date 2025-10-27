"use client";

import { createContext, useContext, useRef } from "react";

type ZIndexContextProps = {
  bringToFront: () => number;
  getCurrent: () => number;
};

const ZIndexContext = createContext<ZIndexContextProps | null>(null);

export default function ZIndexProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const counter = useRef(100);

  const getCurrent = () => counter.current;

  const bringToFront = () => {
    counter.current += 1;
    return counter.current;
  };

  return (
    <ZIndexContext.Provider value={{ bringToFront, getCurrent }}>
      {children}
    </ZIndexContext.Provider>
  );
}

export function useZIndex() {
  const context = useContext(ZIndexContext);
  if (!context) throw new Error("useZIndex must be used inside ZIndexProvider");
  return context;
}
