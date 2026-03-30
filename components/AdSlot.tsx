"use client";

import { useEffect, useRef } from "react";

// Her reklam birimi için ayrı bir slot ID kullanmalısın
// AdSense panelinden "Reklam birimi oluştur" diyerek alırsın
// Örnek: "1234567890"
const AD_SLOTS = {
  top: "XXXXXXXXXX",       // Üst banner (yatay, 728x90 veya responsive)
  bottom: "XXXXXXXXXX",    // Alt banner
  side: "XXXXXXXXXX",      // Yan sütun (dikey, 300x600)
} as const;

type AdPosition = keyof typeof AD_SLOTS;

type AdSlotProps = {
  position: "top" | "after-result" | "bottom" | "side";
  extClass?: string;
};

// Geliştirme ortamında placeholder göster, prodüksiyonda gerçek reklam
const isDev = process.env.NODE_ENV === "development";

export default function AdSlot({ position, extClass }: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null);
  const initialized = useRef(false);

  // "after-result" pozisyonu için "bottom" slot'unu kullan
  const slotKey = (position === "after-result" ? "bottom" : position) as AdPosition;

  useEffect(() => {
    if (isDev || initialized.current || !adRef.current) return;

    try {
      // AdSense scriptinin yüklü olmasını bekle
      if (typeof window !== "undefined" && (window as Window & typeof globalThis & { adsbygoogle?: unknown[] }).adsbygoogle !== undefined) {
        ((window as Window & typeof globalThis & { adsbygoogle: unknown[] }).adsbygoogle =
          (window as Window & typeof globalThis & { adsbygoogle?: unknown[] }).adsbygoogle || []).push({});
        initialized.current = true;
      }
    } catch (err) {
      console.error("AdSense hatası:", err);
    }
  }, []);

  // Geliştirme ortamında placeholder göster
  if (isDev) {
    return (
      <div
        className={`w-full border border-dashed border-gray-700 text-gray-600 text-center text-xs flex items-center justify-center rounded-lg ${
          position === "side" ? "min-h-[600px]" : "min-h-[90px]"
        } ${extClass || ""}`}
      >
        📢 Reklam Alanı — {position}
      </div>
    );
  }

  // Prodüksiyon ortamında gerçek AdSense reklamı
  return (
    <div
      className={`w-full overflow-hidden ${
        position === "side" ? "min-h-[600px]" : "min-h-[90px]"
      } ${extClass || ""}`}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6569569440051199" // Publisher ID
        data-ad-slot={AD_SLOTS[slotKey]}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}