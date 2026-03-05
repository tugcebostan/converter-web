// Panoya kopyalama — her dönüştürücüde kullanılabilir
export async function copyToClipboard(
  text: string,
  onSuccess: () => void
): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    onSuccess();
  } catch {
    // Eski tarayıcılar için fallback
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    onSuccess();
  }
}
// =============================================
// buildFaqSchema — her page.tsx'te kullanılır
// Tekrar tekrar aynı JSON-LD yapısını yazmak yerine
// bu fonksiyona soruları geçiriyoruz
// =============================================
type FaqItem = {
  question: string;
  answer: string;
};

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}