// Navigasyon linklerini içerdiği için istemci bileşeni
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// İleride yeni araç ekledikçe buraya satır eklemen yeterli
const navLinks = [
  { href: "/length-converter", label: "Uzunluk" },
  { href: "/weight-converter", label: "Ağırlık" }, 
  // { href: "/code-beautifier", label: "Kod Düzenleyici" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gray-900 text-white border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo / Site adı */}
        <Link href="/" className="text-xl font-bold text-white hover:text-blue-400">
          ToolBox
        </Link>

        {/* Navigasyon linkleri */}
        <nav aria-label="Ana navigasyon">
          <ul className="flex gap-4 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm px-3 py-1 rounded transition-colors ${
                    pathname === link.href
                      ? "bg-blue-600 text-white"        // aktif sayfa
                      : "text-gray-300 hover:text-white" // diğer sayfalar
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}