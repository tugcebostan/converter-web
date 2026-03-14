"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { beautifyHtml, minifyHtml } from "@/lib/beautifiers";
import { copyToClipboard } from "@/lib/utils";
import tr from "@/lib/i18n/tr";
import StatusMessage from "@/components/StatusMessage";
import EditorPanel from "@/components/EditorPanel";
import { LuCode, LuEye } from "react-icons/lu";

const t = tr;
const ct = tr.converters.htmlBeautifier;

type IndentSize = 2 | 4;

export default function HtmlBeautifierClient() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [indent, setIndent] = useState<IndentSize>(2);
    const [status, setStatus] = useState<"idle" | "valid" | "invalid">("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [copied, setCopied] = useState(false);
    const [showViewer, setShowViewer] = useState(false);
    const [actionCount, setActionCount] = useState(0);

    function handleBeautify() {
        if (!input.trim()) return;
        const result = beautifyHtml(input, indent);
        setActionCount((c) => c + 1);
        setShowViewer(false);
        if (result.success) {
            setOutput(result.output);
            setStatus("valid");
            setErrorMsg("");
        } else {
            setOutput("");
            setStatus("invalid");
            setErrorMsg(result.error);
        }
    }

    function handleMinify() {
        if (!input.trim()) return;
        const result = minifyHtml(input);
        setActionCount((c) => c + 1);
        setShowViewer(false);
        if (result.success) {
            setOutput(result.output);
            setStatus("valid");
            setErrorMsg("");
        } else {
            setOutput("");
            setStatus("invalid");
            setErrorMsg(result.error);
        }
    }

    function handleClear() {
        setInput("");
        setOutput("");
        setStatus("idle");
        setErrorMsg("");
        setShowViewer(false);
    }

    function handleCopy() {
        if (!output) return;
        copyToClipboard(output, () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    }

    return (
        <ToolLayout
            title={ct.title}
            description={ct.description}
            faq={[...ct.faq]}
        >
            <div className="flex flex-col gap-4">

                {/* Araç çubuğu */}
                <div className="flex flex-wrap items-center gap-2">

                    {/* Sol grup — işlem butonları */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleBeautify}
                            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                        >
                            {t.common.beautify}
                        </button>
                        <button
                            onClick={handleMinify}
                            className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                        >
                            {t.common.minify}
                        </button>
                        <button
                            onClick={() => setShowViewer((prev) => !prev)}
                            disabled={!input}
                            aria-label={showViewer ? t.common.showEditor : t.common.preview}
                            className={`px-4 py-2 text-sm rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${showViewer
                                ?"bg-gray-700 hover:bg-gray-600 text-white"    
                                : "bg-purple-600 hover:bg-purple-700 text-white"
                                }`}
                        >
                            {/* Mobilde ikon, masaüstünde yazı */}
                            <span className="md:hidden">
                                {showViewer ? <LuCode size={16} /> : <LuEye size={16} />}
                            </span>
                            <span className="hidden md:inline">
                                {showViewer ? t.common.showEditor : t.common.preview}
                            </span>
                        </button>
                    </div>

                    {/* Sağ grup — girinti seçimi */}
                    <div className="flex items-center gap-2 ml-auto">
                        <span className="text-xs text-gray-400">{t.common.indentSize}:</span>
                        {([2, 4] as IndentSize[]).map((size) => (
                            <button
                                key={size}
                                onClick={() => setIndent(size)}
                                className={`px-3 py-1 text-xs rounded-lg transition-colors ${indent === size
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                </div>

                {/* Editör panelleri — her zaman iki panel yan yana */}
                <div className="grid md:grid-cols-2 gap-4">

                    {/* Sol — giriş paneli her zaman görünür */}
                    <EditorPanel
                        label={t.common.inputPanel}
                        value={input}
                        onChange={setInput}
                        language="html"
                        editable
                        placeholder={ct.inputPlaceholder}
                        actionSlot={
                            <button
                                onClick={handleClear}
                                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                            >
                                {t.common.clearInput}
                            </button>
                        }
                    />

                    {/* Sağ — viewer veya editör */}
                    {showViewer ? (
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                                    {t.common.showEditor}
                                </span>
                            </div>
                            <div className="h-[400px] rounded-lg border border-gray-700 overflow-hidden">
                                <iframe
                                    srcDoc={`
                                        <style>
                                        * { box-sizing: border-box; }
                                        html, body { margin: 0; padding: 0; overflow: auto; }
                                        </style>
                                        ${output || input}
                                    `}
                                    title="HTML Önizleme"
                                    sandbox="allow-scripts"
                                    className="w-full h-full bg-white"
                                    style={{ border: "none" }}
                                />
                            </div>
                        </div>
                    ) : (
                        <EditorPanel
                            label={t.common.outputPanel}
                            value={output}
                            language="html"
                            placeholder={ct.outputPlaceholder}
                            actionSlot={
                                <button
                                    onClick={handleCopy}
                                    disabled={!output}
                                    className="text-xs text-gray-500 hover:text-gray-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    {copied ? t.common.copied : t.common.copyOutput}
                                </button>
                            }
                        />
                    )}

                </div>

                {/* Durum mesajı */}
                <StatusMessage
                    status={status}
                    errorMsg={errorMsg}
                    actionCount={actionCount}
                    autoDismiss={true}
                    dismissAfter={3000}
                    fadeOut={true}
                />

            </div>
        </ToolLayout>
    );
}