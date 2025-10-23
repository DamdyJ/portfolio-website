import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps } from "react";

type ImageProps = {
  src: string;
  alt: string;
  size: number;
};

interface AppIconProps extends ComponentProps<"button"> {
  image: ImageProps;
  label: string;
  onClick?: () => void;
}

export default function AppIcon({
  image,
  className,
  label,
  onClick,
  ...props
}: AppIconProps) {
  return (
    <>
      <button
        className={cn(
          "flex w-20 flex-col items-center justify-center",
          className,
        )}
        {...props}
        onClick={onClick}
      >
        <Image
          src={image.src}
          width={image.size}
          height={image.size}
          alt={image.alt}
          className="self-center"
        />
        <span className="font-medium text-step-0">{label}</span>
      </button>
    </>
  );
}
