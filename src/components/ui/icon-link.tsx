import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

type ImageProps = {
  src: string;
  alt: string;
  size: number;
};

interface IconLinkProps extends ComponentProps<"a"> {
  image: ImageProps;
  label: string;
  href: string;
}

export default function IconLink({
  image,
  className,
  label,
  href,
  ...props
}: IconLinkProps) {
  return (
    <>
      <Link href={href} className={cn("flex flex-col", className)} {...props}>
        <Image
          src={image.src}
          width={image.size}
          height={image.size}
          alt={image.alt}
          className="self-center duration-100 ease-out hover:scale-105"
        />
        <span className="text-step-1 text-center font-medium">{label}</span>
      </Link>
    </>
  );
}
