import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const melodrama = localFont({
  src: [
    { path: "../../public/fonts/Melodrama-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Melodrama-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Melodrama-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Melodrama-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-melodrama",
  display: "swap",
});

const ranade = localFont({
  src: [
    { path: "../../public/fonts/Ranade-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Ranade-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/Ranade-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Ranade-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-ranade",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://six-points-creative-spaces.vercel.app"),
  title: "Six Points Creative Spaces · Event Venue · Bloomfield NJ",
  description:
    "An intimate event space in the heart of Bloomfield Center. Birthdays, showers, pop-ups, photo shoots and private gatherings at 547 Bloomfield Ave, Bloomfield NJ 07003.",
  openGraph: {
    title: "Six Points Creative Spaces · Your Occasion, Your Room",
    description:
      "An intimate event space in Bloomfield Center. Birthdays, showers, pop-ups, photo shoots. 547 Bloomfield Ave, Bloomfield NJ.",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#100e0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${melodrama.variable} ${ranade.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
