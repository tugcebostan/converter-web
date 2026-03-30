import Link from "next/link";
import tr from "@/lib/i18n/tr";

const legalLinks = [
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
  { href: "/privacy", label: "Gizlilik Politikası" },
  { href: "/terms", label: "Kullanım Koşulları" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-700 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* Legal linkler */}
        <nav
          aria-label="Alt navigasyon"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4"
        >
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Telif hakkı */}
        <p className="text-center text-sm">
          © {new Date().getFullYear()} {tr.common.footerName} —{" "}
          {tr.common.allRightsReserved}
        </p>

      </div>
    </footer>
  );
}