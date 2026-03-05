"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { convertLength, LengthUnit } from "@/lib/converters/length";
import { LuArrowLeftRight } from "react-icons/lu";
import { copyToClipboard } from "@/lib/utils";

const units: LengthUnit[] = ["mm", "cm", "m", "km", "inch", "foot", "yard", "mile"];

export default function LengthConverterClient() {
  const [value, setValue] = useState<number>(1);
  const [from, setFrom] = useState<LengthUnit>("m");
  const [to, setTo] = useState<LengthUnit>("cm");
  const [copied, setCopied] = useState(false);

  const result = convertLength(value, from, to);

  const swapUnits = () => {
    setFrom(to);
    setTo(from);
  };

const copyResult = async () => {
  await copyToClipboard(result.toString(), () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  });
};
  // Dosyanın en üstüne bu sabiti ekle (useState'lerin üstüne)
  const faqData = [
    {
      question: "Bu araç ne işe yarar?",
      answer:
        "Uzunluk Dönüştürücü, mm, cm, metre, km, inç, ayak, yard ve mil gibi birimler arasında anında dönüşüm yapmanı sağlar.",
    },
    {
      question: "Nasıl kullanılır?",
      answer:
        "Dönüştürmek istediğin değeri gir, sol taraftan kaynak birimi seç, sağ taraftan hedef birimi seç. Sonuç anında görünür.",
    },
    {
      question: "Sonucu nasıl kopyalarım?",
      answer:
        "Sonucun yanındaki kopyala ikonuna tıklamanız yeterli. Değer panonuza otomatik olarak kopyalanır.",
    },
  ];
  return (
    <ToolLayout
      title="Uzunluk Dönüştürücü"
      description="Uzunluk birimleri arasında hızlı ve doğru dönüşüm yapın."
      faq={faqData}
    >
      <div className="grid gap-6">

        <div className="flex gap-2 items-center">
          {/* Değer input */}
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-24 bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 text-sm text-center focus:outline-none focus:border-blue-500"
          />
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value as LengthUnit)}
            className="bg-gray-800 text-white border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
          >
            {units.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
          {/* Swap butonu */}
          <button
            onClick={swapUnits}
            aria-label="Birimleri değiştir"
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors flex-shrink-0"
          >
            <LuArrowLeftRight size={18} />
          </button>

          <select
            value={to}
            onChange={(e) => setTo(e.target.value as LengthUnit)}
            className="bg-gray-800 text-white border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
          >
            {units.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between bg-gray-800 border border-gray-600 rounded-lg px-4 py-3">
          <div>
            <p className="text-xs text-gray-400 mb-1">Sonuç</p>
            <p className="text-2xl font-bold text-white">{result}</p>
          </div>
          <button
            onClick={copyResult}
            aria-label="Sonucu kopyala"
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {copied ? (
              <span className="text-green-400 text-sm font-medium">Kopyalandı ✓</span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="text-gray-400">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </ToolLayout>
  );
}