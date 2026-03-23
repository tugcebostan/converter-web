"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { convertTime, TIME_UNITS, TimeUnit } from "@/lib/converters/time";
import { LuArrowLeftRight } from "react-icons/lu";
import { copyToClipboard } from "@/lib/utils";
import ResultBox from "@/components/ResultBox";
import tr from "@/lib/i18n/tr";
import UnitSelect from "@/components/UnitSelect";
import UnitConverterRow from "@/components/UnitConverterRow";

const t = tr;
const units = Object.values(TIME_UNITS);

export default function TimeConverterClient() {
  const [value, setValue] = useState<number>(1);
  const [from, setFrom] = useState<TimeUnit>("hour");
  const [to, setTo] = useState<TimeUnit>("minute");
  const [copied, setCopied] = useState(false);

  const result = convertTime(value, from, to);

  const swapUnits = () => { setFrom(to); setTo(from); };
  const handleCopy = () => {
    copyToClipboard(result.toString(), () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <ToolLayout
      title={t.converters.time.title}
      description={t.converters.time.description}
      faq={[...t.converters.time.faq]}
    >
      <div className="grid gap-6">
        <UnitConverterRow
          value={value}
          onValueChange={setValue}
          fromUnit={from}
          toUnit={to}
          units={units}
          onFromChange={(v) => setFrom(v as TimeUnit)}
          onToChange={(v) => setTo(v as TimeUnit)}
          onSwap={swapUnits}
        />
        <ResultBox result={result} copied={copied} onCopy={handleCopy} />
      </div>
    </ToolLayout>
  );
}