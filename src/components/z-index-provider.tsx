"use client";

import { createContext, useContext, useRef } from "react";

type ZIndexContextProps = {
  bringToFront: () => number;
};

const ZIndexContext = createContext<ZIndexContextProps | null>(null);

export default function ZIndexProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const counter = useRef(10);

  const bringToFront = () => {
    counter.current += 20;
    return counter.current;
  };

  return (
    <ZIndexContext.Provider value={{ bringToFront }}>
      {children}
    </ZIndexContext.Provider>
  );
}

export function useZIndex() {
  const context = useContext(ZIndexContext);
  if (!context) throw new Error("useZIndex must be used inside ZIndexProvider");
  return context;
}