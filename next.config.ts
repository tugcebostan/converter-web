import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gereksiz response header'larını kaldırır
  poweredByHeader: false,
  // Sıkıştırma — Next.js varsayılan olarak açık, explicit yazıyoruz
  compress: true,};

export default nextConfig;
