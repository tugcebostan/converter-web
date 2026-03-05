import { IconType } from "react-icons";
import { TbRulerMeasure2, TbScale } from "react-icons/tb";

export type Tool = {
    href: string; //URl yolu
    title: string  //Kart başlığı
    description: string //Kart açıklaması
    icon: IconType   //Görsel ikon (resimde eklenebilir)
    category: string //Gruplama için
}
export const tools: Tool[] = [
    {
        href: "/length-converter",
        title: "Uzunluk Dönüştürücü",
        description: "Metre, kilometre, inç, fit ve daha fazlası arasında anında dönüşüm.",
        icon: TbRulerMeasure2,
        category: "Dönüştürücü",
    },
    {
        href: "/weight-converter",
        title: "Ağırlık Dönüştürücü",
        description: "Kilogram, pound, ons arasında dönüşüm.",
        icon: TbScale,
        category: "Dönüştürücü",
    },
        // {
        //   href: "/code-beautifier",
        //   title: "Kod Düzenleyici",
        //   description: "HTML, CSS ve JavaScript kodunu güzelleştir.",
        //   icon: "TbCode",
        //   category: "Geliştirici",
        // },
    ];