import Image from "next/image";
import React from "react";

export default function Resume() {
  return (
    <>
      <a
        href="/pdf/Resume_Template.pdf"
        rel="noopener noreferrer"
        target="_blank"
        download={"resume.pdf"}
        className="flex w-20 flex-col"
      >
        <Image
          src={"/icons/icon-pdf.svg"}
          alt="about image"
          width={64}
          height={64}
          className="self-center"
        />
        <span className="text-step-0 white space-normal wrap-break-word text-center font-medium">
          resume.pdf
        </span>
      </a>
    </>
  );
}
