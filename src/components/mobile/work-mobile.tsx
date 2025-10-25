import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "../ui/sheet";

import { ArrowBigRight } from "lucide-react";
import CloudinaryVideo from "../ui/cloudinary-video";

export default function WorkMobile() {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger className="flex min-h-20 w-20 flex-col items-center justify-center text-center font-medium">
          <Image
            src={"/icons/icon-work.svg"}
            alt="work"
            width={64}
            height={64}
          />
          work
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[90%] sm:h-[80%]">
          <SheetHeader>
            <div className="p-space-s-m border-b-2">
              <SheetTitle>work.exe</SheetTitle>
              <SheetClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary focus:outline-hidden right-space-s-m top-space-s-m absolute transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
                <Image
                  src={"/icons/icon-close.svg"}
                  alt="close"
                  height={24}
                  width={24}
                />

                <span className="sr-only">Close</span>
              </SheetClose>
            </div>
          </SheetHeader>
          <SheetDescription className="pb-space-2xl-3xl h-full overflow-y-auto overflow-x-hidden">
            {/* NIGHT DANCER MOTION GRAPHIC */}
            <div className="mb-space-xl-2xl">
              <div className="mb-space-s-m">
                <h2 className="text-step-3 font-bold">Music Motion Graphic</h2>
                <span className="text-step--1">(university exam project)</span>
              </div>

              <div className="gap-space-xs-s mb-space-m-l flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-1">
                <div className="bg-pastel-white border-space-4xs-3xs p-space-2xs-xs h-fit w-full self-center">
                  <CloudinaryVideo
                    src="NIGHT_DANCER_MUSIC_ANIMATION_gzoytk"
                    width={1920}
                    height={1080}
                  />
                </div>
                <p className="text-step-0 text-justify">
                  This was a fun, creative challenge to translate the mood and
                  rhythm of the song &apos;Night Dancer&apos; into a dynamic
                  motion graphic, timing every visual element perfectly to the
                  music.
                </p>
              </div>

              <div className="mb-space-m-l">
                <div className="text-step-1 mb-space-xs-s font-bold">
                  Tools & Tech
                </div>
                <div className="gap-space-xs-s flex flex-wrap text-center">
                  <div className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    After Effect
                  </div>
                  <div className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    Figma
                  </div>
                  <div className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    Photoshop
                  </div>
                </div>
              </div>
              <a
                href={
                  "https://drive.google.com/file/d/1uoygSDM5l3ZtpEr8cBl54ewCudCwgIPs/view?usp=drive_link"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-step-1 bg-pastel-red border-pastel-black gap-space-2xs-xs border-space-4xs-3xs p-space-s-m flex items-center justify-center font-medium drop-shadow-[4px_4px_0px_rgba(51,47,46,1)]"
              >
                <span>Watch the Video</span>
                <ArrowBigRight size={24} />
              </a>
            </div>

            {/* SHOPEE REDESIGN */}
            <div className="mb-space-xl-2xl">
              <div className="mb-space-s-m">
                <h2 className="text-step-3 font-bold">Shopee UI/UX Redesign</h2>
                <span className="text-step--1">(university exam project)</span>
              </div>

              <div className="gap-space-xs-s mb-space-m-l flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-1">
                <div className="bg-pastel-white border-space-4xs-3xs p-space-2xs-xs h-fit w-full self-center">
                  <Image
                    src={"/shopee-diagonal.png"}
                    alt="shopee redesign showcase"
                    width={1920}
                    height={1080}
                  />
                </div>
                <p className="text-step-0 text-justify">
                  As the design lead for our team, I dove into redesigning the
                  Shopee app, creating a much simpler navigation experience with
                  fresh wireframes and interactive prototypes.
                </p>
              </div>

              <div className="mb-space-m-l">
                <div className="text-step-1 mb-space-xs-s font-bold">
                  Tools & Tech
                </div>
                <div className="gap-space-xs-s flex flex-wrap text-center">
                  <div className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    Figma
                  </div>
                </div>
              </div>
              <a
                href={
                  "https://drive.google.com/file/d/1hHjN9ECs4_NG6Z0Md9qEQyHGD6p0zuFk/view?usp=sharing"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-step-1 bg-pastel-red border-pastel-black gap-space-2xs-xs border-space-4xs-3xs p-space-s-m flex items-center justify-center font-medium drop-shadow-[4px_4px_0px_rgba(51,47,46,1)]"
              >
                <span>Explore the prototype</span>
                <ArrowBigRight size={24} />
              </a>
            </div>

            {/* NLP */}
            <div className="mb-space-xl-2xl">
              <div className="mb-space-s-m">
                <h2 className="text-step-3 font-bold">
                  Emotion text classification using BERT
                </h2>
                <span className="text-step--1">
                  (university thesis project)
                </span>
              </div>

              <div className="gap-space-xs-s mb-space-m-l flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-1">
                <div className="bg-pastel-white border-space-4xs-3xs p-space-2xs-xs h-fit w-full self-center">
                  <div className="gap-space-2xs-xs flex flex-col sm:grid sm:grid-cols-2">
                    <Image
                      src={"/ai-dashboard-1.jpg"}
                      alt="ai dashboard 1"
                      width={1920}
                      height={1080}
                      className="flex-1"
                    />
                    <Image
                      src={"/ai-dashboard-2.jpg"}
                      alt="ai dashboard 2"
                      width={1920}
                      height={1080}
                      className="h-full flex-1"
                    />
                  </div>
                </div>
                <p className="text-step-0 text-justify">
                  For my thesis, I built this entire system from the ground up:
                  a highly accurate (95%!) AI model that understands text
                  emotion, paired with a custom web dashboard to visualize the
                  insights.
                </p>
              </div>

              <div className="mb-space-m-l">
                <div className="text-step-1 mb-space-xs-s font-bold">
                  Tools & Tech
                </div>
                <div className="gap-space-xs-s flex flex-wrap text-center">
                  <div className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    Streamlit
                  </div>
                  <div className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    Huggingface
                  </div>
                  <div className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    Python
                  </div>
                  <div className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    BERT
                  </div>
                  <div className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    Transformer
                  </div>
                  <div className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    NLP
                  </div>
                </div>
              </div>
              <a
                href={"https://github.com/DamdyJ/nlp-emotion-classifier"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-step-1 bg-pastel-red border-pastel-black gap-space-2xs-xs border-space-4xs-3xs p-space-s-m flex items-center justify-center font-medium drop-shadow-[4px_4px_0px_rgba(51,47,46,1)]"
              >
                <span>View on Github</span>
                <ArrowBigRight size={24} />
              </a>
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
}
