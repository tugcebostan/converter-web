"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import CodeMirrorEditor from "@/components/CodeMirrorEditor";
import { beautifyJson, minifyJson, validateJson } from "@/lib/beautifiers";
import { copyToClipboard } from "@/lib/utils";
import tr from "@/lib/i18n/tr";
import StatusMessage from "@/components/StatusMessage";
import EditorPanel from "@/components/EditorPanel";

const t = tr;
const ct = tr.converters.jsonBeautifier;

type IndentSize = 2 | 4;

export default function JsonBeautifierClient() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [indent, setIndent] = useState<IndentSize>(2);
    const [status, setStatus] = useState<"idle" | "valid" | "invalid">("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [copied, setCopied] = useState(false);
    const [actionCount, setActionCount] = useState(0);

    // ─── İşlem fonksiyonları ─────────────────────────

    function handleBeautify() {
        if (!input.trim()) return;
        const result = beautifyJson(input, indent);
        setActionCount((c) => c + 1);
        if (result.success) {
            setOutput(result.output);
            setStatus("valid");
            setErrorMsg("");
        } else {
            setOutput("");
            setStatus("invalid");
            setErrorMsg(t.common.errorLabel(result.line));
        }
    }

    function handleMinify() {
        if (!input.trim()) return;
        const result = minifyJson(input);
        setActionCount((c) => c + 1);
        if (result.success) {
            setOutput(result.output);
            setStatus("valid");
            setErrorMsg("");
        } else {
            setOutput("");
            setStatus("invalid");
            setErrorMsg(t.common.errorLabel(result.line));
        }
    }

    function handleClear() {
        setInput("");
        setOutput("");
        setStatus("idle");
        setErrorMsg("");
    }

    function handleCopy() {
        if (!output) return;
        copyToClipboard(output, () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    }

    // ─── Render ──────────────────────────────────────

    return (
        <ToolLayout
            title={ct.title}
            description={ct.description}
            faq={[...ct.faq]}
        >
            <div className="flex flex-col gap-4">

                {/* Araç çubuğu */}
                <div className="flex flex-wrap items-center gap-2">

                    {/* İşlem butonları */}
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

                    {/* Girinti seçimi */}
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



                {/* Editör panelleri */}
                {/* Editör panelleri */}
                <div className="grid md:grid-cols-2 gap-4">

                    <EditorPanel
                        label={t.common.inputPanel}
                        value={input}
                        onChange={setInput}
                        language="json"
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

                    <EditorPanel
                        label={t.common.outputPanel}
                        value={output}
                        language="json"
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