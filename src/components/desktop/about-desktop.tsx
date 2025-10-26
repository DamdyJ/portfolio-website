import Image from "next/image";
import { WindowContent } from "../ui/window";
import DesktopApp from "../desktop-app";

export default function AboutDesktop() {
  return (
    <>
      <DesktopApp
        iconSrc="/icons/icon-about.svg"
        iconAlt="about"
        iconSize={64}
        iconLabel="about"
        windowsTitle="about.exe"
        top={8}
        left={14}
      >
        <WindowContent
          className="space-y-10"
          style={{
            width: "clamp(37.5rem, 19.0385rem + 28.8462vw, 45rem)",
            height: "clamp(18.75rem, 9.5192rem + 14.4231vw, 22.5rem)",
          }}
        >
          <div className="gap-space-s-m mb-space-l-xl flex flex-col">
            <Image
              src={"/stylized-profile-picture.webp"}
              width={200}
              height={200}
              alt="Damdy Junaedi"
              title="Damdy Junaedi"
              className="aspect-square h-fit self-center"
            />
            <p className="text-step-0 text-center">
              Hi! I&apos;m
              <span className="text-step-1 text-pastel-black font-bold">
                {" "}
                Damdy Junaedi
              </span>
              , a Computer Science graduate from Jakarta. I build web
              applications, from the initial design concept to a functioning
              product.
            </p>
          </div>
          <div className="gap-space-2xs-xs mb-space-l-xl flex flex-col">
            <h2 className="text-step-2 font-bold">What I Do...</h2>
            <ul className="text-step-0 ml-space-s-m space-y-space-2xs-xs list-disc">
              <li>create ui design & prototypes in Figma,</li>
              <li>build responsive frontends with Next.js / React,</li>
              <li>and implement APIs & backend with Express</li>
            </ul>
          </div>
          <div className="text-step-0 mb-space-l-xl">
            interested in working with me? send me an email at{" "}
            <a
              href="mailto:hi@damdyjunaedi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-orange-400 underline duration-100 ease-out hover:scale-105"
            >
              hi@damdyjunaedi.com
            </a>
          </div>
          <div>
            <h2 className="text-step-2 font-bold">Education</h2>
            <div className="text-step-0">
              Bachelor of Science in Computer Science <br />
              <span className="text-step--1">Graduate cum laude 2025</span>
            </div>
          </div>
        </WindowContent>
      </DesktopApp>
    </>
  );
}
