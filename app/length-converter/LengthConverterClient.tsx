"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { convertLength, LengthUnit } from "@/lib/converters/length";

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
    try {
      await navigator.clipboard.writeText(result.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
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
              <option key={u} value={u}>{u}</option>
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
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-2 items-center border p-3 rounded bg-white text-black">
          <span>Sonuç: <strong>{result}</strong></span>
          <button
            onClick={copyResult}
            aria-label="Sonucu kopyala"
            className="ml-auto p-2 rounded hover:bg-gray-200"
          >
            {copied ? (
              <span className="text-green-700 font-medium">Kopyalandı ✓</span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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