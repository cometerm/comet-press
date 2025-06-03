import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Click Speed",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
  },
  description: "Test your click speed and improve your skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${funnelSans.variable} antialiased bg-indigo-300`}>
        {children}
      </body>
    </html>
  );
}
