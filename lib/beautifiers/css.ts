import { BeautifyResult } from "../tools";

export function beautifyCss(input: string, indent: number): BeautifyResult {
    try {
        const indentStr = " ".repeat(indent);
        let result = "";
        let depth = 0;
        let intString = false;
        let stringChar = "";
        for (let i = 0; i < input.length; i++) {
            const char = input[i];
            const next = input[i + 1];
            if (!intString && (char === '"' || char === "'")) {
                intString = true;
                stringChar = char;
                result += char;
                continue;
            }
            if (intString && char === stringChar) {
                intString = false;
                result += char;
                continue;
            }
            if (intString) {
                result += char;
                continue;
            }
            if (char === "{") {
                result += "{\n" + indentStr.repeat(depth + 1);
                depth++;
            } else if (char === "}") {
                depth--;
                result = result.trimEnd();
                result += "\n" + indentStr.repeat(depth) + "}\n\n";
            } else if (char === ";") {
                result += ";\n" + indentStr.repeat(depth);
            } else if (char === ": ") {
                result += ": ";
                while (input[i + 1] === " ") i++;
            } else if (char === "\n" || char === "\r") {
                continue
            } else if (char === " " && (next === "{" || next === "}" || next === ";")) {
                continue;
            } else {
                result += char;
            }
        }
        return { success: true, output: result.trim() };
    } catch (err) {
   const message = err instanceof Error ? err.message : "Hata oluştu";
    return { success: false, error: message };
    }
}
export function minifyCss(input: string): BeautifyResult {
  try {
    const output = input
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\s+/g, " ")
      .replace(/\s*{\s*/g, "{")
      .replace(/\s*}\s*/g, "}")
      .replace(/\s*:\s*/g, ":")
      .replace(/\s*;\s*/g, ";")
      .replace(/\s*,\s*/g, ",")
      .replace(/;}/g, "}")
      .trim();

    return { success: true, output };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Hata oluştu";
    return { success: false, error: message };
  }
}
