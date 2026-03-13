export const AREA_UNITS = {
  mm2:     { key: "mm2",     label: "Milimetre Kare (mm²)",  factor: 0.000001 },
  cm2:     { key: "cm2",     label: "Santimetre Kare (cm²)", factor: 0.0001 },
  m2:      { key: "m2",      label: "Metre Kare (m²)",       factor: 1 },
  km2:     { key: "km2",     label: "Kilometre Kare (km²)",  factor: 1_000_000 },
  hectare: { key: "hectare", label: "Hektar (ha)",           factor: 10_000 },
  donum:   { key: "donum",   label: "Dönüm",                 factor: 1_000 },
  inch2:   { key: "inch2",   label: "İnç Kare (in²)",        factor: 0.00064516 },
  foot2:   { key: "foot2",   label: "Ayak Kare (ft²)",       factor: 0.092903 },
  yard2:   { key: "yard2",   label: "Yard Kare (yd²)",       factor: 0.836127 },
  acre:    { key: "acre",    label: "Akre (ac)",              factor: 4046.86 },
  mile2:   { key: "mile2",   label: "Mil Kare (mi²)",        factor: 2_589_988 },
} as const;

export type AreaUnit = keyof typeof AREA_UNITS;

export function convertArea(
  value: number,
  from: AreaUnit,
  to: AreaUnit
): number {
  if (isNaN(value)) return 0;
  const valueInM2 = value * AREA_UNITS[from].factor;
  return Number((valueInM2 / AREA_UNITS[to].factor).toFixed(6));
}