export const SPEED_UNITS = {
  ms:   { key: "ms",   label: "Metre/Saniye (m/s)",    factor: 1 },
  kmh:  { key: "kmh",  label: "Kilometre/Saat (km/h)", factor: 0.277778 },
  mph:  { key: "mph",  label: "Mil/Saat (mph)",         factor: 0.44704 },
  knot: { key: "knot", label: "Knot (kn)",              factor: 0.514444 },
  fts:  { key: "fts",  label: "Ayak/Saniye (ft/s)",    factor: 0.3048 },
  mach: { key: "mach", label: "Mach (Ma)",              factor: 340.29 },
} as const;

export type SpeedUnit = keyof typeof SPEED_UNITS;

export function convertSpeed(
  value: number,
  from: SpeedUnit,
  to: SpeedUnit
): number {
  if (isNaN(value)) return 0;
  const valueInMs = value * SPEED_UNITS[from].factor;
  return Number((valueInMs / SPEED_UNITS[to].factor).toFixed(6));
}