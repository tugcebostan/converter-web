"use client";

import { useEffect, useRef } from "react";
import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { json } from "@codemirror/lang-json";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";

export type EditorLanguage = "json" | "css" | "html";

type Props = {
  value: string;
  onChange?: (value: string) => void;
  language: EditorLanguage;
  editable?: boolean;
  placeholder?: string;
  minHeight?: string;
  fullscreen?: boolean;

};

function getLanguageExtension(lang: EditorLanguage) {
  switch (lang) {
    case "json": return json();
    case "css": return css();
    case "html": return html();
  }
}

export default function CodeMirrorEditor({
  value,
  onChange,
  language,
  editable = true,
  placeholder,
  minHeight = "400px",
  fullscreen = false,

}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);

  // Editörü bir kez kur
  useEffect(() => {
    if (!containerRef.current) return;

    const view = new EditorView({
      state: EditorState.create({
        doc: value,
        extensions: [
          basicSetup,
          getLanguageExtension(language),
          oneDark,
          EditorView.editable.of(editable),
          EditorView.theme({
            "&": {
              minHeight: fullscreen ? "100%" : minHeight,
              height: fullscreen ? "100%" : "auto",
            },
            ".cm-scroller": {
              fontFamily: "ui-monospace, monospace",
              fontSize: "13px",
              overflow: "auto",
            },
            ".cm-content": {
              padding: "12px 0",
            },
            // Placeholder stili
            ".cm-placeholder": {
              color: "#6b7280",
              fontStyle: "italic",
            },
          }),
          // Değişiklik olunca onChange'i çağır
          EditorView.updateListener.of((update) => {
            if (update.docChanged && onChange) {
              onChange(update.state.doc.toString());
            }
          }),
          // Placeholder
          ...(placeholder
            ? [EditorView.contentAttributes.of({
              "data-placeholder": placeholder,
            })]
            : []),
        ],
      }),
      parent: containerRef.current,
    });

    viewRef.current = view;

    return () => {
      view.destroy();
      viewRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // ← sadece mount'ta çalışır

  // Dışarıdan value değişince editörü güncelle
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;

    const current = view.state.doc.toString();
    if (current === value) return; // zaten aynıysa dokunma

    view.dispatch({
      changes: {
        from: 0,
        to: current.length,
        insert: value,
      },
    });
  }, [value]);

  // Dil değişince editörü yeniden kur
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;

    const current = view.state.doc.toString();

    view.setState(
      EditorState.create({
        doc: current,
        extensions: [
          basicSetup,
          getLanguageExtension(language),
          oneDark,
          EditorView.editable.of(editable),
          EditorView.theme({
            "&": { minHeight, height: "100%" },
            ".cm-scroller": {
              fontFamily: "ui-monospace, monospace",
              fontSize: "13px",
              overflow: "auto",
            },
            ".cm-content": { padding: "12px 0" },
            ".cm-placeholder": { color: "#6b7280", fontStyle: "italic" },
          }),
          EditorView.updateListener.of((update) => {
            if (update.docChanged && onChange) {
              onChange(update.state.doc.toString());
            }
          }),
          ...(placeholder
            ? [EditorView.contentAttributes.of({ "data-placeholder": placeholder })]
            : []),
        ],
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <div
      ref={containerRef}
      className="rounded-lg overflow-hidden border border-gray-700 h-full"
    />
  );
}