import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAdsense from "@/components/GoogleAdsense";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://convertools.com.tr"),
  title: {
    default: "ConverTools — Ücretsiz Online Araçlar",
    template: "%s | ConverTools",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        {/* Google AdSense scripti — sadece prodüksiyonda yüklenir */}
        <GoogleAdsense />

        <Header />

        <div className="flex-1 lg:pt-4 lg:pb-8">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}