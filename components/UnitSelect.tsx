"use client"

import { use, useEffect, useId, useRef, useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

type Option = {
    key: string;
    label: string;
};

type Props = {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    ariaLabel?: string;
}
export default function UnitSelect({ options, value, onChange, ariaLabel }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const id = useId();

    const selected = options.find((o) => o.key === value);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    // Açılınca seçili öğeye scroll
    useEffect(() => {
        if (!isOpen || !listRef.current) return;
        const selectedEl = listRef.current.querySelector("[aria-selected='true']");
        selectedEl?.scrollIntoView({ block: "nearest" });
    }, [isOpen]);
    // Klavye navigasyonu
    function handleKeyDown(e: React.KeyboardEvent) {
        const currentIndex = options.findIndex((o) => o.key === value);

        switch (e.key) {
            case "Enter":
            case " ":
                e.preventDefault();
                setIsOpen((prev) => !prev);
                break;
            case "Escape":
                setIsOpen(false);
                break;
            case "ArrowDown":
                e.preventDefault();
                if (!isOpen) { setIsOpen(true); break; }
                if (currentIndex < options.length - 1) onChange(options[currentIndex + 1].key);
                break;
            case "ArrowUp":
                e.preventDefault();
                if (currentIndex > 0) onChange(options[currentIndex - 1].key);
                break;
        }
    }

    return (
        <div ref={containerRef} className="relative">

            {/* Tetikleyici buton */}
            <button
                type="button"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-controls={id}
                aria-label={ariaLabel}
                onKeyDown={handleKeyDown}
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center justify-between gap-2 min-w-[160px] bg-gray-900 text-white border border-gray-600 rounded-lg px-3 py-2 text-sm hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
            >
                <span className="truncate">{selected?.label ?? "Seçin"}</span>
                {isOpen
                    ? <LuChevronUp size={14} aria-hidden="true" className="shrink-0 text-gray-400" />
                    : <LuChevronDown size={14} aria-hidden="true" className="shrink-0 text-gray-400" />
                }
            </button>

            {/* Dropdown listesi */}
            {isOpen && (
                <ul
                    ref={listRef}
                    id={id}
                    role="listbox"
                    aria-label={ariaLabel}
                    className="absolute z-50 mt-1 w-full max-h-60 overflow-y-auto bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-1"
                >
                    {options.map((option) => {
                        const isSelected = option.key === value;
                        return (
                            <li
                                key={option.key}
                                role="option"
                                aria-selected={isSelected}
                                onClick={() => { onChange(option.key); setIsOpen(false); }}
                                className={`px-3 py-2 text-sm cursor-pointer transition-colors ${isSelected
                                        ? "bg-blue-600 text-white"
                                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                    }`}
                            >
                                {option.label}
                            </li>
                        );
                    })}
                </ul>
            )}

        </div>
    );
}
