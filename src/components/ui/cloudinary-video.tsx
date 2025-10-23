"use client";

import { CldVideoPlayer, CldVideoPlayerProps } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function CloudinaryVideo({ ...props }: CldVideoPlayerProps) {
  return (
    <>
      <CldVideoPlayer muted controls={false} autoplay={true} {...props} />
    </>
  );
}
