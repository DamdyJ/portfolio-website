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
  description: "Hey there! I'm Damdy, a web developer from Jakarta. This is my digital playground where I build my ideas. Feel free to look around",
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
