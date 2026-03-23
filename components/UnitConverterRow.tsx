"use client";

import { LuArrowLeftRight, LuArrowUpDown } from "react-icons/lu";
import UnitSelect from "@/components/UnitSelect";
import tr from "@/lib/i18n/tr";

const t = tr;

type Option = {
  key: string;
  label: string;
};

type Props = {
  value: number;
  onValueChange: (v: number) => void;
  fromUnit: string;
  toUnit: string;
  units: Option[];
  onFromChange: (v: string) => void;
  onToChange: (v: string) => void;
  onSwap: () => void;
};

export default function ConverterRow({
  value,
  onValueChange,
  fromUnit,
  toUnit,
  units,
  onFromChange,
  onToChange,
  onSwap,
}: Props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">

      {/* Sayı girişi */}
      <input
        type="number"
        value={value}
        onChange={(e) => onValueChange(Number(e.target.value))}
        className="w-full sm:w-28 text-white bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm text-center focus:outline-none focus:border-blue-500"
        aria-label={t.common.valueInput}
      />

      {/* Kaynak birim */}
      <div className="flex-1">
        <UnitSelect
          options={units}
          value={fromUnit}
          onChange={onFromChange}
          ariaLabel={t.common.fromUnit}
        />
      </div>

      <button
        onClick={onSwap}
        aria-label={t.common.swapLabel}
        className="
          flex items-center justify-center gap-2
          w-full sm:w-auto
          py-2 px-4 sm:p-2
          bg-blue-600 hover:bg-blue-700
          text-white text-sm font-medium
          rounded-lg transition-colors flex-shrink-0
        "
      >
        <LuArrowUpDown size={18} className="sm:hidden" aria-hidden="true" />
        <LuArrowLeftRight size={18} className="hidden sm:block" aria-hidden="true" />
      </button>

      {/* Hedef birim */}
      <div className="flex-1">
        <UnitSelect
          options={units}
          value={toUnit}
          onChange={onToChange}
          ariaLabel={t.common.toUnit}
        />
      </div>

    </div>
  );
}