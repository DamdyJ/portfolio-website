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

export default function AboutMobile() {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger className="flex min-h-20 w-20 flex-col items-center justify-center text-center font-medium">
          <Image
            src={"/icons/icon-about.svg"}
            alt="about"
            width={64}
            height={64}
          />
          about
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[90%] sm:h-[80%]">
          <SheetHeader>
            <div className="p-space-s-m border-b-2">
              <SheetTitle>about.exe</SheetTitle>
              <SheetClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary focus:outline-hidden top-space-s-m right-space-s-m absolute transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
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
            <div className="gap-space-s-m mb-space-l-xl flex flex-col">
              <figure className="self-center">
                <Image
                  src={"/stylized-profile-picture.webp"}
                  width={200}
                  height={200}
                  alt="Portrait of Damdy Junaedi"
                  title="Damdy Junaedi"
                  className="aspect-square h-fit"
                  priority
                />
              </figure>
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

            <section
              className="gap-space-2xs-xs mb-space-l-xl flex flex-col"
              aria-labelledby="what-i-do-heading"
            >
              <h3 id="what-i-do-heading" className="text-step-2 font-bold">
                What I Do...
              </h3>
              <ul className="text-step-0 ml-space-s-m space-y-space-2xs-xs list-disc">
                <li>create ui design & prototypes in Figma,</li>
                <li>build responsive frontends with Next.js / React,</li>
                <li>and implement APIs & backend with Express</li>
              </ul>
            </section>
            <p className="text-step-0 mb-space-l-xl">
              interested in working with me? send me an email at{" "}
              <a
                href="mailto:hi@damdyjunaedi.com"
                className="font-bold text-orange-400 underline duration-100 ease-out hover:scale-105"
              >
                hi@damdyjunaedi.com
              </a>
            </p>

            <section aria-labelledby="education-heading">
              <h3 id="education-heading" className="text-step-2 font-bold">
                Education
              </h3>
              <div className="text-step-0">
                <p>Bachelor of Science in Computer Science</p>
                <p className="text-step--1">Graduate cum laude, 2025</p>
              </div>
            </section>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
}
