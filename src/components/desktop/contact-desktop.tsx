import Image from "next/image";
import { WindowContent } from "../ui/window";
import DesktopApp from "../desktop-app";

export default function ContactDesktop() {
  return (
    <>
      <DesktopApp
        iconSrc="/icons/icon-contact.svg"
        iconAlt="contact"
        iconSize={64}
        iconLabel="contact"
        windowsTitle="contact.exe"
        right={10}
        bottom={4}
      >
        <WindowContent
          className="flex flex-col items-center"
          style={{
            width: "clamp(25rem, 12.6923rem + 19.2308vw, 30rem)",
          }}
        >
          <div className="text-step-2 mb-space-2xs-xs font-bold">
            My Inbox is Ready
          </div>
          <div className="text-step-0">
            The easiest way to reach me is by email. I&apos;m looking forward to
            hearing from you.
          </div>
          <Image
            src={"/cool-cat.png"}
            alt="a"
            width={164}
            height={219}
            className="mb-space-l-xl"
          />
          <a
            href="mailto:hi@damdyjunaedi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-space-s-m bg-pastel-red mb-space-m-l border-4 font-medium drop-shadow-[4px_4px_0px_rgba(51,47,46,1)] duration-100 ease-out hover:scale-[1.02] active:translate-y-1 active:scale-[0.98] active:drop-shadow-[0px_0px_0px_rgba(51,47,46,1)]"
          >
            Send me an email
          </a>
        </WindowContent>
      </DesktopApp>
    </>
  );
}
