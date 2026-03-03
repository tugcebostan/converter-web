// "use client" YOK — bu bir sunucu bileşeni
import { Metadata } from "next";
import LengthConverterClient from "./LengthConverterClient";

// ✅ App Router'da SEO böyle yapılır
export const metadata: Metadata = {
  title: "Uzunluk Dönüştürücü — Hızlı Birim Çevirici",
  description:
    "Metre, santimetre, kilometre, inç, ayak ve daha fazlası arasında anında uzunluk dönüşümü yapın.",
  openGraph: {
    title: "Uzunluk Dönüştürücü",
    description: "Uzunluk birimlerini hızlıca dönüştürün.",
    type: "website",
  },
};

export default function LengthConverterPage() {
  return <LengthConverterClient />;
}