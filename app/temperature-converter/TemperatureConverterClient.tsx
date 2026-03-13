"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { convertTemperature, TEMPERATURE_UNITS, TemperatureUnit } from "@/lib/converters/temperature";
import { LuArrowLeftRight } from "react-icons/lu";
import { copyToClipboard } from "@/lib/utils";
import ResultBox from "@/components/ResultBox";
import tr from "@/lib/i18n/tr";

const t = tr;
const units = Object.values(TEMPERATURE_UNITS);

export default function TemperatureConverterClient() {
  const [value, setValue] = useState<number>(0);
  const [from, setFrom] = useState<TemperatureUnit>("celsius");
  const [to, setTo] = useState<TemperatureUnit>("fahrenheit");
  const [copied, setCopied] = useState(false);

  const result = convertTemperature(value, from, to);

  const swapUnits = () => { setFrom(to); setTo(from); };
  const handleCopy = () => {
    copyToClipboard(result.toString(), () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <ToolLayout
      title={t.converters.temperature.title}
      description={t.converters.temperature.description}
      faq={[...t.converters.temperature.faq]}
    >
      <div className="grid gap-6">
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-24 text-white border border-gray-600 rounded-lg px-4 py-2 text-sm text-center focus:outline-none focus:border-blue-500"
          />
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value as TemperatureUnit)}
            className="text-white border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
          >
            {units.map((u) => <option key={u.key} value={u.key}>{u.label}</option>)}
          </select>
          <button
            onClick={swapUnits}
            aria-label={t.common.swapLabel}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors flex-shrink-0"
          >
            <LuArrowLeftRight size={18} />
          </button>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value as TemperatureUnit)}
            className="text-white border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
          >
            {units.map((u) => <option key={u.key} value={u.key}>{u.label}</option>)}
          </select>
        </div>
        <ResultBox result={result} copied={copied} onCopy={handleCopy} />
      </div>
    </ToolLayout>
  );
}