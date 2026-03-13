import { Metadata } from "next";
import AreaConverterClient from "./AreaConverterClient";
import { buildFaqSchema } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Alan Dönüştürücü — m², Dönüm, Hektar, Akre",
  description: "Metre kare, kilometre kare, hektar, dönüm, akre ve daha fazlası arasında anında alan dönüşümü yapın.",
  openGraph: {
    title: "Alan Dönüştürücü",
    description: "Alan birimlerini hızlıca dönüştürün.",
    type: "website",
  },
};

const faqSchema = buildFaqSchema([
  {
    question: "Bu araç ne işe yarar?",
    answer: "Alan Dönüştürücü, metre kare, kilometre kare, hektar, dönüm, akre ve daha fazlası arasında anında dönüşüm yapmanı sağlar.",
  },
  {
    question: "Dönüm nedir?",
    answer: "Dönüm, Türkiye'de yaygın kullanılan geleneksel bir alan ölçü birimidir. 1 dönüm = 1.000 metre karedir.",
  },
]);

export default function AreaConverterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AreaConverterClient />
    </>
  );
}