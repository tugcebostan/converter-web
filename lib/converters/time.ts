export const TIME_UNITS = {
  ms:     { key: "ms",     label: "Milisaniye (ms)", factor: 0.001 },
  second: { key: "second", label: "Saniye (s)",       factor: 1 },
  minute: { key: "minute", label: "Dakika (dk)",      factor: 60 },
  hour:   { key: "hour",   label: "Saat (sa)",        factor: 3600 },
  day:    { key: "day",    label: "Gün",               factor: 86_400 },
  week:   { key: "week",   label: "Hafta",             factor: 604_800 },
  month:  { key: "month",  label: "Ay (ortalama)",    factor: 2_629_746 },
  year:   { key: "year",   label: "Yıl (ortalama)",   factor: 31_556_952 },
} as const;

export type TimeUnit = keyof typeof TIME_UNITS;

export function convertTime(
  value: number,
  from: TimeUnit,
  to: TimeUnit
): number {
  if (isNaN(value)) return 0;
  const valueInSeconds = value * TIME_UNITS[from].factor;
  return Number((valueInSeconds / TIME_UNITS[to].factor).toFixed(6));
}