"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { convertArea, AREA_UNITS, AreaUnit } from "@/lib/converters/area";
import { LuArrowLeftRight } from "react-icons/lu";
import { copyToClipboard } from "@/lib/utils";
import ResultBox from "@/components/ResultBox";
import tr from "@/lib/i18n/tr";
import UnitSelect from "@/components/UnitSelect";
import UnitConverterRow from "@/components/UnitConverterRow";

const t = tr;
const units = Object.values(AREA_UNITS);

export default function AreaConverterClient() {
  const [value, setValue] = useState<number>(1);
  const [from, setFrom] = useState<AreaUnit>("m2");
  const [to, setTo] = useState<AreaUnit>("donum");
  const [copied, setCopied] = useState(false);

  const result = convertArea(value, from, to);

  const swapUnits = () => { setFrom(to); setTo(from); };
  const handleCopy = () => {
    copyToClipboard(result.toString(), () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <ToolLayout
      title={t.converters.area.title}
      description={t.converters.area.description}
      faq={[...t.converters.area.faq]}
    >
      <div className="grid gap-6">
        <UnitConverterRow
          value={value}
          onValueChange={setValue}
          fromUnit={from}
          toUnit={to}
          units={units}
          onFromChange={(v) => setFrom(v as AreaUnit)}
          onToChange={(v) => setTo(v as AreaUnit)}
          onSwap={swapUnits}
        />
        <ResultBox result={result} copied={copied} onCopy={handleCopy} />
      </div>
    </ToolLayout>
  );
}