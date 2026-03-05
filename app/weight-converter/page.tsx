import { Metadata } from "next";
import WeightConverterClient from "./WeightConverterClient";

export const metadata: Metadata = {
    title: "Ağırlık Dönüştürücü — Hızlı Birim Çevirici",
    description: "Kilogram, pound, ons, stone ve daha fazlası arasında anında ağırlık dönüşümü yapın.",
    openGraph: {
        title: "Ağırlık Dönüştürücü",
        description: "Ağırlık birimlerini hızlıca dönüştürün.",
        type: "website",
    },
};
const faqSchema={
    "@context":"https://schema.org",
    "@type":"FAQPage",
    mainEntity:[
        {
            "@type":"Question",
            name:"Bu araç ne işe yarar?",
            acceptedAnswer:{
                "@type":"Answer",
                text: "Ağırlık Dönüştürücü, mg, g, kg, ton, oz, lb ve stone gibi birimler arasında anında dönüşüm yapmanı sağlar.",
            },
        },    {
      "@type": "Question",
      name: "Nasıl kullanılır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dönüştürmek istediğin değeri gir, sol taraftan kaynak birimi seç, sağ taraftan hedef birimi seç. Sonuç anında görünür.",
      },
    },
  ],
};
export default function WeightConverterPage(){
    return(
        <>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
        />
        <WeightConverterClient/>
        </>
    )
}