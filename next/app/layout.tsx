import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {Header} from "@/src/components/shared/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Headless Next",
  description: "Working with Next.js and WordPress",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <Header/>
      <main>
        {children}
      </main>
      </body>
      </html>
  );
}
