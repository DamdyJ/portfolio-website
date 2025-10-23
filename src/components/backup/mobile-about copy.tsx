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

// export default function MobileAbout() {
//   return (
//     <div className="block md:hidden">
//       <Sheet>
//         <SheetTrigger className="flex w-20 flex-col items-center justify-center text-center">
//           <Image
//             src={"/icons/icon-about.svg"}
//             alt="about"
//             width={64}
//             height={64}
//           />
//           about
//         </SheetTrigger>
//         <SheetContent side="bottom" className="h-[90%] sm:h-[80%]">
//           <SheetHeader>
//             <div className="border-b-2 p-space-s-m">
//               <SheetTitle>about.exe</SheetTitle>
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
//           <SheetDescription>

//           </SheetDescription>
//         </SheetContent>
//       </Sheet>
//     </div>
//   );
// }
