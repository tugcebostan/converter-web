"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tools, groupToolsByCategory } from "@/lib/tools";
import { useState } from "react";
import { LuMenu, LuX, LuChevronDown } from "react-icons/lu";
import tr from "@/lib/i18n/tr";

const t = tr;
const groups = groupToolsByCategory(tools);

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<string[]>([
    t.categories.unitConverter,
  ]);

  const toggleCategory = (key: string) => {
    setOpenCategories((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <header className="bg-gray-900 text-white border-b border-gray-700 relative z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          aria-label={t.header.logoText}
          className="text-xl font-bold text-white hover:text-blue-400 shrink-0"
        >
          {t.header.logoText}
        </Link>

        {/* Masaüstü menü */}
        <nav aria-label={t.header.desktopNavLabel} className="hidden md:flex items-center gap-2">
          {groups.map((group) => (
            <div key={group.categoryName} className="relative group">

              <button
                aria-label={t.header.categoryMenuLabel(group.categoryName)}
                aria-haspopup="true"
                className="flex items-center gap-1 text-sm px-3 py-2 rounded text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              >
                {group.categoryName}
                <LuChevronDown
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </button>

              <div
                role="menu"
                aria-label={t.header.categoryMenuLabel(group.categoryName)}
                className="
                  absolute top-full left-0 mt-1 min-w-[180px]
                  bg-gray-800 border border-gray-700 rounded-lg shadow-lg
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-150
                "
              >
                <ul className="py-1 list-none">
                  {group.tools.map((tool) => (
                    <li key={tool.href} role="none">
                      <Link
                        href={tool.href}
                        role="menuitem"
                        aria-current={pathname === tool.href ? "page" : undefined}
                        className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                          pathname === tool.href
                            ? "bg-blue-600 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`}
                      >
                        <tool.icon size={15} aria-hidden="true" className="shrink-0 text-blue-400" />
                        {tool.title.replace(" Dönüştürücü", "")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </nav>

        {/* Hamburger butonu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t.header.closeMenuLabel : t.header.openMenuLabel}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 rounded hover:bg-gray-700 transition-colors"
        >
          {menuOpen
            ? <LuX size={22} aria-hidden="true" />
            : <LuMenu size={22} aria-hidden="true" />
          }
        </button>

      </div>

      {/* Mobil menü */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={t.header.mobileNavLabel}
          className="md:hidden border-t border-gray-700 bg-gray-900"
        >
          {groups.map((group) => {
            const isOpen = openCategories.includes(group.categoryName);
            return (
              <div key={group.categoryName} className="border-b border-gray-800 last:border-b-0">

                <button
                  onClick={() => toggleCategory(group.categoryName)}
                  aria-expanded={isOpen}
                  aria-controls={`mobile-category-${group.categoryName}`}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {group.categoryName}
                  <LuChevronDown
                    size={16}
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <ul
                    id={`mobile-category-${group.categoryName}`}
                    className="list-none pb-2 px-2"
                  >
                    {group.tools.map((tool) => (
                      <li key={tool.href}>
                        <Link
                          href={tool.href}
                          onClick={() => setMenuOpen(false)}
                          aria-current={pathname === tool.href ? "page" : undefined}
                          className={`flex items-center gap-2 px-4 py-2 rounded text-sm transition-colors ${
                            pathname === tool.href
                              ? "bg-blue-600 text-white"
                              : "text-gray-400 hover:text-white hover:bg-gray-800"
                          }`}
                        >
                          <tool.icon size={15} aria-hidden="true" className="shrink-0 text-blue-400" />
                          {tool.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            );
          })}
        </nav>
      )}

    </header>
  );
}