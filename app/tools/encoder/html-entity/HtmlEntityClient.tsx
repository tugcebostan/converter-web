"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { copyToClipboard } from "@/lib/utils";
import tr from "@/lib/i18n/tr";

const t = tr;
const ct = tr.converters.htmlEntity;

function encodeHtmlEntity(text: string): string {
  return text
    .replace(/&/g, "&amp;")   // & önce gelmeli, yoksa diğerleri bozulur
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function decodeHtmlEntity(text: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/html");
  return doc.documentElement.textContent ?? "";
}
export default function HtmlEntityClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  function handleEncode() {
    setMode("encode");
    if (!input.trim()) { setOutput(""); return; }
    setOutput(encodeHtmlEntity(input));
  }

  function handleDecode() {
    setMode("decode");
    if (!input.trim()) { setOutput(""); return; }
    setOutput(decodeHtmlEntity(input));
  }

  function handleClear() {
    setInput("");
    setOutput("");
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
            className={`px-4 py-2 text-sm rounded-lg transition-colors ${
              mode === "encode"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 hover:bg-gray-600 text-white"
            }`}
          >
            {ct.encodeBtn}
          </button>
          <button
            onClick={handleDecode}
            className={`px-4 py-2 text-sm rounded-lg transition-colors ${
              mode === "decode"
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
              className="h-48 p-3 text-sm bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 resize-none focus:outline-none font-mono"
              aria-label={t.common.outputPanel}
              aria-live="polite"
            />
          </div>

        </div>
      </div>
    </ToolLayout>
  );
}