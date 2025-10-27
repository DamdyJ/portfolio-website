"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { ComponentProps, useRef, useState } from "react";
import AppIcon from "./ui/app-icon";
import {
  Window,
  WindowCloseButton,
  WindowHeader,
  WindowTitle,
} from "./ui/window";
import { useZIndex } from "./z-index-provider";

gsap.registerPlugin(Draggable);

type DesktopAppProps = {
  windowsTitle: string;
  iconSrc: string;
  iconAlt: string;
  iconSize: number;
  iconLabel: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export default function DesktopApp({
  iconSrc,
  iconAlt,
  iconSize,
  iconLabel,
  windowsTitle,
  top,
  bottom,
  left,
  right,
  children,
}: ComponentProps<"div"> & DesktopAppProps) {
  const container = useRef(null);
  const windows = useRef(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [zIndex, setZIndex] = useState(0);
  const { bringToFront } = useZIndex();
  useGSAP(() => {
    gsap.set(windows.current, {
      scale: 0,
      autoAlpha: 0,
    });
    Draggable.create(windows.current, {
      inertia: true,
      // bounds: document.body, //remove the body boundary
    });
    timeline.current = gsap.timeline({ paused: true }).to(windows.current, {
      scale: 1,
      autoAlpha: 1,
      duration: 0.3,
      ease: "back.out(1.5)",
    });
  });

  const { contextSafe } = useGSAP({ scope: container });

  const onOpen = contextSafe(() => {
    setZIndex(bringToFront());
    timeline.current?.play();
  });
  const onClose = contextSafe(() => {
    timeline.current?.reverse();
  });

  return (
    <div ref={container} className="hidden lg:block">
      <AppIcon
        image={{
          src: iconSrc,
          alt: iconAlt,
          size: iconSize,
        }}
        label={iconLabel}
        onClick={onOpen}
      />
      <Window ref={windows} onClose={onClose} top={top} bottom={bottom} left={left} right={right} z={zIndex}>
        <WindowHeader>
          <WindowTitle>{windowsTitle}</WindowTitle>
          <WindowCloseButton />
        </WindowHeader>
        {children}
      </Window>
    </div>
  );
}
