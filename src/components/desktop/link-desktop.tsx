import { WindowContent } from "../ui/window";
import IconLink from "../ui/icon-link";
import DesktopApp from "../desktop-app";

export default function LinkDesktop() {
  return (
    <>
      <DesktopApp
        iconSrc="/icons/icon-link.svg"
        iconAlt="link"
        iconSize={64}
        iconLabel="link"
        windowsTitle="link.exe"
        bottom={8}
        left={12}
      >
        <WindowContent className="flex items-center justify-center">
          <div className="flex gap-10">
            <IconLink
              image={{
                src: "/icons/icon-instagram.svg",
                alt: "instagram",
                size: 96,
              }}
              label="instagram"
              href="https://www.instagram.com/damdy_junaedi/"
            />
            <IconLink
              image={{
                src: "/icons/icon-github.svg",
                alt: "github",
                size: 96,
              }}
              label="github"
              href="https://github.com/DamdyJ"
            />
            <IconLink
              image={{
                src: "/icons/icon-linkedin.svg",
                alt: "linkedin",
                size: 96,
              }}
              label="linkedin"
              href="https://www.linkedin.com/in/damdy-junaedi/"
            />
          </div>
        </WindowContent>
      </DesktopApp>
    </>
  );
}
