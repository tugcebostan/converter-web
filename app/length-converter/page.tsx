import { Metadata } from "next";
import LengthConverterClient from "./LengthConverterClient";
import { buildFaqSchema } from "@/lib/utils";

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

const faqSchema = buildFaqSchema([
  {
    question: "Bu araç ne işe yarar?",
    answer: "Uzunluk Dönüştürücü, mm, cm, metre, km, inç, ayak, yard ve mil gibi birimler arasında anında dönüşüm yapmanı sağlar.",
  },
  {
    question: "Nasıl kullanılır?",
    answer: "Dönüştürmek istediğin değeri gir, sol taraftan kaynak birimi seç, sağ taraftan hedef birimi seç. Sonuç anında görünür.",
  },
]);
export default function LengthConverterPage() {
  return (
    <> 
   {/* JSON-LD şeması — sunucu tarafında render edilir */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

  <LengthConverterClient />
  </>
  );
}