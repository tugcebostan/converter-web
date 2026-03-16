import tr from "@/lib/i18n/tr";
import { buildFaqSchema } from "@/lib/utils";
import { Metadata } from "next";
import Base64Client from "./Base64Client ";

const ct = tr.converters.base64;

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

export default function Base64Page(){
return (
<>
<script type="application/ld+json" 
dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}
/>
<Base64Client/>
</>
)
}