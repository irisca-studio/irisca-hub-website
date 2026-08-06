import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://irisca-hub-website.vercel.app"),

  title: {
    default: "Irisca Studio | Digital Artist & Character Designer",
    template: "%s | Irisca Studio",
  },

  description:
    "Irisca Studio creates unique characters, Vtuber models, digital art, and custom illustrations.",

  keywords: [
    "Irisca Studio",
    "Digital Artist",
    "Character Design",
    "Vtuber Model",
    "Digital Art",
    "Commission Art",
  ],

  openGraph: {
    title: "Irisca Studio",
    description:
      "Creating characters, Vtuber models and digital artwork.",
    url: "https://irisca-hub-website.vercel.app",
    siteName: "Irisca Studio",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}