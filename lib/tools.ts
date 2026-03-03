export type Tool = {
    href: string; //URl yolu
    title: string  //Kart başlığı
    description: string //Kart açıklaması
    icon: string   //Görsel ikon (resimde eklenebilir)
    category: string //Gruplama için
}
export const tools: Tool[] = [
    {
        href: "/length-converter",
        title: "Uzunluk Dönüştürücü",
        description: "Metre, kilometre, inç, ayak ve daha fazlası arasında anında dönüşüm.",
        icon: "📏",
        category: "Dönüştürücü",
        // İleride eklenecekler:
        // {
        //   href: "/weight-converter",
        //   title: "Ağırlık Dönüştürücü",
        //   description: "Kilogram, pound, ons arasında dönüşüm.",
        //   icon: "⚖️",
        //   category: "Dönüştürücü",
        // },
        // {
        //   href: "/code-beautifier",
        //   title: "Kod Düzenleyici",
        //   description: "HTML, CSS ve JavaScript kodunu güzelleştir.",
        //   icon: "💻",
        //   category: "Geliştirici",
        // },
    }];