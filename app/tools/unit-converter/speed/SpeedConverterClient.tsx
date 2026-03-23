"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { convertSpeed, SPEED_UNITS, SpeedUnit } from "@/lib/converters/speed";
import { LuArrowLeftRight } from "react-icons/lu";
import { copyToClipboard } from "@/lib/utils";
import ResultBox from "@/components/ResultBox";
import tr from "@/lib/i18n/tr";
import UnitSelect from "@/components/UnitSelect";
import UnitConverterRow from "@/components/UnitConverterRow";

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
        <UnitConverterRow
          value={value}
          onValueChange={setValue}
          fromUnit={from}
          toUnit={to}
          units={units}
          onFromChange={(v) => setFrom(v as SpeedUnit)}
          onToChange={(v) => setTo(v as SpeedUnit)}
          onSwap={swapUnits}
        />
        <ResultBox result={result} copied={copied} onCopy={handleCopy} />
      </div>
    </ToolLayout>
  );
}