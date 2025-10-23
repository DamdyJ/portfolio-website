// import Image from "next/image";
// import {
//   Sheet,
//   SheetTrigger,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetDescription,
//   SheetClose,
// } from "./ui/sheet";
// import IconLink from "./ui/icon-link";

// export default function MobileLink() {
//   return (
//     <div className="block md:hidden">
//       <Sheet>
//         <SheetTrigger className="flex w-20 flex-col items-center justify-center text-center">
//           <Image
//             src={"/icons/icon-link.svg"}
//             alt="link"
//             width={64}
//             height={64}
//           />
//           link
//         </SheetTrigger>
//         <SheetContent side="bottom" className="h-[90%] sm:h-[80%]">
//           <SheetHeader>
//             <div className="border-b-2 p-space-s-m">
//               <SheetTitle>link.exe</SheetTitle>
//               <SheetClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary focus:outline-hidden absolute right-4 top-space-s-m transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
//                 <Image
//                   src={"/icons/icon-close.svg"}
//                   alt="close"
//                   height={24}
//                   width={24}
//                 />

//                 <span className="sr-only">Close</span>
//               </SheetClose>
//             </div>
//           </SheetHeader>
//           <SheetDescription className="flex h-full items-center justify-center">
//             <div className="flex flex-col gap-10 sm:flex-row">
//               <IconLink
//                 image={{
//                   src: "/icons/icon-instagram.svg",
//                   alt: "",
//                   size: 96,
//                 }}
//                 label="instagram"
//                 href="/"
//               />
//               <IconLink
//                 image={{
//                   src: "/icons/icon-github.svg",
//                   alt: "",
//                   size: 96,
//                 }}
//                 label="github"
//                 href="/"
//               />
//               <IconLink
//                 image={{
//                   src: "/icons/icon-linkedin.svg",
//                   alt: "",
//                   size: 96,
//                 }}
//                 label="linkedin"
//                 href="/"
//               />
//             </div>
//           </SheetDescription>
//         </SheetContent>
//       </Sheet>
//     </div>
//   );
// }
