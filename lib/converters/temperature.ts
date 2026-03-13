// Sıcaklıkta factor yok — dönüşüm formül tabanlı
export const TEMPERATURE_UNITS = {
  celsius:    { key: "celsius",    label: "Celsius (°C)" },
  fahrenheit: { key: "fahrenheit", label: "Fahrenheit (°F)" },
  kelvin:     { key: "kelvin",     label: "Kelvin (K)" },
} as const;

export type TemperatureUnit = keyof typeof TEMPERATURE_UNITS;

export function convertTemperature(
  value: number,
  from: TemperatureUnit,
  to: TemperatureUnit
): number {
  if (isNaN(value)) return 0;
  if (from === to) return value;

  let celsius: number;

  switch (from) {
    case "celsius":    celsius = value; break;
    case "fahrenheit": celsius = (value - 32) * (5 / 9); break;
    case "kelvin":     celsius = value - 273.15; break;
  }

  switch (to) {
    case "celsius":    return Number(celsius.toFixed(6));
    case "fahrenheit": return Number(((celsius * 9) / 5 + 32).toFixed(6));
    case "kelvin":     return Number((celsius + 273.15).toFixed(6));
  }
}