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

const siteUrl = "https://dallasandallegra.com";
const title = "Dallas & Allegra — Love Is Destruction";
const description =
  "She's got a plane ticket to Oxford. He's got a safe full of cash and one last score. Dallas & Allegra is a short film set in a Pittsburgh steel town, written and directed by J. Penberth Rabold.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Dallas & Allegra",
  },
  description,
  applicationName: "Dallas & Allegra",
  keywords: [
    "Dallas & Allegra",
    "short film",
    "Pittsburgh short film",
    "Rust Belt film",
    "romance crime short film",
    "J. Penberth Rabold",
    "indie short film 2026",
  ],
  authors: [{ name: "J. Penberth Rabold" }],
  creator: "J. Penberth Rabold",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "video.movie",
    url: siteUrl,
    siteName: "Dallas & Allegra",
    title,
    description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dallas and Allegra stand silhouetted before a full moon over the Pittsburgh skyline, from the short film Dallas & Allegra.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  other: {
    "theme-color": "#0a0e14",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Movie",
    name: "Dallas & Allegra",
    url: siteUrl,
    image: `${siteUrl}/og-image.jpg`,
    description,
    genre: ["Romance", "Crime", "Short Film"],
    inLanguage: "en",
    countryOfOrigin: { "@type": "Country", name: "United States" },
    contentLocation: {
      "@type": "Place",
      name: "Pittsburgh, Pennsylvania",
    },
    director: { "@type": "Person", name: "J. Penberth Rabold" },
    creator: { "@type": "Person", name: "J. Penberth Rabold" },
    producer: { "@type": "Person", name: "Shannon Geary" },
    musicBy: { "@type": "Person", name: "Jacob Luttrell" },
    sameAs: ["https://www.instagram.com/dallasandallegra/"],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${bebas.variable} ${newsreader.variable} ${inter.variable} antialiased`}
      >
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
