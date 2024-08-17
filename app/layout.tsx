import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import AOSClient from "@/components/common/AOSClient";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fajar Al Fayha Manpower",
  description: "Talent Acquisition Made Simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <AOSClient/>

      </body>
    </html>
  );
}
