"use client";
import ToolLayout from '@/components/ToolLayout';
import { convertLength, LengthUnit } from '@/lib/converters/length';
import Head from 'next/head';
import { useState } from 'react';
import { FaCopy } from "react-icons/fa6"; // <-- burayı ekle

const units: LengthUnit[] = [
    "mm",
    "cm",
    "m",
    "km",
    "inch",
    "foot",
    "yard",
    "mile",
];
export default function LengthConverterPage() {
    const [value, setValue] = useState<number>(1);
    const [from, setFrom] = useState<LengthUnit>("m");
    const [to, setTo] = useState<LengthUnit>("cm");
    const result = convertLength(value, from, to);

    // Swap fonksiyonu
    const swapUnits = () => {
        setFrom(to);
        setTo(from);
    };

    // Kopyalama fonksiyonu
    const copyResult = () => {
        navigator.clipboard.writeText(result.toString());
        alert("Sonuç kopyalandı!");
    };

    //JSON-LD for FAQ schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Bu araç ne işe yarar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Length Converter aracı, hızlı ve doğru uzunluk dönüşümü yapmanı sağlar."
                }
            },
            {
                "@type": "Question",
                "name": "Nasıl kullanılır?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Değeri gir, birimi seç ve sonucu anında gör."
                }
            }
        ]
    };

    return (
        <>
            <Head>
                <title>Length Converter – Hızlı Uzunluk Dönüşümü</title>
                <meta
                    name="description"
                    content="Metre, santimetre, kilometre ve diğer uzunluk birimleri arasında hızlı ve doğru dönüşüm yapın."
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </Head>

            <ToolLayout
                title="Length Converter"
                description="Uzunluk birimleri arasında hızlı ve doğru dönüşüm yapın."
            >

                {/* Grid: input + birimler + swap */}
                <div className="grid gap-4">
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        className="border p-2 rounded bg-gray-800 text-white"
                    />
                    <div className="flex gap-2 items-center">
                        <select
                            value={from}
                            onChange={(e) => setFrom(e.target.value as LengthUnit)}
                            className="border p-2 rounded bg-gray-800 text-white"
                        >
                            {units.map((u) => (
                                <option key={u} value={u}>
                                    {u}
                                </option>
                            ))}
                        </select>

                        <button
                            onClick={swapUnits}
                            className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
                        >
                            ↔
                        </button>

                        <select
                            value={to}
                            onChange={(e) => setTo(e.target.value as LengthUnit)}
                            className="border p-2 rounded bg-gray-800 text-white"
                        >
                            {units.map((u) => (
                                <option key={u} value={u}>
                                    {u}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Sonuç ve kopyala */}
                    <div className="flex gap-2 items-center border p-3 rounded bg-white text-black">
                        <span>Sonuç: <strong>{result}</strong></span>
                        <button
                            onClick={copyResult}
                            className="ml-auto p-2 rounded hover:bg-gray-200"
                            title="Kopyala"
                        >
                            <FaCopy className="text-black" />
                        </button>
                    </div>

                </div>
            </ToolLayout>
        </>
    );
}