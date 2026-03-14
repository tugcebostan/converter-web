import { IconType } from "react-icons";
import { LiaBalanceScaleSolid, LiaClock, LiaRulerVerticalSolid, LiaSquare, LiaTachometerAltSolid, LiaThermometerFullSolid } from "react-icons/lia";
import { ToolCategories, ToolCategory } from "./toolcategories";
import { TbBraces, TbBrush, TbHtml } from "react-icons/tb";
import tr from "./i18n/tr";

export type Tool = {
    href: string; //URl yolu
    title: string  //Kart başlığı
    description: string //Kart açıklaması
    icon: IconType   //Görsel ikon (resimde eklenebilir)
    category: ToolCategory //Gruplama için
    shortTitle: string
}

export const tools: Tool[] = [
    {
        href: "/tools/unit-converter/length",
        title: tr.tools.length.title,
        description: tr.tools.length.description,
        icon: LiaRulerVerticalSolid,
        category: ToolCategories.UnitConverter,
        shortTitle: tr.tools.length.shortTitle
    },
    {
        href: "/tools/unit-converter/weight",
        title: tr.tools.weight.title,
        description: tr.tools.weight.description,
        icon: LiaBalanceScaleSolid,
        category: ToolCategories.UnitConverter,
        shortTitle: tr.tools.weight.shortTitle

    },
    {
        href: "/tools/unit-converter/temperature",
        title: tr.tools.temperature.title,
        description: tr.tools.temperature.description,
        icon: LiaThermometerFullSolid,
        category: ToolCategories.UnitConverter,
        shortTitle: tr.tools.temperature.shortTitle

    },
    {
        href: "/tools/unit-converter/area",
        title: tr.tools.area.title,
        description: tr.tools.area.description,
        icon: LiaSquare,
        category: ToolCategories.UnitConverter,
        shortTitle: tr.tools.area.shortTitle

    },
    {
        href: "/tools/unit-converter/speed",
        title: tr.tools.speed.title,
        description: tr.tools.speed.description,
        icon: LiaTachometerAltSolid,
        category: ToolCategories.UnitConverter,
        shortTitle: tr.tools.speed.shortTitle

    },
    {
        href: "/tools/unit-converter/time",
        title: tr.tools.time.title,
        description: tr.tools.time.description ,
        icon: LiaClock,
        category: ToolCategories.UnitConverter,
        shortTitle: tr.tools.time.shortTitle

    },
    {
        href: "/tools/code-beautifier/json",
        title:  tr.tools.json.title,
        description: tr.tools.json.description,
        icon: TbBraces,
        category: ToolCategories.CodeBeautifier,
        shortTitle: tr.tools.json.shortTitle

    },
    {
        href: "/tools/code-beautifier/css",
        title:  tr.tools.css.title,
        description:  tr.tools.css.description,
        icon: TbBrush,
        category: ToolCategories.CodeBeautifier,
        shortTitle: tr.tools.css.shortTitle

    },
    {
        href: "/tools/code-beautifier/html",
        title:  tr.tools.html.title,
        description:  tr.tools.html.description,
        icon: TbHtml,
        category: ToolCategories.CodeBeautifier,
        shortTitle: tr.tools.html.shortTitle

    },
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

export type BeautifyResult =
    | { success: true; output: string }
    | { success: false; error: string; line?: number };