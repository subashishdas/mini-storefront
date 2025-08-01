import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Mini-storefront",
  description:
    "Build a slick, animated, filterable product listing site using Next.js + Tailwind CSS. This is a catalog-only storefront – no cart, no checkout. It's all about practicing frontend logic, UI polish, and product data handling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
