"use client";

import { ColorPaletteDataOne } from "@/data/ColorPaletteData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function ColorPalette() {
  const container = useRef(null);
  const box = useRef<(HTMLDivElement | null)[]>([]);

  const { contextSafe } = useGSAP(
    () => {
      box.current.forEach((el) => {
        gsap.from(el, {
          scale: 0,
          ease: "power1.inOut",
          duration: 0.8,
        });
      });
    },
    { scope: container },
  );
  const onMouseEnter = contextSafe((index: number) => {
    gsap.to(box.current[index], {
      rotate: 60,
      ease: "power1.inOut",
      delay: 0.3,
      duration: 0.5,
    });
  });
  const onMouseLeave = contextSafe((index: number) => {
    gsap.to(box.current[index], {
      rotate: 0,
      ease: "power1.inOut",
      delay: 0.3,
      duration: 0.5,
    });
  });

  return (
    <>
      <div className="space-y-2">
        <div className="font-bold">Color Palette</div>
        <div className="flex gap-space-2xs-xs" ref={container}>
          {ColorPaletteDataOne.map((data) => {
            return (
              <div
                key={data.id}
                ref={(e) => {
                  box.current[data.id] = e;
                }}
                className={`box border-pastel-black size-6 border-space-4xs-3xs ${data.color}`}
                onMouseEnter={() => onMouseEnter(data.id)}
                onMouseLeave={() => onMouseLeave(data.id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
/**
 * "use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ColorPaletteDataOne } from "@/data/ColorPaletteData";

export default function ColorPalette() {
  // store tweens per element
  const tweensRef = useRef<Array<gsap.core.Tween | null>>([]);
  // store "reverse after complete" flags per element
  const reverseOnCompleteRef = useRef<Array<boolean>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray<HTMLElement>(".box");

      boxes.forEach((el, i) => {
        // initialize flag for this index
        reverseOnCompleteRef.current[i] = false;

        // create paused tween and store it
        const t = gsap.to(el, {
          rotate: 60,
          duration: 0.3,
          ease: "power1.inOut",
          paused: true,
          transformOrigin: "50% 50%",
          // when tween finishes, check if we should reverse it
          onComplete: () => {
            if (reverseOnCompleteRef.current[i]) {
              // clear the flag so it doesn't forever toggle
              reverseOnCompleteRef.current[i] = false;
              // reverse the tween (go back to start)
              t.reverse();
            }
          },
        });

        tweensRef.current[i] = t;
      });
    });

    return () => {
      // cleanup
      tweensRef.current.forEach((t) => t?.kill());
      tweensRef.current = [];
      reverseOnCompleteRef.current = [];
      ctx.revert();
    };
  }, []);

  const onMouseEnter = (idx: number) => {
    const t = tweensRef.current[idx];
    if (!t) return;

    // If tween is currently reversing, calling play() will drive it forward again.
    // Clear any reverse-on-complete flag because user re-entered.
    reverseOnCompleteRef.current[idx] = false;
    t.play();
  };

  const onMouseLeave = (idx: number) => {
    const t = tweensRef.current[idx];
    if (!t) return;

    // If the tween is currently playing forward and hasn't finished,
    // set the flag to reverse when it completes instead of reversing immediately.
    if (t.isActive() && t.progress() < 1) {
      reverseOnCompleteRef.current[idx] = true;
    } else if (t.progress() === 1) {
      // If it's already at the end, reverse immediately
      t.reverse();
    } else {
      // If at start (progress === 0) or paused at start, nothing to do.
      // Optionally, you could ensure it goes to end and back:
      // t.play(); reverseOnCompleteRef.current[idx] = true;
    }
  };

  return (
    <div className="space-y-2">
      <h4 className="font-bold">Color Palette</h4>
      <div className="flex gap-space-2xs-xs">
        {ColorPaletteDataOne.map((data, idx) => (
          <div
            key={data.id}
            className={`box border-pastel-black size-6 border-space-4xs-3xs ${data.color} w-12 h-12`}
            onMouseEnter={() => onMouseEnter(idx)}
            onMouseLeave={() => onMouseLeave(idx)}
          />
        ))}
      </div>
    </div>
  );
}

 * 
 */
