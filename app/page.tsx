// "use client" YOK — bu bir sunucu bileşeni, SEO için mükemmel
import Link from "next/link";
import type { Metadata } from "next";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Ücretsiz Online Araçlar",
  description:
    "Birim dönüştürücü, kod düzenleyici, dosya dönüştürücü ve daha fazlası. Tüm araçlar ücretsiz ve reklamsız kullanılabilir.",
  openGraph: {
    title: "ToolBox — Ücretsiz Online Araçlar",
    description: "Günlük işlerini kolaylaştıran ücretsiz web araçları.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">

      {/* Hero bölümü */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Ücretsiz Online Araçlar
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Günlük işlerini kolaylaştıran, hızlı ve kullanımı kolay araçlar.
          Kayıt gerekmez, tamamen ücretsiz.
        </p>
      </section>

      {/* Araç kartları */}
      <section aria-label="Araçlar listesi">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group block bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors"
              >

                {/* Kategori etiketi */}
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={28} className="text-yellow-400 pr-2"  />
                  <span className="text-xs text-blue-400 font-medium uppercase tracking-wide">
                    {tool.category}
                  </span>
                </div>


                {/* Başlık */}
                <h2 className="text-lg font-semibold mt-1 mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {tool.title}
                </h2>

                {/* Açıklama */}
                <p className="text-gray-400 text-sm">
                  {tool.description}
                </p>

                {/* Devam oku linki */}
                <span className="inline-block mt-4 text-sm text-blue-500 group-hover:underline">
                  ...
                </span>
              </Link>
            )
          })}
        </div>
      </section>

    </main>
  );
}