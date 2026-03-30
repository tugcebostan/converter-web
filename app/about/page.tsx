import { Metadata } from "next";
import { LuZap, LuShield, LuWrench, LuHeart, LuStar, LuGripHorizontal, LuCircleArrowRight, LuChevronRight, LuChevronsRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "ConverTools hakkında — kim olduğumuz ve neden bu araçları yaptık.",
};

const features = [
  {
    icon: LuZap,
    title: "Hızlı ve Anlık",
    desc: "Tüm araçlar tarayıcınızda çalışır. Sunucuya veri gönderilmez, sonuç anında gelir.",
  },
  {
    icon: LuShield,
    title: "Gizlilik Öncelikli",
    desc: "Girdiğiniz veriler cihazınızdan ayrılmaz. Hesap açmanıza gerek yok.",
  },
  {
    icon: LuWrench,
    title: "Sürekli Gelişen",
    desc: "Yeni araçlar düzenli olarak ekleniyor. Öneriniz varsa iletişime geçin!",
  },
  {
    icon: LuHeart,
    title: "Tamamen Ücretsiz",
    desc: "Tüm araçlar ücretsiz. Gelir modelimiz reklamlara dayanır, verilerinizi satmayız.",
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">

      <section className="mb-12">
        <h1 className="text-3xl font-bold font-semibold text-center mb-4">Hakkımızda</h1>
        <p className="text-gray-600  leading-relaxed">
          ConverTools, günlük hayatta sık ihtiyaç duyulan küçük ama zahmetli işleri
          kolaylaştırmak için tasarlanmış ücretsiz bir araçlar koleksiyonudur.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Birim dönüştürmek, JSON düzenlemek, Base64 encode etmek… Bunların hepsi
          &quot;şimdi lazım&quot; olduğunda seni yavaşlatan işler. Biz de bunları tek bir
          yerde topladık.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">Neden ConverTools?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-800 border border-gray-700 rounded-xl p-5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <f.icon size={20} className="text-blue-400 shrink-0" aria-hidden="true" />
                <h3 className="font-semibold text-white">{f.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>



      <section className="mb-12 ">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">Mevcut Araçlar</h2>

        <div
          className="bg-gray-800 border border-gray-700 rounded-xl p-5 flex flex-col gap-3 
          pt-8">

          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
                <LuChevronsRight size={20} className="text-blue-400 shrink-0" aria-hidden="true" />
               <h3 className="font-semibold text-white">Birim Dönüştürücü:</h3> 
              <p className="text-gray-400 text-sm leading-relaxed">Uzunluk, ağırlık, sıcaklık, alan, hız, zaman</p>
            </li>
            <li className="flex items-center gap-2">
                <LuChevronsRight size={20} className="text-blue-400 shrink-0" aria-hidden="true" />
              <h3 className="font-semibold text-white">Kod Düzenleyici:</h3>
              <p className="text-gray-400 text-sm leading-relaxed">JSON, CSS, HTML güzelleştirme ve sıkıştırma</p>
            </li>
            <li className="flex items-center gap-2 ">
                <LuChevronsRight size={20} className="text-blue-400 shrink-0" aria-hidden="true" />
               <h3 className="font-semibold text-white">Encode / Decode:</h3>
               <p className="text-gray-400 text-sm leading-relaxed">Base64, URL, HTML Entity, Hash üretici</p>
            </li>
          </ul>
          <p className="text-gray-400 text-sm leading-relaxed">Daha fazlası yakında geliyor…</p>
        </div>
      </section>

    </main>
  );
}