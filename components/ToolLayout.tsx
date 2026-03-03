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

export default function ToolLayout({ title, description, children,faq }: ToolLayoutProps) {
  return (
    <main className="max-w-6xl mx-auto mt-10 px-4 py-6 bg-black text-white">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-gray-300 mb-6">{description}</p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Araç içeriği */}
        <section className="md:col-span-2">{children}</section>

        {/* Sağda reklam slotu */}
        <aside className="hidden md:block">
          <AdSlot position="side" />
        </aside>
      </div>

      {/* Sayfa altı açıklamalar / FAQ */}
      <section className="mt-8 space-y-4 text-gray-300">
        {/* FAQ içeriği */}
      </section>
      {/* FAQ bölümü — sadece faq prop'u geçirilmişse göster */}
      {faq && faq.length > 0 && (
        <section className="mt-10" aria-label="Sık sorulan sorular">
          <h2 className="text-xl font-semibold mb-4">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg p-4"
              >
                <h3 className="font-medium text-white mb-1">
                  {item.question}
                </h3>
                <p className="text-gray-400 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      <AdSlot position="bottom" />
    </main>

  );
}