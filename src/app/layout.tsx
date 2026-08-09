import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import SiteEffects from "./SiteEffects";
import { Analytics } from "@vercel/analytics/next";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Harish Vijayakumar | FPGA & RTL Engineer",
  description:
    "Portfolio of Harish Vijayakumar, a Georgia Tech computer engineering student focused on FPGA development, RTL design, digital verification, and computer architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <SiteEffects />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
