"use client";
import { useRef } from "react";
import CloudinaryVideo from "./cloudinary-video";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export default function VideoClip() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(".card", {
        rotate: 21,
        stagger: 0.1,
        ease: "expo.Out",
        duration: 0.5,
      });
    },
    { scope: container },
  );
  return (
    <>
      <div ref={container} className="relative aspect-video h-full w-full">
        <div className="card border-pastel-black -rotate-7 bg-pastel-white absolute left-1/2 top-1/2 z-[1] h-fit w-full -translate-x-1/2 -translate-y-1/2 border-space-4xs-3xs p-space-2xs-xs">
          <Image
            src={"/img/placeholder.webp"}
            alt="placeholder"
            quality={10}
            width={1920}
            height={1080}
            className="aspect-video opacity-0"
          />
        </div>
        <div className="card border-pastel-black bg-pastel-white absolute left-1/2 top-1/2 z-[2] h-fit w-full -translate-x-1/2 -translate-y-1/2 -rotate-3 border-space-4xs-3xs p-space-2xs-xs">
          <Image
            src={"/img/placeholder.webp"}
            alt="placeholder"
            quality={10}
            width={1920}
            height={1080}
            className="aspect-video opacity-0"
          />
        </div>
        <div className="card border-pastel-black bg-pastel-white absolute left-1/2 top-1/2 z-[3] h-fit w-full -translate-x-1/2 -translate-y-1/2 transform border-space-4xs-3xs p-space-2xs-xs">
          <CloudinaryVideo
            src="NIGHT_DANCER_MUSIC_ANIMATION_gzoytk"
            width={1920}
            height={1080}
            // playbackRates={[0.5, 1, 16]}
            className="aspect-video object-cover object-center"
          />
        </div>
      </div>
    </>
  );
}
