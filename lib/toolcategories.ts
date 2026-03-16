
export const ToolCategories = {
  UnitConverter: {
    key: "UnitConverter",
    name: "Birim Dönüştürücü",
  },
  CodeBeautifier: {
    key: "CodeBeautifier",
    name: "Kod Düzenleyici",
  },
  Encoder: {
    key: "Encoder",
    name: "Encoder/Decoder",
  },
  Converter: {
    key: "Converter",
    name: "Dosya Çeviri"
  },
} as const;

// Tip otomatik üretilir — elle yazmana gerek yok
export type ToolCategoryKey = keyof typeof ToolCategories;
// → "UnitConverter" | "CodeBeautifier"

export type ToolCategory = (typeof ToolCategories)[ToolCategoryKey];
// → { key: string, name: string }