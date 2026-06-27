import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Poppins } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "MK Deluxe Rooms | Stay Near Male Mahadeshwara Betta",
  description:
    "MK Deluxe Rooms offers clean, comfortable, and affordable AC & Non-AC rooms near Male Mahadeshwara Betta Temple with Wi-Fi, LED TV, and 24×7 hot water.",
  keywords: [
    "MK Deluxe Rooms",
    "MM Hills Rooms",
    "Male Mahadeshwara Betta Rooms",
    "Hotel near MM Hills",
    "Lodge near MM Hills",
    "Rooms in MM Hills",
    "AC Rooms",
    "Non AC Rooms",
    "Pilgrim Stay",
  ],
  authors: [{ name: "MK Deluxe Rooms" }],
  creator: "MK Deluxe Rooms",

  openGraph: {
    title: "MK Deluxe Rooms",
    description:
      "Comfortable, Clean & Affordable Rooms Near Male Mahadeshwara Betta.",
    url: "https://mkdeluxerooms.in", // Update when your domain is live
    siteName: "MK Deluxe Rooms",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "MK Deluxe Rooms",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}