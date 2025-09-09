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
      {/* <link rel="icon" href="/favicon.ico" sizes="any" className="favicon"/> */}
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes=""
        className="favicon"
      />
      <body className={`${openSans.variable} ${cormorantUpright.variable}`}>
        {children}
      </body>
    </html>
  );
}
