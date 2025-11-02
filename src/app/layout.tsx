import type { Metadata } from "next";
import { Azeret_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { WebPage } from "schema-dts";
import "./globals.css";
import Script from "next/script";
const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://damdyjunaedi.com"),
  openGraph: {
    siteName: "Damdy's Portfolio",
    type: "website",
    locale: "en_US",
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
};

const jsonLd: WebPage & { "@context": string } = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://damdyjunaedi.com",
  name: "Damdy Junaedi — Web Developer",
  description:
    "Hey there! I'm Damdy, a web developer from Jakarta. This is my digital playground where I build my ideas. Feel free to look around.",
  image: "/opengraph-image.png",
  mainEntity: {
    "@type": "Person",
    name: "Damdy Junaedi",
    url: "https://damdyjunaedi.com",
    jobTitle: "Web Developer",
    sameAs: [
      "https://github.com/DamdyJ",
      "https://www.linkedin.com/in/damdy-junaedi/",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="jsonLd"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <body className={`${azeretMono.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
