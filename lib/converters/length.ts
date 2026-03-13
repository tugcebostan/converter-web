export const LENGTH_UNITS = {
  mm:   { key: "mm",   label: "Milimetre (mm)", factor: 0.001 },
  cm:   { key: "cm",   label: "Santimetre (cm)", factor: 0.01 },
  m:    { key: "m",    label: "Metre (m)",        factor: 1 },
  km:   { key: "km",   label: "Kilometre (km)",   factor: 1000 },
  inch: { key: "inch", label: "İnç (in)",         factor: 0.0254 },
  foot: { key: "foot", label: "Ayak (ft)",         factor: 0.3048 },
  yard: { key: "yard", label: "Yard (yd)",         factor: 0.9144 },
  mile: { key: "mile", label: "Mil (mi)",          factor: 1609.344 },
} as const;

export type LengthUnit = keyof typeof LENGTH_UNITS;

export function convertLength(
  value: number,
  from: LengthUnit,
  to: LengthUnit
): number {
  if (isNaN(value)) return 0;
  const valueInMeters = value * LENGTH_UNITS[from].factor;
  return Number((valueInMeters / LENGTH_UNITS[to].factor).toFixed(6));
}