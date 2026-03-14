"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { convertWeight, WEIGHT_UNITS, WeightUnit } from "@/lib/converters/weight";
import { LuArrowLeftRight } from "react-icons/lu";
import { copyToClipboard } from "@/lib/utils";
import ResultBox from "@/components/ResultBox";
import tr from "@/lib/i18n/tr";
import UnitSelect from "@/components/UnitSelect";

const t = tr;
const units = Object.values(WEIGHT_UNITS);

export default function WeightConverterClient() {
  const [value, setValue] = useState<number>(1);
  const [from, setFrom] = useState<WeightUnit>("kg");
  const [to, setTo] = useState<WeightUnit>("g");
  const [copied, setCopied] = useState(false);

  const result = convertWeight(value, from, to);

  const swapUnits = () => { setFrom(to); setTo(from); };
  const handleCopy = () => {
    copyToClipboard(result.toString(), () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <ToolLayout
      title={t.converters.weight.title}
      description={t.converters.weight.description}
      faq={[...t.converters.weight.faq]}
    >
      <div className="grid gap-6">
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-24 text-white border border-gray-600 rounded-lg px-4 py-2 text-sm text-center focus:outline-none focus:border-blue-500"
          />
          <UnitSelect
            options={units}
            value={from}
            onChange={(val) => setFrom(val as WeightUnit)}
            ariaLabel={t.common.fromUnit}
          />
          <button
            onClick={swapUnits}
            aria-label={t.common.swapLabel}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors flex-shrink-0"
          >
            <LuArrowLeftRight size={18} />
          </button>
          <UnitSelect
            options={units}
            value={to}
            onChange={(val) => setFrom(val as WeightUnit)}
            ariaLabel={t.common.toUnit}
          />
        </div>
        <ResultBox result={result} copied={copied} onCopy={handleCopy} />
      </div>
    </ToolLayout>
  );
}