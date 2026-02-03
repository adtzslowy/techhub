import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { BackToTop } from "./components/layout/BackToTop";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TechHub",
    template: "%s - TechHub"
  },
  description: "Website resmi TechHub Invokasi Politeknik Negeri Ketapang"
};

const grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-grotesque",
  display: "swap"
})

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${grotesque.variable} ${sans.variable} ${mono.variable} `}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased"
      >
        <Providers>
          {children}
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
