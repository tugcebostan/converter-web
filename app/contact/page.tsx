import { Metadata } from "next";
import { LuMail, LuBug, LuLightbulb, LuMessageSquare } from "react-icons/lu";

export const metadata: Metadata = {
  title: "İletişim",
  description: "ConverTools ile iletişime geçin — hata bildirin, öneri gönderin.",
};

const topics = [
  {
    icon: LuBug,
    title: "Hata Bildirimi",
    desc: "Bir araç düzgün çalışmıyor veya yanlış sonuç veriyor mu?",
  },
  {
    icon: LuLightbulb,
    title: "Yeni Araç Önerisi",
    desc: "Eklenmesini istediğin bir araç var mı?",
  },
  {
    icon: LuMessageSquare,
    title: "Genel Geri Bildirim",
    desc: "Tasarım, kullanım kolaylığı veya başka konular.",
  },
];

// ↓ Kendi e-posta adresinle değiştir
const CONTACT_EMAIL = "info@convertools.com.tr";

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">

      <h1 className="text-3xl font-bold mb-2 text-center text-gray-900">İletişim</h1>
      <section className="grid gap-4 mb-10 mt-10 ">
        {topics.map((t) => (
          <div
            key={t.title}
            className="flex items-start gap-4 bg-gray-800 border border-gray-700 rounded-xl p-4"
          >
            <t.icon size={20} className="text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h2 className="font-semibold text-white">{t.title}</h2>
              <p className="text-gray-400 text-sm mt-1">{t.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
        <LuMail size={32} className="text-blue-400 mx-auto mb-4" aria-hidden="true" />
        <h2 className="text-lg font-semibold mb-2">E-posta ile Yaz</h2>
        <p className="text-gray-400 text-sm mb-4">
          Genellikle 1–2 iş günü içinde yanıt veriyoruz.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
      </section>

      <p className="text-gray-600 text-xs text-center mt-8">
        Spam ve reklam tekliflerine yanıt verilmemektedir.
      </p>

    </main>
  );
}