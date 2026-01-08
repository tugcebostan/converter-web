import { ReactNode } from "react";
import AdSlot from "@/components/AdSlot";

type ToolLayoutProps = {
    title: string;
    description: string;
    children: ReactNode;
};

export default function ToolLayout({ title, description, children }: ToolLayoutProps) {
    return (
<main className="max-w-6xl mx-auto px-4 py-6 bg-black text-white">
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

  <AdSlot position="bottom" />
</main>

    );
}