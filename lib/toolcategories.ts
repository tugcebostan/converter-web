
export const ToolCategories = {
  UnitConverter: {
    key: "UnitConverter",
    name: "Birim Dönüştürücü",
  },
  CodeBeautifier: {
    key: "CodeBeautifier",
    name: "Kod Düzenleyici",
  },
} as const;

// Tip otomatik üretilir — elle yazmana gerek yok
export type ToolCategoryKey = keyof typeof ToolCategories;
// → "UnitConverter" | "CodeBeautifier"

export type ToolCategory = (typeof ToolCategories)[ToolCategoryKey];
// → { key: string, name: string }