"use client"

import ToolLayout from "@/components/ToolLayout";
import tr from "@/lib/i18n/tr";
import { copyToClipboard } from "@/lib/utils";
import { unescape } from "querystring";
import { useState } from "react";

const t = tr;
const ct = tr.converters.base64;

function encodeBase64(text: string): string {
    const bytes = new TextEncoder().encode(text);
    const binary = Array.from(bytes).map(b => String.fromCharCode(b)).join("");
    return btoa(binary);
}

function decodeBase64(text: string): { result: string; error: string | null } {
    try {
        const binary = atob(text.trim());
        const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
        return {
            result: new TextDecoder().decode(bytes),
            error: null,
        };
    }
    catch {
        return {
            result: "",
            error: ct.errorInvalidBase64,
        };
    }
}

export default function Base64Client() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);
    const [mode, setMode] = useState<"encode" | "decode">("encode");

    function handleEncode() {
        setMode("encode");
        setError(null);
        if (!input.trim()) { setOutput(""); return; }
        setOutput(encodeBase64(input));
    }

    function handleDecode() {
        setMode("decode");
        const { result, error } = decodeBase64(input);
        setError(error);
        setOutput(result);
    }

    function handleClear() {
        setInput("");
        setOutput("");
        setError(null);
        setCopied(false);
    }

    function handleCopy() {
        if (!output) return;
        copyToClipboard(output, () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }

    return (
        <ToolLayout
            title={ct.title}
            description={ct.description}
            faq={[...ct.faq]}
        >
            <div className="flex flex-col gap-4">

                {/* İşlem butonları */}
                <div className="flex gap-2">
                    <button
                        onClick={handleEncode}
                        className={`px-4 py-2 text-sm rounded-lg transition-colors ${mode === "encode"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-700 hover:bg-gray-600 text-white"
                            }`}
                    >
                        {ct.encodeBtn}
                    </button>
                    <button
                        onClick={handleDecode}
                        className={`px-4 py-2 text-sm rounded-lg transition-colors ${mode === "decode"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-700 hover:bg-gray-600 text-white"
                            }`}
                    >
                        {ct.decodeBtn}
                    </button>
                </div>

                {/* Giriş / Çıkış panelleri */}
                <div className="grid md:grid-cols-2 gap-4">

                    {/* Giriş */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                                {t.common.inputPanel}
                            </span>
                            <button
                                onClick={handleClear}
                                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                            >
                                {t.common.clearInput}
                            </button>
                        </div>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={ct.inputPlaceholder}
                            className="h-48 p-3 text-sm bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 resize-none focus:outline-none focus:border-blue-500 transition-colors font-mono"
                            aria-label={t.common.inputPanel}
                        />
                    </div>

                    {/* Çıkış */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                                {t.common.outputPanel}
                            </span>
                            <button
                                onClick={handleCopy}
                                disabled={!output}
                                className="text-xs text-gray-500 hover:text-gray-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                {copied ? t.common.copied : t.common.copyOutput}
                            </button>
                        </div>
                        <textarea
                            readOnly
                            value={output}
                            placeholder={ct.outputPlaceholder}
                            className={`h-48 p-3 text-sm bg-gray-800 border rounded-lg text-white placeholder-gray-500 resize-none focus:outline-none font-mono ${error ? "border-red-500" : "border-gray-700"
                                }`}
                            aria-label={t.common.outputPanel}
                            aria-live="polite"
                        />
                        {/* Hata mesajı */}
                        {error && (
                            <p className="text-xs text-red-400" role="alert">
                                {error}
                            </p>
                        )}
                    </div>

                </div>
            </div>
        </ToolLayout>
    )
}