import { html } from "@codemirror/lang-html";

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

    // EditorPanel
    enterFullscreen: "Tam ekran",
    exitFullscreen: "Küçült",

    // Beautifier sayfaları
    beautify: "Güzelleştir",
    minify: "Sıkıştır",
    validate: "Doğrula",
    valid: "Geçerli ✓",
    invalid: "Geçersiz ✗",
    inputPanel: "Giriş",
    outputPanel: "Çıkış",
    clearInput: "Temizle",
    copyOutput: "Kopyala",
    indentSize: "Girinti",
    preview: "Önizleme",
    showEditor: "Editörü Göster",
    errorLabel: (line?: number) => line ? `Hata — Satır ${line}` : "Hata",
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
    encoder: "Encode / Decode",
    converter: "Dosya Çeviri",
  },

  // ─── Araç kart açıklamaları ───────────────────────
  tools: {
    length: {
      title: "Uzunluk Dönüştürücü",
      description: "Metre, kilometre, inç, fit ve daha fazlası arasında anında dönüşüm.",
      shortTitle: "Uzunluk"
    },
    weight: {
      title: "Ağırlık Dönüştürücü",
      description: "Kilogram, pound, ons arasında dönüşüm.",
      shortTitle: "Ağırlık"
    },
    temperature: {
      title: "Sıcaklık Dönüştürücü",
      description: "Celsius, Fahrenheit ve Kelvin arasında anında dönüşüm.",
      shortTitle: "Sıcaklık"
    },
    area: {
      title: "Alan Dönüştürücü",
      description: "Metre kare, dönüm, hektar, akre ve daha fazlası arasında anında dönüşüm.",
      shortTitle: "Alan"
    },
    speed: {
      title: "Hız Dönüştürücü",
      description: "km/h, mph, knot, Mach ve daha fazlası arasında anında dönüşüm.",
      shortTitle: "Hız"
    },
    time: {
      title: "Zaman Dönüştürücü",
      description: "Saniye, dakika, saat, gün, hafta, ay ve yıl arasında anında dönüşüm.",
      shortTitle: "Zaman"

    },
    json: {
      title: "JSON Düzenleyici",
      description: "JSON kodunu güzelleştirin, sıkıştırın ve doğrulayın.",
      shortTitle: "JSON"
    },
    css: {
      title: "CSS Düzenleyici",
      description: "CSS kodunu güzelleştirin ve sıkıştırın.",
      shortTitle: "CSS"
    },
    html: {
      title: "HTML Düzenleyici",
      description: "HTML kodunu güzelleştirin ve sıkıştırın.",
      shortTitle: "HTML"
    },
    base64: {
      title: "Base64 Encode / Decode",
      description: "Metni Base64 formatına çevirin veya Base64'ü metne dönüştürün.",
      shortTitle: "Base64",
    },
    url: {
      title: "URL Encode / Decode",
      description: "URL'leri encode edin veya decode edin.",
      shortTitle: "URL",
    },
    htmlEntity: {
      title: "HTML Entity Encode / Decode",
      description: "HTML özel karakterlerini entity formatına çevirin veya geri dönüştürün.",
      shortTitle: "HTML Entity",
    },
    hash: {
      title: "Hash Üretici",
      description: "MD5, SHA-1, SHA-256 ve SHA-512 hash değerleri üretin.",
      shortTitle: "Hash",
    },
  },

  // ─── Araç sayfaları ───────────────────────────────
  converters: {
    length: {
      title: "Uzunluk Dönüştürücü",
      description: "Uzunluk birimleri arasında hızlı ve doğru dönüşüm yapın.",
      faq: [
        {
          question: "Bu araç ne işe yarar?",
          answer: "Uzunluk Dönüştürücü, mm, cm, metre, km, inç, ayak, yard ve mil gibi birimler arasında anında dönüşüm yapmanı sağlar.",
        },
        {
          question: "Nasıl kullanılır?",
          answer: "Dönüştürmek istediğin değeri gir, sol taraftan kaynak birimi seç, sağ taraftan hedef birimi seç. Sonuç anında görünür.",
        },
        {
          question: "Sonucu nasıl kopyalarım?",
          answer: "Sonucun yanındaki kopyala ikonuna tıklamanız yeterli. Değer panonuza otomatik olarak kopyalanır.",
        },
      ],
      metaTitle: "Uzunluk Dönüştürücü — Hızlı Birim Çevirici",
      metaDescription: "Metre, santimetre, kilometre, inç, ayak ve daha fazlası arasında anında uzunluk dönüşümü yapın.",
      metaOgTitle: "Uzunluk Dönüştürücü",
      metaOgDescription: "Uzunluk birimlerini hızlıca dönüştürün.",
    },
    weight: {
      title: "Ağırlık Dönüştürücü",
      description: "Ağırlık birimleri arasında hızlı ve doğru dönüşüm yapın.",
      faq: [
        {
          question: "Bu araç ne işe yarar?",
          answer: "Ağırlık Dönüştürücü, mg, g, kg, ton, oz, lb ve stone gibi birimler arasında anında dönüşüm yapmanı sağlar.",
        },
        {
          question: "Nasıl kullanılır?",
          answer: "Dönüştürmek istediğin değeri gir, sol taraftan kaynak birimi seç, sağ taraftan hedef birimi seç. Sonuç anında görünür.",
        },
        {
          question: "Sonucu nasıl kopyalarım?",
          answer: "Sonucun yanındaki kopyala ikonuna tıklamanız yeterli. Değer panonuza otomatik olarak kopyalanır.",
        },
      ],
      metaTitle: "Ağırlık Dönüştürücü — Hızlı Birim Çevirici",
      metaDescription: "Kilogram, pound, ons, stone ve daha fazlası arasında anında ağırlık dönüşümü yapın.",
      metaOgTitle: "Ağırlık Dönüştürücü",
      metaOgDescription: "Ağırlık birimlerini hızlıca dönüştürün.",
    },
    temperature: {
      title: "Sıcaklık Dönüştürücü",
      description: "Celsius, Fahrenheit ve Kelvin arasında hızlı ve doğru dönüşüm yapın.",
      faq: [
        {
          question: "Bu araç ne işe yarar?",
          answer: "Sıcaklık Dönüştürücü, Celsius, Fahrenheit ve Kelvin birimleri arasında anında dönüşüm yapmanı sağlar.",
        },
        {
          question: "Fahrenheit'ı Celsius'a nasıl çevirir?",
          answer: "Formül: (°F - 32) × 5/9 = °C. Örneğin 98.6°F = 37°C'dir.",
        },
        {
          question: "Kelvin nedir?",
          answer: "Kelvin, bilimsel alanda kullanılan mutlak sıcaklık birimidir. 0 Kelvin, teorik olarak ulaşılabilecek en düşük sıcaklıktır (−273.15°C).",
        },
      ],
      metaTitle: "Sıcaklık Dönüştürücü — Celsius, Fahrenheit, Kelvin",
      metaDescription: "Celsius, Fahrenheit ve Kelvin birimleri arasında anında sıcaklık dönüşümü yapın.",
      metaOgTitle: "Sıcaklık Dönüştürücü",
      metaOgDescription: "Sıcaklık birimlerini hızlıca dönüştürün.",
    },
    area: {
      title: "Alan Dönüştürücü",
      description: "Alan birimleri arasında hızlı ve doğru dönüşüm yapın.",
      faq: [
        {
          question: "Bu araç ne işe yarar?",
          answer: "Alan Dönüştürücü, metre kare, kilometre kare, hektar, dönüm, akre ve daha fazlası arasında anında dönüşüm yapmanı sağlar.",
        },
        {
          question: "Dönüm nedir?",
          answer: "Dönüm, Türkiye'de yaygın kullanılan geleneksel bir alan ölçü birimidir. 1 dönüm = 1.000 metre karedir.",
        },
        {
          question: "Hektar ile dönüm arasındaki fark nedir?",
          answer: "1 hektar = 10.000 metre kare, 1 dönüm = 1.000 metre karedir. Yani 1 hektar = 10 dönümdür.",
        },
      ],
      metaTitle: "Alan Dönüştürücü — m², Dönüm, Hektar, Akre",
      metaDescription: "Metre kare, kilometre kare, hektar, dönüm, akre ve daha fazlası arasında anında alan dönüşümü yapın.",
      metaOgTitle: "Alan Dönüştürücü",
      metaOgDescription: "Alan birimlerini hızlıca dönüştürün.",
    },
    speed: {
      title: "Hız Dönüştürücü",
      description: "Hız birimleri arasında hızlı ve doğru dönüşüm yapın.",
      faq: [
        {
          question: "Bu araç ne işe yarar?",
          answer: "Hız Dönüştürücü, m/s, km/h, mph, knot, ft/s ve Mach gibi birimler arasında anında dönüşüm yapmanı sağlar.",
        },
        {
          question: "Knot nedir?",
          answer: "Knot, denizcilik ve havacılıkta kullanılan hız birimidir. 1 knot = 1.852 km/h'dir.",
        },
        {
          question: "Mach nedir?",
          answer: "Mach, sesin havadaki hızını referans alan bir birimdir. Mach 1 = yaklaşık 1.235 km/h (deniz seviyesinde).",
        },
      ],
      metaTitle: "Hız Dönüştürücü — km/h, mph, Knot, Mach",
      metaDescription: "Metre/saniye, kilometre/saat, mil/saat, knot ve Mach arasında anında hız dönüşümü yapın.",
      metaOgTitle: "Hız Dönüştürücü",
      metaOgDescription: "Hız birimlerini hızlıca dönüştürün.",
    },
    time: {
      title: "Zaman Dönüştürücü",
      description: "Zaman birimleri arasında hızlı ve doğru dönüşüm yapın.",
      faq: [
        {
          question: "Bu araç ne işe yarar?",
          answer: "Zaman Dönüştürücü, milisaniye, saniye, dakika, saat, gün, hafta, ay ve yıl arasında anında dönüşüm yapmanı sağlar.",
        },
        {
          question: "Ay ve yıl dönüşümleri neden yaklaşık?",
          answer: "Aylar 28-31 gün arasında değiştiği için ortalama değer kullanılır. 1 ay = 30.44 gün, 1 yıl = 365.25 gün olarak hesaplanır.",
        },
        {
          question: "1 yıl kaç saniyedir?",
          answer: "Ortalama 1 yıl = 31.556.952 saniyedir.",
        },
      ],
      metaTitle: "Zaman Dönüştürücü — Saniye, Dakika, Saat",
      metaDescription: "Milisaniye, saniye, dakika, saat, gün, hafta, ay ve yıl arasında anında zaman dönüşümü yapın.",
      metaOgTitle: "Zaman Dönüştürücü",
      metaOgDescription: "Zaman birimlerini hızlıca dönüştürün.",
    },
    jsonBeautifier: {
      title: "JSON Düzenleyici",
      description: "JSON kodunu güzelleştirin, sıkıştırın ve doğrulayın.",
      inputPlaceholder: "JSON kodunuzu buraya yapıştırın...",
      outputPlaceholder: "Sonuç burada görünecek...",
      metaTitle: "JSON Düzenleyici — Güzelleştir, Sıkıştır, Doğrula",
      metaDescription: "JSON kodunu anında güzelleştirin, sıkıştırın ve sözdizimi hatalarını tespit edin.",
      faq: [
        {
          question: "Bu araç ne işe yarar?",
          answer: "JSON kodunu okunabilir hale getirir, sıkıştırır ve sözdizimi hatalarını tespit eder.",
        },
        {
          question: "Verilerim güvende mi?",
          answer: "Tüm işlemler tarayıcınızda gerçekleşir, hiçbir veri sunucuya gönderilmez.",
        },
      ],
    },
    cssBeautifier: {
      title: "CSS Düzenleyici",
      description: "CSS kodunu güzelleştirin ve sıkıştırın.",
      inputPlaceholder: "CSS kodunuzu buraya yapıştırın...",
      outputPlaceholder: "Sonuç burada görünecek...",
      metaTitle: "CSS Düzenleyici — Güzelleştir ve Sıkıştır",
      metaDescription: "CSS kodunu anında güzelleştirin ve sıkıştırın.",
      faq: [
        {
          question: "Bu araç ne işe yarar?",
          answer: "CSS kodunu okunabilir hale getirir ve sıkıştırır.",
        },
        {
          question: "Verilerim güvende mi?",
          answer: "Tüm işlemler tarayıcınızda gerçekleşir, hiçbir veri sunucuya gönderilmez.",
        },
      ],
    },
    htmlBeautifier: {
      title: "HTML Düzenleyici",
      description: "HTML kodunu güzelleştirin ve sıkıştırın.",
      inputPlaceholder: "HTML kodunuzu buraya yapıştırın...",
      outputPlaceholder: "Sonuç burada görünecek...",
      metaTitle: "HTML Düzenleyici — Güzelleştir ve Sıkıştır",
      metaDescription: "HTML kodunu anında güzelleştirin ve sıkıştırın.",
      faq: [
        {
          question: "Bu araç ne işe yarar?",
          answer: "HTML kodunu okunabilir hale getirir ve sıkıştırır.",
        },
        {
          question: "Verilerim güvende mi?",
          answer: "Tüm işlemler tarayıcınızda gerçekleşir, hiçbir veri sunucuya gönderilmez.",
        },
      ],
    },
    base64: {
      title: "Base64 Encode / Decode",
      description: "Metni Base64 formatına çevirin veya Base64'ü metne dönüştürün.",
      inputPlaceholder: "Metni buraya yazın...",
      outputPlaceholder: "Sonuç burada görünecek...",
      encodeBtn: "Encode",
      decodeBtn: "Decode",
      errorInvalidBase64: "Geçersiz Base64 girdisi. Lütfen doğru bir Base64 metni girin.",
      metaTitle: "Base64 Encode / Decode — Ücretsiz Online Araç",
      metaDescription: "Metni anında Base64 formatına çevirin veya Base64 kodunu orijinal metne dönüştürün. Tamamen ücretsiz, tarayıcıda çalışır.",
      metaOgTitle: "Base64 Encode / Decode",
      metaOgDescription: "Metni Base64'e veya Base64'ü metne anında dönüştürün.",
      faq: [
        {
          question: "Base64 nedir?",
          answer: "Base64, ikili verileri ASCII karakterlerine dönüştüren bir kodlama yöntemidir. E-posta ekleri, API token'ları ve veri aktarımında yaygın kullanılır.",
        },
        {
          question: "Encode ile Decode arasındaki fark nedir?",
          answer: "Encode: düz metni Base64 formatına çevirir. Decode: Base64 formatındaki metni orijinal haline geri döndürür.",
        },
        {
          question: "Verilerim güvende mi?",
          answer: "Tüm işlemler tarayıcınızda gerçekleşir, hiçbir veri sunucuya gönderilmez.",
        },
        {
          question: "Base64 bir şifreleme yöntemi midir?",
          answer: "Hayır. Base64 şifreleme değil, sadece kodlamadır. Gizli verileri korumak için kullanılmamalıdır.",
        },
      ],
    },
    url: {
      title: "URL Encode / Decode",
      description: "URL adreslerini güvenli formata çevirin veya orijinaline döndürün.",
      inputPlaceholder: "URL veya metin girin...",
      outputPlaceholder: "Sonuç burada görünecek...",
      encodeBtn: "Encode",
      decodeBtn: "Decode",
      errorInvalidUrl: "Geçersiz URL encoding. Lütfen geçerli bir URL encoded metin girin.",
      metaTitle: "URL Encode / Decode — Ücretsiz Online Araç",
      metaDescription: "URL adreslerini anında encode veya decode edin. Tamamen ücretsiz, tarayıcıda çalışır.",
      metaOgTitle: "URL Encode / Decode",
      metaOgDescription: "URL'leri encode veya decode edin.",
      faq: [
        {
          question: "URL Encode nedir?",
          answer: "URL'lerde kullanılamayan karakterleri (boşluk, Türkçe harfler, özel karakterler) %20 gibi güvenli formata dönüştürme işlemidir.",
        },
        {
          question: "Ne zaman kullanılır?",
          answer: "API isteklerinde, form verilerinde veya URL parametrelerinde özel karakter içeren değerleri güvenle iletmek için kullanılır.",
        },
        {
          question: "Verilerim güvende mi?",
          answer: "Tüm işlemler tarayıcınızda gerçekleşir, hiçbir veri sunucuya gönderilmez.",
        },
      ],
    },
    htmlEntity: {
      title: "HTML Entity Encode / Decode",
      description: "HTML özel karakterlerini güvenli entity formatına çevirin veya orijinaline döndürün.",
      inputPlaceholder: "HTML içeren metni girin...",
      outputPlaceholder: "Sonuç burada görünecek...",
      encodeBtn: "Encode",
      decodeBtn: "Decode",
      metaTitle: "HTML Entity Encode / Decode — Ücretsiz Online Araç",
      metaDescription: "HTML özel karakterlerini anında encode veya decode edin. Tamamen ücretsiz, tarayıcıda çalışır.",
      metaOgTitle: "HTML Entity Encode / Decode",
      metaOgDescription: "HTML karakterlerini entity formatına çevirin veya geri dönüştürün.",
      faq: [
        {
          question: "HTML Entity nedir?",
          answer: "&lt; gibi kodlardır. Tarayıcının HTML etiketi olarak yorumlamaması gereken < > & gibi karakterleri güvenle göstermek için kullanılır.",
        },
        {
          question: "Ne zaman kullanılır?",
          answer: "Kullanıcıdan alınan HTML içeriğini ekrana güvenle basmak, kod örneklerini göstermek veya XSS saldırılarını önlemek için kullanılır.",
        },
        {
          question: "Verilerim güvende mi?",
          answer: "Tüm işlemler tarayıcınızda gerçekleşir, hiçbir veri sunucuya gönderilmez.",
        },
      ],
    },
    hash: {
      title: "Hash Üretici",
      description: "Metninizin MD5, SHA-1, SHA-256 ve SHA-512 hash değerlerini anında hesaplayın.",
      inputPlaceholder: "Hash'lenecek metni girin...",
      generateBtn: "Hash Üret",
      copyLabel: "Kopyala",
      algorithmLabel: "Algoritma",
      metaTitle: "Hash Üretici — MD5, SHA-1, SHA-256, SHA-512",
      metaDescription: "Metninizin MD5, SHA-1, SHA-256 ve SHA-512 hash değerlerini anında üretin. Tamamen ücretsiz, tarayıcıda çalışır.",
      metaOgTitle: "Hash Üretici",
      metaOgDescription: "MD5, SHA-1, SHA-256 ve SHA-512 hash değerleri üretin.",
      faq: [
        {
          question: "Hash nedir?",
          answer: "Hash, bir metni sabit uzunlukta benzersiz bir değere dönüştüren tek yönlü bir işlemdir. Aynı metin her zaman aynı hash değerini üretir.",
        },
        {
          question: "Hash geri çevrilebilir mi?",
          answer: "Hayır. Hash tek yönlüdür, orijinal metne geri dönemezsiniz. Bu yüzden şifre doğrulamada kullanılır.",
        },
        {
          question: "MD5 mi SHA-256 mı kullanmalıyım?",
          answer: "Güvenlik gerektiren işlemler için SHA-256 veya SHA-512 kullanın. MD5 ve SHA-1 artık güvenli kabul edilmemektedir, sadece checksum doğrulama gibi işlemler için uygundur.",
        },
        {
          question: "Verilerim güvende mi?",
          answer: "Tüm işlemler tarayıcınızda gerçekleşir, hiçbir veri sunucuya gönderilmez.",
        },
      ],
    },
  },


} as const;

export default tr;
export type Translations = typeof tr;