import React from "react";
import VideoClip from "./ui/video-clip";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";

export default function ProjectShowcase() {
  return (
    <>
      <div className="mb-space-xl-2xl">
        <div className="mb-space-s-m">
          <h2 className="text-step-3 font-bold">Music Motion Graphic</h2>
          <span className="text-step--1">(university exam project)</span>
        </div>

        <div className="gap-space-xs-s mb-space-m-l flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-1">
          <div className="h-fit self-center border-space-4xs-3xs p-space-2xs-xs">
            <Image
              src={"/img/placeholder.webp"}
              alt="placeholer"
              width={1920}
              height={1080}
            />
          </div>
          <p className="text-step-0">
            This was a fun, creative challenge to translate the mood and rhythm
            of the song &apos;Night Dancer&apos; into a dynamic motion graphic,
            timing every visual element perfectly to the music.
          </p>
        </div>

        <div className="mb-space-m-l">
          <div className="text-step-1 mb-space-xs-s font-bold">tools</div>
          <div className="gap-space-xs-s flex flex-wrap text-center">
            <div className="border-pastel-black flex-grow border-space-4xs-3xs p-space-2xs-xs">
              After Effect
            </div>
            <div className="border-pastel-black flex-grow border-space-4xs-3xs p-space-2xs-xs">
              Figma
            </div>
            <div className="border-pastel-black flex-grow border-space-4xs-3xs p-space-2xs-xs">
              Photoshop
            </div>
          </div>
        </div>
        <button className="bg-pastel-red border-pastel-black w-full border-space-4xs-3xs p-space-s-m font-medium drop-shadow-[4px_4px_0px_rgba(51,47,46,1)]">
          <span className="text-step-1 flex w-full items-center justify-center gap-space-2xs-xs">
            Watch the Video <ArrowBigRight size={24} />
          </span>
        </button>
      </div>
    </>
  );
}
