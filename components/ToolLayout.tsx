import { ReactNode } from "react";
import AdSlot from "@/components/AdSlot";

// FAQ için tip tanımı
type FaqItem = {
  question: string;
  answer: string;
};

type ToolLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
  faq?: FaqItem[];  // ← opsiyonel, olmasa da çalışır
};

export default function ToolLayout({ title, description, children, faq }: ToolLayoutProps) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-6 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-gray-300 mb-6">{description}</p>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Sol taraf — araç + FAQ */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <section>{children}</section>

          {/* ✅ FAQ artık grid içinde, sol sütunda */}
          {faq && faq.length > 0 && (
            <section aria-label="Sık sorulan sorular">
              <h2 className="text-xl font-semibold mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {faq.map((item, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg p-4">
                    {/* ✅ Soru başlığı burada olmalı */}
                    <h3 className="font-medium text-white mb-1">{item.question}</h3>
                    <p className="text-gray-400 text-sm">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <AdSlot position="bottom" />
        </div>

        {/* Sağ taraf — side slot, sabit kalır */}
        <aside className="hidden md:block">
          <div className="sticky top-4">
            <AdSlot position="side" />
          </div>
        </aside>

      </div>
    </main>
  );
}