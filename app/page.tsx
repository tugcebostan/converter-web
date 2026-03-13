import type { Metadata } from "next";
import ToolAccordion from "@/components/ToolAccordion";
import tr from "@/lib/i18n/tr";

const t = tr;

export const metadata: Metadata = {
  title: "Ücretsiz Online Araçlar",
  description: "Birim dönüştürücü, kod düzenleyici, dosya dönüştürücü ve daha fazlası.",
  openGraph: {
    title: "ToolBox — Ücretsiz Online Araçlar",
    description: "Günlük işlerini kolaylaştıran ücretsiz web araçları.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <section className="text-center mb-12" aria-label={t.home.title}>
        <h1 className="text-4xl font-bold mb-4">{t.home.title}</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">{t.home.subtitle}</p>
      </section>

      <section aria-label={t.common.toolsSectionLabel}>
        <ToolAccordion />
      </section>
    </main>
  );
}