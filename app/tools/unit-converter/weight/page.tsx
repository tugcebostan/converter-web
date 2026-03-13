import { Metadata } from "next";
import WeightConverterClient from "./WeightConverterClient";
import { buildFaqSchema } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Ağırlık Dönüştürücü — Hızlı Birim Çevirici",
    description: "Kilogram, pound, ons, stone ve daha fazlası arasında anında ağırlık dönüşümü yapın.",
    openGraph: {
        title: "Ağırlık Dönüştürücü",
        description: "Ağırlık birimlerini hızlıca dönüştürün.",
        type: "website",
    },
};

const faqSchema = buildFaqSchema([
  {
    question: "Bu araç ne işe yarar?",
    answer: "Ağırlık Dönüştürücü, mg, g, kg, ton, oz, lb ve stone gibi birimler arasında anında dönüşüm yapmanı sağlar.",
  },
  {
    question: "Nasıl kullanılır?",
    answer: "Dönüştürmek istediğin değeri gir, sol taraftan kaynak birimi seç, sağ taraftan hedef birimi seç. Sonuç anında görünür.",
  },
]);
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