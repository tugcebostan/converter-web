"use client";

import { useState } from "react";
import { LuArrowLeftRight } from "react-icons/lu";
import ToolLayout from "@/components/ToolLayout";
import ResultBox from "@/components/ResultBox";
import { TIME_UNITS, TimeUnit, convertTime } from "@/lib/converters/time";
import { copyToClipboard } from "@/lib/utils";

const units = Object.values(TIME_UNITS);

const faqData = [
    {
        question: "Bu araç ne işe yarar?",
        answer: "Zaman Dönüştürücü, milisaniye, saniye, dakika, saat, gün, hafta, ay ve yıl arasında anında dönüşüm yapmanı sağlar.",
    },
    {
        question: "Ay ve yıl dönüşümleri neden yaklaşık?",
        answer: "Aylar 28-31 gün arasında değiştiği için ortalama değer kullanılır. 1 ay = 30.44 gün, 1 yıl = 365.25 gün olarak hesaplanır.",
    },
    {
        question: "1 yıl kaç saniyedir?",
        answer: "Ortalama 1 yıl = 31.556.952 saniyedir.",
    },
];

export default function TimeConverterClient() {
    const [value, setValue] = useState<number>(1);
    const [from, setFrom] = useState<TimeUnit>("hour");
    const [to, setTo] = useState<TimeUnit>("minute");
    const [copied, setCopied] = useState(false);

    const result = convertTime(value, from, to);

    const swapUnits = () => {
        setFrom(to);
        setTo(from);
    };

    const handleCopy = () => {
        copyToClipboard(result.toString(), () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    };

    return (
        <ToolLayout
            title="Zaman Dönüştürücü"
            description="Zaman birimleri arasında hızlı ve doğru dönüşüm yapın."
            faq={faqData}
        >
            <div className="grid gap-6">

                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        className="w-24  text-white border border-gray-600 rounded-lg px-4 py-2 text-sm text-center focus:outline-none focus:border-blue-500"
                    />
                    <select
                        value={from}
                        onChange={(e) => setFrom(e.target.value as TimeUnit)}
                        className=" text-white border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    >
                        {units.map((u) => (
                            <option key={u.key} value={u.key}>{u.label}</option>
                        ))}
                    </select>

                    <button
                        onClick={swapUnits}
                        aria-label="Birimleri değiştir"
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors flex-shrink-0"
                    >
                        <LuArrowLeftRight size={18} />
                    </button>

                    <select
                        value={to}
                        onChange={(e) => setTo(e.target.value as TimeUnit)}
                        className=" text-white border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    >
                        {units.map((u) => (
                            <option key={u.key} value={u.key}>{u.label}</option>
                        ))}
                    </select>
                </div>

                <ResultBox result={result} copied={copied} onCopy={handleCopy} />

            </div>
        </ToolLayout>
    );
}