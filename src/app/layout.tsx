import type { Metadata } from "next";
import { Open_Sans, Cormorant_Upright } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-alt",
  subsets: ["latin"],
});

const cormorantUpright = Cormorant_Upright({
  variable: "--font-base",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Gericht restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${cormorantUpright.variable}`}>
        {children}
      </body>
    </html>
  );
}
