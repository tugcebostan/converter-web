"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { convertLength, LENGTH_UNITS, LengthUnit } from "@/lib/converters/length";
import { LuArrowLeftRight } from "react-icons/lu";
import { copyToClipboard } from "@/lib/utils";
import ResultBox from "@/components/ResultBox";

const units = Object.values(LENGTH_UNITS);

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
  const handleCopy = () => {
    copyToClipboard(result.toString(), () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
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
            className="w-24  text-white border border-gray-600 rounded-lg px-4 py-2 text-sm text-center focus:outline-none focus:border-blue-500"
          />
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value as LengthUnit)}
            className=" text-white border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
          >
            {units.map((u) => (
              <option key={u.key} value={u.key}>{u.label}</option>
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