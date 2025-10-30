"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

export default function Loading() {
  const loadingContainer = useRef(null);

  const [show, setShow] = useState(false);
  const [remove, setRemove] = useState(false);

  useGSAP((context, contextSafe) => {
    if (typeof document === "undefined") return;

    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    // Fluid padding from `clamp(1rem, 0.7188rem + 1.25vw, 1.6875rem)`
    const vw = width / 100;
    let padding = 16 * 0.8571 + 0.7143 * vw; // convert rem + vw → px
    padding = Math.max(16, Math.min(padding, 24)); // clamp to min/max px

    // total horizontal + vertical padding
    const totalPadding = padding * 2;

    width -= totalPadding;
    height -= totalPadding;

    const tl = gsap.timeline({
      onComplete: contextSafe
        ? contextSafe(() => {
            setShow(true);
          })
        : undefined,
    });
    const flicker = gsap
      .timeline({ repeat: 2 })
      .to({}, { duration: 0.12 })
      .to(".bar", { opacity: 0, duration: 0 })
      .to({}, { duration: 0.12 })
      .to(".bar", { opacity: 1, duration: 0 });

    tl.to(".bar", { opacity: 1, duration: 0, stagger: 0.1 })
      .add(flicker)
      .to({}, { duration: 0.12 })
      .to(".bar", { opacity: 0, duration: 0 })
      .to(".bar-border", {
        width: width,
        height: height,
        duration: 1.2,
        ease: "power1.inOut",
        onStart: contextSafe
          ? contextSafe(() => {
              setRemove(true);
            })
          : undefined,
      })
      .to(loadingContainer.current, {
        opacity: 0,
        ease: "power1.out",
      });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {!show && (
        <div
          ref={loadingContainer}
          className="bg-pastel-cream absolute z-20 flex h-svh w-full items-center justify-center"
          aria-hidden="true"
        >
          <div className="bar-border border-pastel-black border-space-4xs-3xs">
            <div
              className={cn(
                "sm:gap-space-2xs-xs sm:p-space-2xs-xs flex gap-1 p-1",
                remove ? "bg-none" : "bg-pastel-white",
              )}
            >
              {new Array(10).fill(0).map((_, i) => (
                <div
                  key={i}
                  className="bar bg-pastel-black h-8 w-3 sm:h-10 sm:w-4 opacity-0"
                  aria-hidden
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
