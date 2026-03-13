"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { convertSpeed, SPEED_UNITS, SpeedUnit } from "@/lib/converters/speed";
import { LuArrowLeftRight } from "react-icons/lu";
import { copyToClipboard } from "@/lib/utils";
import ResultBox from "@/components/ResultBox";
import tr from "@/lib/i18n/tr";

const t = tr;
const units = Object.values(SPEED_UNITS);

export default function SpeedConverterClient() {
  const [value, setValue] = useState<number>(1);
  const [from, setFrom] = useState<SpeedUnit>("kmh");
  const [to, setTo] = useState<SpeedUnit>("mph");
  const [copied, setCopied] = useState(false);

  const result = convertSpeed(value, from, to);

  const swapUnits = () => { setFrom(to); setTo(from); };
  const handleCopy = () => {
    copyToClipboard(result.toString(), () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <ToolLayout
      title={t.converters.speed.title}
      description={t.converters.speed.description}
      faq={[...t.converters.speed.faq]}
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
            onChange={(e) => setFrom(e.target.value as SpeedUnit)}
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
            onChange={(e) => setTo(e.target.value as SpeedUnit)}
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