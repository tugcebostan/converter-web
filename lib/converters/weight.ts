export const WEIGHT_UNITS = {
  mg:    { key: "mg",    label: "Miligram (mg)",  factor: 0.001 },
  g:     { key: "g",     label: "Gram (g)",        factor: 1 },
  kg:    { key: "kg",    label: "Kilogram (kg)",   factor: 1000 },
  ton:   { key: "ton",   label: "Ton (t)",          factor: 1_000_000 },
  oz:    { key: "oz",    label: "Ons (oz)",         factor: 28.3495 },
  lb:    { key: "lb",    label: "Pound (lb)",       factor: 453.592 },
  stone: { key: "stone", label: "Stone (st)",       factor: 6350.29 },
} as const;

export type WeightUnit = keyof typeof WEIGHT_UNITS;

export function convertWeight(
  value: number,
  from: WeightUnit,
  to: WeightUnit
): number {
  if (isNaN(value)) return 0;
  const valueInGrams = value * WEIGHT_UNITS[from].factor;
  return Number((valueInGrams / WEIGHT_UNITS[to].factor).toFixed(6));
}