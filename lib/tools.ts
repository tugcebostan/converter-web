import { IconType } from "react-icons";
import { LiaBalanceScaleSolid, LiaClock, LiaRulerVerticalSolid, LiaSquare, LiaTachometerAltSolid, LiaThermometerFullSolid } from "react-icons/lia";
import { ToolCategories, ToolCategory } from "./toolcategories";

export type Tool = {
    href: string; //URl yolu
    title: string  //Kart başlığı
    description: string //Kart açıklaması
    icon: IconType   //Görsel ikon (resimde eklenebilir)
    category: ToolCategory //Gruplama için
}

export const tools: Tool[] = [
    {
        href: "/length-converter",
        title: "Uzunluk Dönüştürücü",
        description: "Metre, kilometre, inç, fit ve daha fazlası arasında anında dönüşüm.",
        icon: LiaRulerVerticalSolid,
        category: ToolCategories.UnitConverter,
    },
    {
        href: "/weight-converter",
        title: "Ağırlık Dönüştürücü",
        description: "Kilogram, pound, ons arasında dönüşüm.",
        icon: LiaBalanceScaleSolid,
        category: ToolCategories.UnitConverter,
    },
    {
        href: "/temperature-converter",
        title: "Sıcaklık Dönüştürücü",
        description: "Celsius, Fahrenheit ve Kelvin arasında anında dönüşüm.",
        icon: LiaThermometerFullSolid,
        category: ToolCategories.UnitConverter,
    },
    {
        href: "/area-converter",
        title: "Alan Dönüştürücü",
        description: "Metre kare, dönüm, hektar, akre ve daha fazlası arasında anında dönüşüm.",
        icon: LiaSquare,
        category: ToolCategories.UnitConverter,
    },
    {
        href: "/speed-converter",
        title: "Hız Dönüştürücü",
        description: "km/h, mph, knot, Mach ve daha fazlası arasında anında dönüşüm.",
        icon: LiaTachometerAltSolid,
        category: ToolCategories.UnitConverter,
    },
    {
        href: "/time-converter",
        title: "Zaman Dönüştürücü",
        description: "Saniye, dakika, saat, gün, hafta, ay ve yıl arasında anında dönüşüm.",
        icon: LiaClock,
        category: ToolCategories.UnitConverter,
    },
    // {
    //   href: "/code-beautifier",
    //   title: "Kod Düzenleyici",
    //   description: "HTML, CSS ve JavaScript kodunu güzelleştir.",
    //   icon: "TbCode",
    //   category: "Geliştirici",
    // },
];
export function groupToolsByCategory(toolList: Tool[]) {
    const groups: Record<string, { categoryName: string; tools: Tool[] }> = {};
    for (const tool of toolList) {
        const key = tool.category.key;
        if (!groups[key]) {
            groups[key] = {
                categoryName: tool.category.name,
                tools: [],
            };
        }
        groups[key].tools.push(tool);
    }
    return Object.values(groups);
}
