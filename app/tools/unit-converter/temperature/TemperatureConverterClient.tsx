"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { convertTemperature, TEMPERATURE_UNITS, TemperatureUnit } from "@/lib/converters/temperature";
import { LuArrowLeftRight } from "react-icons/lu";
import { copyToClipboard } from "@/lib/utils";
import ResultBox from "@/components/ResultBox";
import tr from "@/lib/i18n/tr";
import UnitSelect from "@/components/UnitSelect";
import UnitConverterRow from "@/components/UnitConverterRow";

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
          <UnitConverterRow
            value={value}
            onValueChange={setValue}
            fromUnit={from}
            toUnit={to}
            units={units}
            onFromChange={(v) => setFrom(v as TemperatureUnit)}
            onToChange={(v) => setTo(v as TemperatureUnit)}
            onSwap={swapUnits}
          />
          <ResultBox result={result} copied={copied} onCopy={handleCopy} />
        </div>
    </ToolLayout>
  );
}