"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { convertWeight, WEIGHT_UNITS, WeightUnit } from "@/lib/converters/weight";
import { LuArrowLeftRight } from "react-icons/lu";
import { copyToClipboard } from "@/lib/utils";
import ResultBox from "@/components/ResultBox";
import tr from "@/lib/i18n/tr";
import UnitSelect from "@/components/UnitSelect";
import UnitConverterRow from "@/components/UnitConverterRow";

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
        <UnitConverterRow
          value={value}
          onValueChange={setValue}
          fromUnit={from}
          toUnit={to}
          units={units}
          onFromChange={(v) => setFrom(v as WeightUnit)}
          onToChange={(v) => setTo(v as WeightUnit)}
          onSwap={swapUnits}
        />
        <ResultBox result={result} copied={copied} onCopy={handleCopy} />
      </div>
    </ToolLayout>
  );
}