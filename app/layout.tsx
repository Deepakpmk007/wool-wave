import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Section1 from "@/components/Section1";
import ClothSection from "@/components/ClothSection";
import Sales from "@/components/Sales";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wool & Weave | Handcrafted Knitwear",
  description:
    "Discover cozy, elegant, and sustainable knitwear at Wool & Weave. Our handcrafted collections blend timeless style with premium natural fibers.",
  keywords: [
    "knitwear",
    "handcrafted",
    "wool clothing",
    "sustainable fashion",
    "winter wear",
    "Wool & Weave",
  ],
  authors: [{ name: "Wool & Weave Team" }],
  creator: "Wool & Weave",
  openGraph: {
    title: "Wool & Weave | Handcrafted Knitwear",
    description:
      "Cozy, elegant knitwear made with love. Shop premium wool clothing that's both stylish and sustainable.",
    url: "https://yourdomain.com",
    siteName: "Wool & Weave",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wool & Weave - Handcrafted Knitwear",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wool & Weave | Handcrafted Knitwear",
    description: "Premium sustainable knitwear designed for comfort and style.",
    images: ["https://yourdomain.com/og-image.jpg"], // replace with actual image
    creator: "@yourhandle",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased w-screen overflow-x-hidden bg-[#f2e9e4]`}>
        <Nav />
        {children}
        <Section1 />
        <ClothSection />
        <Sales />
        <Footer />
      </body>
    </html>
  );
}
