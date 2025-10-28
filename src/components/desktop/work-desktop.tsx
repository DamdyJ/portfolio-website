import Image from "next/image";
import { WindowContent } from "../ui/window";
import DesktopApp from "../desktop-app";
import { ArrowBigRight } from "lucide-react";
import CloudinaryVideo from "../ui/cloudinary-video";

export default function WorkDesktop() {
  return (
    <>
      <DesktopApp
        iconSrc="/icons/icon-work.svg"
        iconAlt="work"
        iconSize={64}
        iconLabel="work"
        windowsTitle="work.exe"
        top={4}
        right={6}
      >
        <WindowContent
          className="grid"
          style={{
            width: "clamp(50rem, 15.5385rem + 53.8462vw, 64rem)",
            height: "clamp(30rem, 5.3846rem + 38.4615vw, 40rem)",
          }}
        >
          <>
            {/* NIGHT DANCER MOTION GRAPHIC */}
            <section
              className="mb-space-xl-2xl"
              aria-labelledby="project-title-motion"
            >
              <div className="mb-space-s-m">
                <h3 id="project-title-motion" className="text-step-3 font-bold">
                  Music Motion Graphic
                </h3>
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
                <h4 className="text-step-1 mb-space-xs-s font-bold">
                  Tools & Tech
                </h4>
                <ul className="gap-space-xs-s flex flex-wrap text-center">
                  <li className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    After Effect
                  </li>
                  <li className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    Figma
                  </li>
                  <li className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    Photoshop
                  </li>
                </ul>
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
            </section>

            {/* SHOPEE REDESIGN */}
            <section
              className="mb-space-xl-2xl"
              aria-labelledby="project-title-shopee"
            >
              <div className="mb-space-s-m">
                <h3 id="project-title-shopee" className="text-step-3 font-bold">
                  Shopee UI/UX Redesign
                </h3>
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
                <h4 className="text-step-1 mb-space-xs-s font-bold">
                  Tools & Tech
                </h4>
                <ul className="gap-space-xs-s flex flex-wrap text-center">
                  <li className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    Figma
                  </li>
                </ul>
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
            </section>

            {/* NLP */}
            <section
              className="mb-space-xl-2xl"
              aria-labelledby="project-title-nlp"
            >
              <div className="mb-space-s-m">
                <h3 id="project-title-nlp" className="text-step-3 font-bold">
                  Emotion text classification using BERT
                </h3>
                <span className="text-step--1">
                  (university thesis project)
                </span>
              </div>

              <div className="gap-space-xs-s mb-space-m-l flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-1">
                <div className="bg-pastel-white border-space-4xs-3xs p-space-2xs-xs h-fit w-full self-center">
                  <div className="gap-space-2xs-xs flex flex-col sm:grid sm:grid-cols-2">
                    <Image
                      src={"/ai-dashboard-1.jpg"}
                      alt="ai dashboard showing classification metrics"
                      width={1920}
                      height={1080}
                      className="flex-1"
                    />
                    <Image
                      src={"/ai-dashboard-2.jpg"}
                      alt="ai dashboard showing text input and emotion output"
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
                <h4 className="text-step-1 mb-space-xs-s font-bold">
                  Tools & Tech
                </h4>
                <ul className="gap-space-xs-s flex flex-wrap text-center">
                  <li className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    Streamlit
                  </li>
                  <li className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    Huggingface
                  </li>
                  <li className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    Python
                  </li>
                  <li className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    BERT
                  </li>
                  <li className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    Transformer
                  </li>
                  <li className="border-pastel-black border-space-4xs-3xs p-space-2xs-xs flex-grow">
                    NLP
                  </li>
                </ul>
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
            </section>
          </>
        </WindowContent>
      </DesktopApp>
    </>
  );
}
