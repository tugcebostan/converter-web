"use client"

import ResultBox from "@/components/ResultBox";
import ToolLayout from "@/components/ToolLayout";
import { convertTemperature, TEMPERATURE_UNITS, TemperatureUnit } from "@/lib/converters/temperature"
import { copyToClipboard } from "@/lib/utils";
import { useState } from "react";
import { LuArrowLeftRight } from "react-icons/lu";

const units = Object.values(TEMPERATURE_UNITS);

const faqData = [
    {
        question: "Bu araç ne işe yarar?",
        answer: "Sıcaklık Dönüştürücü, Celsius, Fahrenheit ve Kelvin birimleri arasında anında dönüşüm yapmanı sağlar.",
    },
    {
        question: "Fahrenheit'ı Celsius'a nasıl çevirir?",
        answer: "Formül: (°F - 32) × 5/9 = °C. Örneğin 98.6°F = 37°C'dir.",
    },
    {
        question: "Kelvin nedir?",
        answer: "Kelvin, bilimsel alanda kullanılan mutlak sıcaklık birimidir. 0 Kelvin, teorik olarak ulaşılabilecek en düşük sıcaklıktır (−273.15°C).",
    },
];
export default function TemperatureConverterClient() {
    const [value, setValue] = useState<number>(0);
    const [from, setFrom] = useState<TemperatureUnit>("celsius");
    const [to, setTo] = useState<TemperatureUnit>("fahrenheit");
    const [copied, setCopied] = useState<boolean>(false);

    const result = convertTemperature(value, from, to);

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
            title="Sıcaklık Dönüştürücü"
            description="Celsius, Fahrenheit ve Kelvin arasında hızlı ve doğru dönüşüm yapın."
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
                        onChange={(e) => setFrom(e.target.value as TemperatureUnit)}
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
                        onChange={(e) => setTo(e.target.value as TemperatureUnit)}
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
    )
};