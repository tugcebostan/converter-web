import { Metadata } from "next";
import SpeedConverterClient from "./SpeedConverterClient";
import { buildFaqSchema } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hız Dönüştürücü — km/h, mph, Knot, Mach",
  description: "Metre/saniye, kilometre/saat, mil/saat, knot ve Mach arasında anında hız dönüşümü yapın.",
  openGraph: {
    title: "Hız Dönüştürücü",
    description: "Hız birimlerini hızlıca dönüştürün.",
    type: "website",
  },
};

const faqSchema = buildFaqSchema([
  {
    question: "Bu araç ne işe yarar?",
    answer: "Hız Dönüştürücü, m/s, km/h, mph, knot, ft/s ve Mach gibi birimler arasında anında dönüşüm yapmanı sağlar.",
  },
  {
    question: "Knot nedir?",
    answer: "Knot, denizcilik ve havacılıkta kullanılan hız birimidir. 1 knot = 1.852 km/h'dir.",
  },
]);

export default function SpeedConverterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SpeedConverterClient />
    </>
  );
}