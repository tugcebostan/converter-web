"use client";

import { useEffect, useState } from "react";
import { LuMaximize2, LuMinimize2 } from "react-icons/lu";
import CodeMirrorEditor, { EditorLanguage } from "@/components/CodeMirrorEditor";
import tr from "@/lib/i18n/tr";

const t = tr;

type Props = {
    label: string;
    value: string;
    onChange?: (value: string) => void;
    language: EditorLanguage;
    editable?: boolean;
    placeholder?: string;
    actionSlot?: React.ReactNode; // sağ üste ekstra buton (temizle, kopyala vb.)
};

export default function EditorPanel({
    label,
    value,
    onChange,
    language,
    editable = false,
    placeholder,
    actionSlot,
}: Props) {
    const [isFullscreen, setIsFullscreen] = useState(false);
    // isFullscreen true olunca Escape dinle
    useEffect(() => {
        if (!isFullscreen) return;

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setIsFullscreen(false);
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isFullscreen]);
    return (
        <>
            {/* Normal panel */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                        {label}
                    </span>
                    <div className="flex items-center gap-3">
                        {actionSlot}
                        <button
                            onClick={() => setIsFullscreen(true)}
                            aria-label={t.common.enterFullscreen}
                            className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                        >
                            <LuMaximize2 size={14} />
                        </button>
                    </div>
                </div>
                <div className="h-[400px] overflow-auto rounded-lg border border-gray-700">
                    <CodeMirrorEditor
                        value={value}
                        onChange={onChange}
                        language={language}
                        editable={editable}
                        placeholder={placeholder}
                        minHeight="400px"
                    />
                </div>
            </div>

            {/* Fullscreen overlay */}
            {isFullscreen && (
                <div className="fixed inset-0 z-50 bg-gray-950 flex flex-col">

                    {/* Fullscreen başlık çubuğu */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700 bg-gray-900">
                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                            {label}
                        </span>
                        <div className="flex items-center gap-3">
                            {actionSlot}
                            <button
                                onClick={() => setIsFullscreen(false)}
                                aria-label={t.common.exitFullscreen}
                                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                            >
                                <LuMinimize2 size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Fullscreen editör */}
                    <div className="flex-1 overflow-auto">
                        <CodeMirrorEditor
                            value={value}
                            onChange={onChange}
                            language={language}
                            editable={editable}
                            placeholder={placeholder}
                            minHeight="100%"
                            fullscreen
                        />
                    </div>

                </div>
            )}
        </>
    );
}