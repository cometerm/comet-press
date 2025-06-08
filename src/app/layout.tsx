import { ReactScan } from "@/lib/react-scan";
import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comet Generator Template",
  icons: {
    icon: "/favicon-modified.png",
    shortcut: "/favicon-modified.png",
  },
  description: "Comet Generator Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactScan />
      <body className={`${funnelSans.variable} antialiased bg-indigo-300`}>
        {children}
      </body>
    </html>
  );
}
