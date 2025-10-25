import type { Metadata } from "next";
import { Azeret_Mono } from "next/font/google";

import "./globals.css";

const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Damdy's Portfolio",
  description:
    "Hey there! I'm Damdy, a web developer from Jakarta. This is my digital playground where I build my ideas. Feel free to look around",
  metadataBase: new URL("https://damdyjunaedi.com"),
  openGraph: {
    siteName: "Damdy's Portfolio",
    type: "website",
    locale: "en_US",
    title: "Damdy's Portfolio",
    description:
      "Hey there! I'm Damdy, a web developer from Jakarta. This is my digital playground where I build my ideas. Feel free to look around.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "damdyjunaedi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Damdy's Portfolio",
    description:
      "Hey there! I'm Damdy, a web developer from Jakarta. This is my digital playground where I build my ideas. Feel free to look around.",
    creator: "@damdyjunaedi",
    site: "@damdyjunaedi",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "damdyjunaedi",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  applicationName: "Damdy's Portfolio",
  appleWebApp: {
    title: "Damdy's Portfolio",
    statusBarStyle: "default",
    capable: true,
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "https://damdyjunaedi.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${azeretMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
