import Link from "next/link";
import Image from "next/image";

type Props = {
  linkUrl: string;
  imageUrl: string;
  imageSize: number;
  imageAlt: string;
  text: string;
};

export default function AppIcon({
  imageAlt,
  imageSize,
  imageUrl,
  linkUrl,
  text,
}: Props) {
  return (
    <Link href={linkUrl} className="flex flex-col items-center hover:bg-black/8">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={imageSize}
        height={imageSize}
      />
      {text}
    </Link>
  );
}
