import { Metadata } from "next";
import { buildFaqSchema } from "@/lib/utils";
import tr from "@/lib/i18n/tr";
import HtmlEntityClient from "./HtmlEntityClient";

const ct = tr.converters.htmlEntity;

export const metadata: Metadata = {
  title: ct.metaTitle,
  description: ct.metaDescription,
  openGraph: {
    title: ct.metaOgTitle,
    description: ct.metaOgDescription,
    type: "website",
  },
};

const faqSchema = buildFaqSchema([...ct.faq]);

export default function HtmlEntityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HtmlEntityClient />
    </>
  );
}