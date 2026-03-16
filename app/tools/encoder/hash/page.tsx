import { Metadata } from "next";
import { buildFaqSchema } from "@/lib/utils";
import tr from "@/lib/i18n/tr";
import HashClient from "./HashClient";

const ct = tr.converters.hash;

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

export default function HashPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HashClient />
    </>
  );
}