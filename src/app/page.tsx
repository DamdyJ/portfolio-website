import AboutDesktop from "@/components/desktop/about-desktop";
import BackgroundSvg from "@/components/animated-background";

import getCurrentTime from "@/utils/get-current-time";
import AboutMobile from "@/components/mobile/about-mobile";
import ZIndexProvider from "@/components/z-index-provider";
import WorkDesktop from "@/components/desktop/work-desktop";
import WorkMobile from "@/components/mobile/work-mobile";
import LinkMobile from "@/components/mobile/link-mobile";
import LinkDesktop from "@/components/desktop/link-desktop";
import ContactDesktop from "@/components/desktop/contact-desktop";
import ContactMobile from "@/components/mobile/contact-mobile";
import Resume from "@/components/resume";
import Loading from "@/components/loading";

export default function App() {
  return (
    <>
      <Loading />

      <div className="bg-pastel-cream p-space-s-m h-svh">
        <main className="border-pastel-black border-space-4xs-3xs flex h-full flex-col justify-center lg:justify-normal">
          <div className="gap-space-l-xl z-10 mt-space-xl-2xl flex flex-col items-center justify-center  lg:m-0 lg:block lg:w-fit ">
            <div className=" flex items-center justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:m-0 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform">
              <div className="lg:mb-space-2xl-3xl">
                <h1 className="text-step-5 text-center font-bold">
                  hi! i&apos;m damdy
                </h1>
                <p className="text-step-2 text-center opacity-80">
                  a web developer
                </p>
              </div>
            </div>

            <div className="gap-space-s-m  flex flex-col items-center justify-center lg:w-fit lg:items-start lg:justify-normal">
              <div className="xs:grid-cols-5 xs:grid-rows-1 gap-space-s-m lg:mx-space-xs-s lg:my-space-s-m grid w-fit grid-cols-2 grid-rows-2 lg:grid-cols-1">
                <ZIndexProvider>
                  <AboutDesktop />
                  <AboutMobile />

                  <WorkDesktop />
                  <WorkMobile />

                  <LinkDesktop />
                  <LinkMobile />

                  <ContactDesktop />
                  <ContactMobile />
                  <div className="xs:block hidden">
                    <Resume />
                  </div>
                </ZIndexProvider>
              </div>
              <div className="xs:hidden">
                <Resume />
              </div>
            </div>
          </div>

          <div className="overflow-hidden lg:absolute lg:left-1/2 lg:top-1/2 lg:h-svh lg:w-full lg:flex-none lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform">
            <BackgroundSvg />
          </div>
        </main>
        <footer className="fixed bottom-0 right-space-s-m hidden lg:block">
          <time className="text-step--1">{getCurrentTime()}</time>
        </footer>
      </div>
    </>
  );
}
