import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetDescription,
} from "../ui/sheet";

export default function MobileContact() {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger className="flex w-20 flex-col items-center justify-center text-center">
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
          <SheetDescription className="flex h-full items-center justify-center"></SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
}
