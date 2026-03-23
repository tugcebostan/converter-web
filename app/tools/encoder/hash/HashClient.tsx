"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { copyToClipboard } from "@/lib/utils";
import tr from "@/lib/i18n/tr";
import md5 from "@/lib/md5";

const t = tr;
const ct = tr.converters.hash;

async function generateSha(text: string, algorithm: string): Promise<string> {
  const encoded = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest(algorithm, encoded);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}
 
function generateMd5(text: string): string {
  return md5(text).toString();
}
 
type HashAlgorithm = "MD5" | "SHA-1" | "SHA-256" | "SHA-512";
const ALGORITHMS: HashAlgorithm[] = ["MD5", "SHA-1", "SHA-256", "SHA-512"];


export default function HashClient() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<Record<HashAlgorithm, string>>({
    "MD5": "", "SHA-1": "", "SHA-256": "", "SHA-512": "",
  });
  const [copied, setCopied] = useState<HashAlgorithm | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!input.trim()) return;
    setLoading(true);

    const [sha1, sha256, sha512] = await Promise.all([
      generateSha(input, "SHA-1"),
      generateSha(input, "SHA-256"),
      generateSha(input, "SHA-512"),
    ]);

    setResults({
      "MD5": generateMd5(input),
      "SHA-1": sha1,
      "SHA-256": sha256,
      "SHA-512": sha512,
    });

    setLoading(false);
  }

  function handleCopy(algorithm: HashAlgorithm) {
    if (!results[algorithm]) return;
    copyToClipboard(results[algorithm], () => {
      setCopied(algorithm);
      setTimeout(() => setCopied(null), 2000);
    });
  }

  function handleClear() {
    setInput("");
    setResults({ "MD5": "", "SHA-1": "", "SHA-256": "", "SHA-512": "" });
  }

  return (
    <ToolLayout
      title={ct.title}
      description={ct.description}
      faq={[...ct.faq]}
    >
      <div className="flex flex-col gap-6">

        {/* Giriş alanı */}
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
            className="h-32 p-3 text-sm bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 resize-none focus:outline-none focus:border-blue-500 transition-colors font-mono"
            aria-label={t.common.inputPanel}
          />
        </div>

        {/* Hash üret butonu */}
        <button
          onClick={handleGenerate}
          disabled={!input.trim() || loading}
          className="w-full py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? "Hesaplanıyor..." : ct.generateBtn}
        </button>

        {/* Sonuçlar */}
        <div className="flex flex-col gap-4">
          {ALGORITHMS.map((algo) => (
            <div key={algo} className="flex flex-col gap-1">
              <span className="text-xs text-gray-400 font-medium">{algo}</span>

              {/* Hash değeri + kopyala butonu — mobilde alt alta */}
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  readOnly
                  value={results[algo]}
                  placeholder="—"
                  className="flex-1 p-3 text-sm bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none font-mono min-w-0 overflow-x-auto"
                  aria-label={`${algo} hash değeri`}
                  aria-live="polite"
                />
                <button
                  onClick={() => handleCopy(algo)}
                  disabled={!results[algo]}
                  className="sm:w-24 py-2 px-3 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                >
                  {copied === algo ? t.common.copied : ct.copyLabel}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </ToolLayout>
  );
}