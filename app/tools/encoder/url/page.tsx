import { Metadata } from "next";
import UrlClient from "./UrlClient";
import { buildFaqSchema } from "@/lib/utils";
import tr from "@/lib/i18n/tr";

const ct = tr.converters.url;

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

export default function UrlPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <UrlClient />
    </>
  );
}