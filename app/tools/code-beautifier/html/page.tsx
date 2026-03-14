import { Metadata } from "next";
import HtmlBeautifierClient from "./HtmlBeautifierClient";
import { buildFaqSchema } from "@/lib/utils";
import tr from "@/lib/i18n/tr";

const t = tr.converters.htmlBeautifier;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  openGraph: {
    title: t.title,
    description: t.metaDescription,
    type: "website",
  },
};

const faqSchema = buildFaqSchema([...t.faq]);

export default function HtmlBeautifierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HtmlBeautifierClient />
    </>
  );
}