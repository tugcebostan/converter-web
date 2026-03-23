"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { convertLength, LENGTH_UNITS, LengthUnit } from "@/lib/converters/length";
import { LuArrowLeftRight } from "react-icons/lu";
import { copyToClipboard } from "@/lib/utils";
import ResultBox from "@/components/ResultBox";
import tr from "@/lib/i18n/tr";
import UnitSelect from "@/components/UnitSelect";
import UnitConverterRow from "@/components/UnitConverterRow";

const t = tr;
const units = Object.values(LENGTH_UNITS);

export default function LengthConverterClient() {
  const [value, setValue] = useState<number>(1);
  const [from, setFrom] = useState<LengthUnit>("m");
  const [to, setTo] = useState<LengthUnit>("cm");
  const [copied, setCopied] = useState(false);

  const result = convertLength(value, from, to);

  const swapUnits = () => { setFrom(to); setTo(from); };
  const handleCopy = () => {
    copyToClipboard(result.toString(), () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <ToolLayout
      title={t.converters.length.title}
      description={t.converters.length.description}
      faq={[...t.converters.length.faq]}
    >
      <div className="grid gap-6">
        <UnitConverterRow
          value={value}
          onValueChange={setValue}
          fromUnit={from}
          toUnit={to}
          units={units}
          onFromChange={(v) => setFrom(v as LengthUnit)}
          onToChange={(v) => setTo(v as LengthUnit)}
          onSwap={swapUnits}
        />
        <ResultBox result={result} copied={copied} onCopy={handleCopy} />
      </div>

    </ToolLayout>
  );
}