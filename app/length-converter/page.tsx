<<<<<<< HEAD
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
=======
"use client";
import ToolLayout from '@/components/ToolLayout';
import { convertLength, LengthUnit } from '@/lib/converters/length';
import Head from 'next/head';
import { useState } from 'react';

>>>>>>> 900d31321126d7aeb2290617ec250056536ed84d

export default function LengthConverterPage() {
<<<<<<< HEAD
  return <LengthConverterClient />;
=======
    const [value, setValue] = useState<number>(1);
    const [from, setFrom] = useState<LengthUnit>("m");
    const [to, setTo] = useState<LengthUnit>("cm");
    const result = convertLength(value, from, to);
    const [copied, setCopied] = useState(false);

    // Swap fonksiyonu
    const swapUnits = () => {
        setFrom(to);
        setTo(from);
    };

    // Kopyalama fonksiyonu
    const copyResult = async () => {
        try {
            if (!document.hasFocus()) {
                window.focus();
            }

            await navigator.clipboard.writeText(result.toString());
            setCopied(true);

            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            // Fallback (eski ama %100 çalışır)
            const textarea = document.createElement("textarea");
            textarea.value = result.toString();
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);

            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        }
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
                            aria-label="Sonucu kopyala"
                            className="ml-auto p-2 rounded hover:bg-gray-200">
                        
                            {copied ? (
                                <span className="text-green-700 font-medium">
                                    Kopyalandı ✓
                                </span>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </svg>
                            )}
                        </button>

                    </div>
                </div>
            </ToolLayout>
        </>
    );
>>>>>>> 900d31321126d7aeb2290617ec250056536ed84d
}