"use client";

import { useEffect } from "react";

// AdSense Publisher ID'ni buraya gir
// Örnek: "ca-pub-1234567890123456"
const PUBLISHER_ID = "ca-pub-6569569440051199";

export default function GoogleAdsense() {
  useEffect(() => {
    // Script zaten yüklüyse tekrar ekleme
    if (document.querySelector(`script[src*="adsbygoogle"]`)) return;

    const script = document.createElement("script");
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUBLISHER_ID}`;
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }, []);

  return null; // Bu component hiçbir şey render etmez, sadece script ekler
}