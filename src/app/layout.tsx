import type { Metadata } from "next";
import { Bebas_Neue, Newsreader, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Dallas & Allegra | A Short Film",
  description:
    "In a steel town built on dead dreams, two star-crossed lovers discover the fastest way out of hell is straight through it, together. A short film by J. Penberth Rabold.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${newsreader.variable} ${inter.variable} antialiased`}
      >
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
