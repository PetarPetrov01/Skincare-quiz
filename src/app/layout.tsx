import type { Metadata } from "next";
import "./globals.css";

import { Red_Hat_Text, Chonburi } from "next/font/google";

const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  variable: "--font-red-hat-text",
});

const chonburi = Chonburi({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-chonburi",
});

export const metadata: Metadata = {
  title: "Skincare quiz",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatText.variable} ${chonburi.variable} bg-white antialiased min-h-[100vh]`}
      >
        {children}
      </body>
    </html>
  );
}
