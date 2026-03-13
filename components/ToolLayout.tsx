import { ReactNode } from "react";
import AdSlot from "@/components/AdSlot";
import tr from "@/lib/i18n/tr";

const t = tr;

type FaqItem = {
  question: string;
  answer: string;
};

type ToolLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
  faq?: FaqItem[];
};

export default function ToolLayout({ title, description, children, faq }: ToolLayoutProps) {
  return (
    <main className="w-[calc(100%-8rem)] mx-auto px-8 py-6 bg-gray-900 text-white rounded-lg">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-gray-300 mb-6">{description}</p>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="md:col-span-2 flex flex-col gap-6">

          {/* Araç bölümü */}
          <section aria-label={t.common.converterSectionLabel(title)}>
            {children}
          </section>

          {/* FAQ bölümü */}
          {faq && faq.length > 0 && (
            <section aria-label={t.common.faqTitle}>
              <h2 className="text-xl font-semibold mb-4">{t.common.faqTitle}</h2>
              <div className="space-y-4">
                {faq.map((item, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium text-white mb-1">{item.question}</h3>
                    <p className="text-gray-400 text-sm">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <AdSlot position="bottom" />
        </div>

        {/* Reklam alanı */}
        <aside aria-label={t.common.adSideLabel} className="hidden md:block">
          <div className="sticky top-4">
            <AdSlot position="side" />
          </div>
        </aside>

      </div>
    </main>
  );
}