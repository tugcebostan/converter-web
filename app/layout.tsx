import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ToolBox — Ücretsiz Online Araçlar",
    template: "%s | ToolBox",   // ← Sayfa başlığı otomatik " | ToolBox" ekler
  },
  description: "Birim dönüştürücü, kod düzenleyici ve daha fazlası — ücretsiz online araçlar.",
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.className} ${geistMono.className}`}>
        <Header />
        {/* min-h-screen + flex-col + flex-1 → footer her zaman altta */}
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );

}