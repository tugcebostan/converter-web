import { BeautifyResult } from "../tools";

const INLINE_TAGS = new Set([
  "a", "abbr", "b", "br", "button", "cite", "code", "em", "i",
  "img", "input", "label", "output", "q", "select", "small",
  "span", "strong", "sub", "sup", "textarea", "time", "var",
]);

const PRE_TAGS = new Set(["pre", "script", "style", "textarea"]);

export function beautifyHtml(input: string, indent: number = 2): BeautifyResult {
  try {
    const indentStr = " ".repeat(indent);
    const lines: string[] = [];
    let depth = 0;
    let inPreTag = false;
    let preTagName = "";

    const tokens = input.match(/<[^>]+>|[^<]+/g) ?? [];

    for (const token of tokens) {
      const trimmed = token.trim();
      if (!trimmed) continue;

      const isTag = trimmed.startsWith("<");

      if (!isTag) {
        if (inPreTag) {
          lines.push(token);
        } else {
          const text = trimmed.replace(/\s+/g, " ");
          if (text) lines.push(indentStr.repeat(depth) + text);
        }
        continue;
      }

      const isClosing = trimmed.startsWith("</");
      const isSelfClosing =
        trimmed.endsWith("/>") ||
        /^<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)[\s>]/i.test(trimmed);
      const isComment = trimmed.startsWith("<!--");
      const isDoctype = /^<!doctype/i.test(trimmed);

      const tagMatch = trimmed.match(/^<\/?([a-z][a-z0-9]*)/i);
      const tagName = tagMatch ? tagMatch[1].toLowerCase() : "";

      if (isComment || isDoctype) {
        lines.push(indentStr.repeat(depth) + trimmed);
        continue;
      }

      if (isClosing) {
        if (PRE_TAGS.has(tagName) && inPreTag && tagName === preTagName) {
          inPreTag = false;
        }
        if (!INLINE_TAGS.has(tagName)) depth = Math.max(0, depth - 1);
        lines.push(indentStr.repeat(depth) + trimmed);
        continue;
      }

      if (isSelfClosing) {
        lines.push(indentStr.repeat(depth) + trimmed);
        continue;
      }

      lines.push(indentStr.repeat(depth) + trimmed);

      if (PRE_TAGS.has(tagName)) {
        inPreTag = true;
        preTagName = tagName;
      }

      if (!INLINE_TAGS.has(tagName)) {
        depth++;
      }
    }

    return { success: true, output: lines.join("\n") };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Hata oluştu";
    return { success: false, error: message };
  }
}

export function minifyHtml(input: string): BeautifyResult {
  try {
    const output = input
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/\s+/g, " ")
      .replace(/>\s+</g, "><")
      .replace(/\s+>/g, ">")
      .replace(/<\s+/g, "<")
      .trim();

    return { success: true, output };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Hata oluştu";
    return { success: false, error: message };
  }
}