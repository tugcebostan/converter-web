import { Metadata } from "next";
import TimeConverterClient from "./TimeConverterClient";
import { buildFaqSchema } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Zaman Dönüştürücü — Saniye, Dakika, Saat, Gün",
  description: "Milisaniye, saniye, dakika, saat, gün, hafta, ay ve yıl arasında anında zaman dönüşümü yapın.",
  openGraph: {
    title: "Zaman Dönüştürücü",
    description: "Zaman birimlerini hızlıca dönüştürün.",
    type: "website",
  },
};

const faqSchema = buildFaqSchema([
  {
    question: "Bu araç ne işe yarar?",
    answer: "Zaman Dönüştürücü, milisaniye, saniye, dakika, saat, gün, hafta, ay ve yıl arasında anında dönüşüm yapmanı sağlar.",
  },
  {
    question: "Ay ve yıl dönüşümleri neden yaklaşık?",
    answer: "Aylar 28-31 gün arasında değiştiği için ortalama değer kullanılır. 1 ay = 30.44 gün, 1 yıl = 365.25 gün olarak hesaplanır.",
  },
]);

export default function TimeConverterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TimeConverterClient />
    </>
  );
}