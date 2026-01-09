import type { Metadata } from "next";
import { Audiowide, Montserrat } from "next/font/google";
import "./globals.css";
import { PageTransitionProvider } from "@/components/PageTransition";

const audiowide = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Zekeri | Portfolio",
  description: "Product Designer & Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${audiowide.variable} ${montserrat.variable} antialiased`}>
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  );
}
