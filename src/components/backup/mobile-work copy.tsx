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
// import ColorPalette from "./ColorPalette";

// export default function MobileWork() {
//   return (
//     <div className="block md:hidden">
//       <Sheet>
//         <SheetTrigger className="flex w-20 flex-col items-center justify-center text-center md:hidden">
//           <Image
//             src={"/icons/icon-work.svg"}
//             alt="work"
//             width={64}
//             height={64}
//           />
//           work
//         </SheetTrigger>
//         <SheetContent
//           side="bottom"
//           className="[&::-webkit-scrollbar-thumb]:bg-pastel-black [&::-webkit-scrollbar-track]:border-pastel-black block h-[90%] overflow-auto overflow-y-auto border-t-2 sm:h-[80%] md:hidden [&::-webkit-scrollbar-track]:border-l-2 [&::-webkit-scrollbar]:w-2"
//         >
//           <SheetHeader>
//             <div className="border-b-2 p-space-s-m">
//               <SheetTitle>work.exe</SheetTitle>
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
//             <SheetDescription>
//               <div className="flex items-center gap-space-s-m">
//                 <div className="space-y-2">
//                   <div className="text-2xl font-bold">Work 1</div>
//                   <div className="mb-4 self-center">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Enim natus maiores eaque distinctio autem perferendis rerum
//                     praesentium nisi? Doloribus repudiandae velit minus
//                     exercitationem amet impedit dolore suscipit unde eveniet
//                     veniam?
//                   </div>
//                   <div className="flex gap-space-s-m">
//                     <span className="border-pastel-black bg-pastel-white border-space-4xs-3xs p-space-2xs-xs text-xs">
//                       After Effect
//                     </span>
//                     <span className="border-pastel-black bg-pastel-white border-space-4xs-3xs p-space-2xs-xs text-xs">
//                       Figma
//                     </span>
//                     <span className="border-pastel-black bg-pastel-white border-space-4xs-3xs p-space-2xs-xs text-xs">
//                       Photoshop
//                     </span>
//                   </div>
//                   <ColorPalette />
//                 </div>
//                 <Image
//                   src={"/work-1.png"}
//                   alt="work 1"
//                   width={340}
//                   height={218}
//                 />
//                 {/* <VideoClip /> */}
//               </div>
//             </SheetDescription>
//           </SheetHeader>
//         </SheetContent>
//       </Sheet>
//     </div>
//   );
// }
