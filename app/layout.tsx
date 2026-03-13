import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Sitenin genel metadata'sı — her sayfa kendi metadata'sıyla bunu ezer
export const metadata: Metadata = {
  title: {
    default: "ToolBox — Ücretsiz Online Araçlar",
    template: "%s | ToolBox",   // ← Sayfa başlığı otomatik " | ToolBox" ekler
  },
  description: "Birim dönüştürücü, kod düzenleyici ve daha fazlası — ücretsiz online araçlar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-gray-900 text-white flex flex-col min-h-screen`}
        suppressHydrationWarning  
      >
        <Header />

        {/* min-h-screen + flex-col + flex-1 → footer her zaman altta */}
        <div className="flex-1 pt-4 pb-8">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}