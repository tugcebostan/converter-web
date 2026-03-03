import { Metadata } from "next";
import LengthConverterClient from "./LengthConverterClient";

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

// FAQ şeması — artık sunucu tarafında
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Bu araç ne işe yarar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Uzunluk Dönüştürücü, mm, cm, metre, km, inç, ayak, yard ve mil gibi birimler arasında anında dönüşüm yapmanı sağlar.",
      },
    },
    {
      "@type": "Question",
      name: "Nasıl kullanılır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dönüştürmek istediğin değeri gir, sol taraftan kaynak birimi seç, sağ taraftan hedef birimi seç. Sonuç anında görünür.",
      },
    },
    {
      "@type": "Question",
      name: "Sonucu nasıl kopyalarım?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sonucun yanındaki kopyala ikonuna tıklamanız yeterli. Değer panonuza otomatik olarak kopyalanır.",
      },
    },
  ],
};
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