"use client";

import { useState } from "react";
import { LuArrowLeftRight } from "react-icons/lu";
import ToolLayout from "@/components/ToolLayout";
import ResultBox from "@/components/ResultBox";
import { AREA_UNITS, AreaUnit, convertArea } from "@/lib/converters/area";
import { copyToClipboard } from "@/lib/utils";

const units = Object.values(AREA_UNITS);

const faqData = [
    {
        question: "Bu araç ne işe yarar?",
        answer: "Alan Dönüştürücü, metre kare, kilometre kare, hektar, dönüm, akre ve daha fazlası arasında anında dönüşüm yapmanı sağlar.",
    },
    {
        question: "Dönüm nedir?",
        answer: "Dönüm, Türkiye'de yaygın kullanılan geleneksel bir alan ölçü birimidir. 1 dönüm = 1.000 metre karedir.",
    },
    {
        question: "Hektar ile dönüm arasındaki fark nedir?",
        answer: "1 hektar = 10.000 metre kare, 1 dönüm = 1.000 metre karedir. Yani 1 hektar = 10 dönümdür.",
    },
];

export default function AreaConverterClient() {
    const [value, setValue] = useState<number>(1);
    const [from, setFrom] = useState<AreaUnit>("m2");
    const [to, setTo] = useState<AreaUnit>("donum");
    const [copied, setCopied] = useState(false);

    const result = convertArea(value, from, to);

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
            title="Alan Dönüştürücü"
            description="Alan birimleri arasında hızlı ve doğru dönüşüm yapın."
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
                        onChange={(e) => setFrom(e.target.value as AreaUnit)}
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
                        onChange={(e) => setTo(e.target.value as AreaUnit)}
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