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

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Damdy's Portfolio",
  description:
    "Hey there! I'm Damdy, a web developer from Jakarta. This is my digital playground where I build my ideas. Feel free to look around",
  keywords: ["portfolio", "damdy", "web developer"],
  alternates: {
    canonical: "https://damdyjunaedi.com",
  },
};

export default function App() {
  const nowIso = new Date().toISOString();
  return (
    <>
      <Loading />

      <div className="bg-pastel-cream p-space-s-m h-svh">
        <div className="border-pastel-black border-space-4xs-3xs flex h-full flex-col justify-center lg:justify-normal">
          <div className="gap-space-l-xl mt-space-xl-2xl z-10 flex flex-col items-center justify-center lg:m-0 lg:block lg:w-fit">
            <header className="flex items-center justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:m-0 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform">
              <div className="lg:mb-space-2xl-3xl">
                <h1 className="text-step-5 text-center font-bold">
                  hi! i&apos;m damdy
                </h1>
                <p className="text-step-2 text-center opacity-80">
                  a web developer
                </p>
              </div>
            </header>

            <main
              id="main"
              role="main"
              className="gap-space-s-m flex flex-col items-center justify-center lg:w-fit lg:items-start lg:justify-normal"
            >
              <div className="xs:grid-cols-5 xs:grid-rows-1 gap-space-s-m lg:mx-space-xs-s lg:my-space-s-m grid w-fit grid-cols-2 grid-rows-2 lg:grid-cols-1">
                <ZIndexProvider>
                  <section aria-labelledby="about-heading" className="group">
                    <h2 id="about-heading" className="sr-only">
                      About
                    </h2>
                    <AboutDesktop />
                    <AboutMobile />
                  </section>

                  <section aria-labelledby="work-heading" className="group">
                    <h2 id="work-heading" className="sr-only">
                      Work
                    </h2>
                    <WorkDesktop />
                    <WorkMobile />
                  </section>

                  <section aria-labelledby="links-heading" className="group">
                    <h2 id="links-heading" className="sr-only">
                      Links
                    </h2>
                    <LinkDesktop />
                    <LinkMobile />
                  </section>

                  <section aria-labelledby="contact-heading" className="group">
                    <h2 id="contact-heading" className="sr-only">
                      Contact
                    </h2>
                    <ContactDesktop />
                    <ContactMobile />
                  </section>

                  <section
                    aria-labelledby="resume-heading"
                    className="xs:block hidden"
                  >
                    <h2 id="resume-heading" className="sr-only">
                      Resume
                    </h2>
                    <Resume />
                  </section>
                </ZIndexProvider>
              </div>

              <section
                aria-labelledby="resume-mobile-heading"
                className="xs:hidden"
              >
                <h2 id="resume-mobile-heading" className="sr-only">
                  Resume
                </h2>
                <Resume />
              </section>
            </main>
          </div>

          <div
            aria-hidden="true"
            className="overflow-hidden lg:absolute lg:left-1/2 lg:top-1/2 lg:h-svh lg:w-full lg:flex-none lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform"
          >
            <BackgroundSvg />
          </div>
        </div>
        <footer className="right-space-s-m fixed bottom-0 hidden lg:block">
          <time dateTime={nowIso} className="text-step--1">
            {getCurrentTime()}
          </time>
        </footer>
      </div>
    </>
  );
}
