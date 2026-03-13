const tr = {

  // ─── Genel / Ortak ───────────────────────────────
  common: {
    // ... mevcut alanlar ...
    useTool: "Kullan →",
    result: "Sonuç",
    copied: "Kopyalandı ✓",
    copyLabel: "Sonucu kopyala",
    swapLabel: "Birimleri değiştir",
    faqTitle: "Sık Sorulan Sorular",
    allRightsReserved: "Tüm hakları saklıdır.",
    footerName: "ToolBox",

    // ↓ yeni eklenenler
    fromUnit: "Kaynak birim",
    toUnit: "Hedef birim",
    valueInput: "Dönüştürülecek değer",
    toolsSectionLabel: "Araçlar listesi",
    toolCardLabel: (title: string) => `${title} aracına git`,
    adSideLabel: "Reklam alanı",
    adBottomLabel: "Alt reklam alanı",
    converterSectionLabel: (title: string) => `${title} aracı`,
  },

  // ─── Ana Sayfa ────────────────────────────────────
  home: {
    title: "Ücretsiz Online Araçlar",
    subtitle:
      "Günlük işlerini kolaylaştıran, hızlı ve kullanımı kolay araçlar. Kayıt gerekmez, tamamen ücretsiz.",
    metaTitle: "Ücretsiz Online Araçlar",
    metaDescription: "Birim dönüştürücü, kod düzenleyici, dosya dönüştürücü ve daha fazlası. Tüm araçlar ücretsiz ve reklamsız kullanılabilir.",
    metaOgTitle: "ToolBox — Ücretsiz Online Araçlar",
    metaOgDescription: "Günlük işlerini kolaylaştıran ücretsiz web araçları.",

  },

  // ─── Header ──────────────────────────────────────
  header: {
    logoText: "ToolBox",
    openMenuLabel: "Menüyü aç/kapat",
    closeMenuLabel: "Menüyü kapat",
    desktopNavLabel: "Ana navigasyon",
    mobileNavLabel: "Mobil navigasyon",
    categoryMenuLabel: (categoryName: string) => `${categoryName} menüsü`,
  },

  // ─── Kategori adları ─────────────────────────────
  categories: {
    unitConverter: "Birim Dönüştürücü",
    codeBeautifier: "Kod Düzenleyici",
  },

  // ─── Araç kart açıklamaları ───────────────────────
  tools: {
    length: {
      title: "Uzunluk Dönüştürücü",
      description: "Metre, kilometre, inç, fit ve daha fazlası arasında anında dönüşüm.",
    },
    weight: {
      title: "Ağırlık Dönüştürücü",
      description: "Kilogram, pound, ons arasında dönüşüm.",
    },
    temperature: {
      title: "Sıcaklık Dönüştürücü",
      description: "Celsius, Fahrenheit ve Kelvin arasında anında dönüşüm.",
    },
    area: {
      title: "Alan Dönüştürücü",
      description: "Metre kare, dönüm, hektar, akre ve daha fazlası arasında anında dönüşüm.",
    },
    speed: {
      title: "Hız Dönüştürücü",
      description: "km/h, mph, knot, Mach ve daha fazlası arasında anında dönüşüm.",
    },
    time: {
      title: "Zaman Dönüştürücü",
      description: "Saniye, dakika, saat, gün, hafta, ay ve yıl arasında anında dönüşüm.",
    },
  },

  // ─── Araç sayfaları ───────────────────────────────
  converters: {
    length: {
      // ... mevcut alanlar ...
      metaTitle: "Uzunluk Dönüştürücü — Hızlı Birim Çevirici",
      metaDescription: "Metre, santimetre, kilometre, inç, ayak ve daha fazlası arasında anında uzunluk dönüşümü yapın.",
      metaOgTitle: "Uzunluk Dönüştürücü",
      metaOgDescription: "Uzunluk birimlerini hızlıca dönüştürün.",
    },
    weight: {
      metaTitle: "Ağırlık Dönüştürücü — Hızlı Birim Çevirici",
      metaDescription: "Kilogram, pound, ons, stone ve daha fazlası arasında anında ağırlık dönüşümü yapın.",
      metaOgTitle: "Ağırlık Dönüştürücü",
      metaOgDescription: "Ağırlık birimlerini hızlıca dönüştürün.",
    },
    temperature: {
      metaTitle: "Sıcaklık Dönüştürücü — Celsius, Fahrenheit, Kelvin",
      metaDescription: "Celsius, Fahrenheit ve Kelvin birimleri arasında anında sıcaklık dönüşümü yapın.",
      metaOgTitle: "Sıcaklık Dönüştürücü",
      metaOgDescription: "Sıcaklık birimlerini hızlıca dönüştürün.",
    },
    area: {
      metaTitle: "Alan Dönüştürücü — m², Dönüm, Hektar, Akre",
      metaDescription: "Metre kare, kilometre kare, hektar, dönüm, akre ve daha fazlası arasında anında alan dönüşümü yapın.",
      metaOgTitle: "Alan Dönüştürücü",
      metaOgDescription: "Alan birimlerini hızlıca dönüştürün.",
    },
    speed: {
      metaTitle: "Hız Dönüştürücü — km/h, mph, Knot, Mach",
      metaDescription: "Metre/saniye, kilometre/saat, mil/saat, knot ve Mach arasında anında hız dönüşümü yapın.",
      metaOgTitle: "Hız Dönüştürücü",
      metaOgDescription: "Hız birimlerini hızlıca dönüştürün.",
    },
    time: {
      metaTitle: "Zaman Dönüştürücü — Saniye, Dakika, Saat",
      metaDescription: "Milisaniye, saniye, dakika, saat, gün, hafta, ay ve yıl arasında anında zaman dönüşümü yapın.",
      metaOgTitle: "Zaman Dönüştürücü",
      metaOgDescription: "Zaman birimlerini hızlıca dönüştürün.",
    },
  },


} as const;

export default tr;
export type Translations = typeof tr;