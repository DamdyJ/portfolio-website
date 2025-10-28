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

export default function ContactMobile() {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger className="flex min-h-20 w-20 flex-col items-center justify-center text-center font-medium">
          <Image
            src={"/icons/icon-contact.svg"}
            alt="contact"
            width={64}
            height={64}
          />
          contact
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[90%] sm:h-[80%]">
          <SheetHeader>
            <div className="p-space-s-m border-b-2">
              <SheetTitle>contact.exe</SheetTitle>
              <SheetClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary focus:outline-hidden top-space-s-m absolute right-4 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
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
          <SheetDescription className="text-step-0 flex flex-col items-center text-center">
            <h3 className="text-step-2 mb-space-2xs-xs font-bold">
              My Inbox is Ready
            </h3>
            <p className="text-step-0">
              The easiest way to reach me is by email. I&apos;m looking forward
              to hearing from you.
            </p>
            <Image
              src={"/cool-cat.png"}
              alt="A cool cat wearing sunglasses"
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
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
}
