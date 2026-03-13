"use client";

import Link from "next/link";
import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { tools, groupToolsByCategory } from "@/lib/tools";
import tr from "@/lib/i18n/tr";

const t = tr;

export default function ToolAccordion() {
  const groups = groupToolsByCategory(tools);

  const [openCategories, setOpenCategories] = useState<string[]>(
    () => groups.map((g) => g.categoryName)
  );

  const toggleCategory = (name: string) => {
    setOpenCategories((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="space-y-3">
      {groups.map((group) => {
        const isOpen = openCategories.includes(group.categoryName);

        return (
          <div
            key={group.categoryName}
            className="border border-gray-700 rounded-xl overflow-hidden"
          >
            {/* Akordiyon başlığı */}
            <button
              onClick={() => toggleCategory(group.categoryName)}
              aria-expanded={isOpen}
              aria-controls={`accordion-${group.categoryName}`}
              className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-300 hover:text-white transition-colors"
            >
              <span>{group.categoryName}</span>
              {isOpen
                ? <LuChevronUp size={18} aria-hidden="true" className="text-gray-400 shrink-0" />
                : <LuChevronDown size={18} aria-hidden="true" className="text-gray-400 shrink-0" />
              }
            </button>

            {/* Araç kartları */}
            {isOpen && (
              <div
                id={`accordion-${group.categoryName}`}
                className="px-4 pb-4 pt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {group.tools.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    aria-label={t.common.toolCardLabel(tool.title)}
                    className="group flex flex-col bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-blue-500 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <tool.icon size={22} aria-hidden="true" className="text-blue-400 shrink-0" />
                      <h2 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {tool.title}
                      </h2>
                    </div>
                    <p className="text-gray-400 text-sm flex-1">{tool.description}</p>
                    <span className="inline-block mt-3 text-xs text-blue-500 group-hover:underline">
                      {t.common.useTool}
                    </span>
                  </Link>
                ))}
              </div>
            )}

          </div>
        );
      })}
    </div>
  );
}