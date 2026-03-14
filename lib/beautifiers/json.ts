import { BeautifyResult } from "../tools";

export function beautifyJson(input: string, indent: number): BeautifyResult {
    try {
        const parsed = JSON.parse(input);
        return { success: true, output: JSON.stringify(parsed, null, indent) };
    }
    catch (err) {
        const message = err instanceof Error ? err.message : "Geçersiz JSON";
        const lineMatch = message.match(/line (\d+)/);
        const line = lineMatch ? parseInt(lineMatch[1]) : undefined;
        return { success: false, error: message, line: line };
    }

}
export function minifyJson(input: string): BeautifyResult {
    try {
        const parsed = JSON.parse(input);
        return { success: true, output: JSON.stringify(parsed) };
    }
    catch (err) {
        const message = err instanceof Error ? err.message : "Geçersiz JSON";
        return { success: false, error: message };
    }
}
