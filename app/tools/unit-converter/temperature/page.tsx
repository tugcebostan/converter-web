import { buildFaqSchema } from "@/lib/utils";
import { Metadata } from "next";
import TemperatureConverterClient from "./TemperatureConverterClient";

export const metadata: Metadata = {
    title: "Sıcaklık Dönüştürücü — Celsius, Fahrenheit, Kelvin",
    description: "Celsius, Fahrenheit ve Kelvin birimleri arasında anında sıcaklık dönüşümü yapın.",
    openGraph: {
        title: "Sıcaklık Dönüştürücü",
        description: "Sıcaklık birimlerini hızlıca dönüştürün.",
        type: "website",
    },
}

const faqSchema = buildFaqSchema([
    {
        question: "Bu araç ne işe yarar?",
        answer: "Sıcaklık Dönüştürücü, Celsius, Fahrenheit ve Kelvin birimleri arasında anında dönüşüm yapmanı sağlar.",
    },
    {
        question: "Fahrenheit'ı Celsius'a nasıl çevirir?",
        answer: "Formül: (°F - 32) × 5/9 = °C. Örneğin 98.6°F = 37°C'dir.",
    },
]);

export default function TemperatureConverterPage() {
return(
    <>
    <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}
    />
    <TemperatureConverterClient/>
    </>
)
}