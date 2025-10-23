// import AboutWindows from "@/components/about-windows";
// import BackgroundSvg from "@/components/background-svg";
// import ContactWindows from "@/components/contact-windows";
// import LinkWindows from "@/components/link-windows";
// import Loading from "@/components/loading";
// import MobileAbout from "@/components/mobile-about";
// import MobileContact from "@/components/mobile-contact";
// import MobileLink from "@/components/mobile-link";
// import MobileWork from "@/components/mobile-work";
// import WorkWindows from "@/components/work-windows";
// import ZIndexProvider from "@/components/z-index-provider";
// import getCurrentTime from "@/utils/get-current-time";
// import Image from "next/image";

// export default function App() {
//   return (
//     <>
//       <Loading />

//       <main className="h-svh w-full overflow-hidden p-space-s-m md:p-8">
//         <div className="absolute left-0 w-full overflow-hidden text-3xl font-bold sm:text-4xl lg:left-1/2 lg:top-1/2 lg:w-fit lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform lg:text-6xl">
//           <h1 className="mt-20 text-center lg:mb-20 lg:mt-0">
//             hi! i&apos;m damdy
//           </h1>
//         </div>
//         <section className="h-full border-space-4xs-3xs sm:border-4">
//           <div className="flex h-full flex-col items-center justify-center gap-8 space-y-6 p-space-s-m lg:items-start lg:justify-normal">
//             <div className="m-0 grid grid-cols-2 grid-rows-2 gap-8 lg:block lg:gap-0">
//               <ZIndexProvider>
//                 <AboutWindows />
//                 <MobileAbout />
//                 <LinkWindows />
//                 <MobileLink />
//                 <WorkWindows />
//                 <MobileWork />
//                 <ContactWindows />
//                 <MobileContact />
//               </ZIndexProvider>
//             </div>
//             <a
//               href="/pdf/Resume_Template.pdf"
//               download={"resume.pdf"}
//               className="flex w-20 flex-col"
//             >
//               <Image
//                 src={"/icons/icon-pdf.svg"}
//                 alt="about image"
//                 width={64}
//                 height={64}
//                 className="self-center"
//               />
//               <span className="whitespace-normal break-words text-center font-medium">
//                 resume.pdf
//               </span>
//             </a>
//           </div>
//         </section>
//         <BackgroundSvg />
//         <footer className="text-md flex justify-end">
//           <time>{getCurrentTime()}</time>
//         </footer>
//       </main>
//     </>
//   );
// }
