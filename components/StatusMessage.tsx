"use client";

import { useEffect, useState } from "react";
import tr from "@/lib/i18n/tr";

const t = tr;

type Status = "idle" | "valid" | "invalid";

type Props = {
  status: Status;
  errorMsg?: string;
  actionCount?: number; // ← yeni
  autoDismiss?: boolean;
  dismissAfter?: number;
  fadeOut?: boolean;
};

export default function StatusMessage({
  status,
  errorMsg,
  actionCount,
  autoDismiss = false,
  dismissAfter = 3000,
  fadeOut = true,
}: Props) {
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  // status veya errorMsg değişince sıfırla
  useEffect(() => {
    setFading(false);
    setHidden(false);

    if (!autoDismiss || status === "idle") return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    if (fadeOut) {
      timers.push(
        setTimeout(() => setFading(true), dismissAfter - 500)
      );
    }

    timers.push(
      setTimeout(() => setHidden(true), dismissAfter)
    );

    return () => timers.forEach(clearTimeout);
  }, [status,actionCount, errorMsg]); // ← status VE errorMsg değişince tetikle

  if (status === "idle" || hidden) return null;

  return (
    <div
      className={`text-sm px-3 py-2 rounded-lg transition-opacity duration-500 ${fading ? "opacity-0" : "opacity-100"
        } ${status === "valid"
          ? "bg-green-900/40 text-green-400 border border-green-800"
          : "bg-red-900/40 text-red-400 border border-red-800"
        }`}
    >
      {status === "valid" ? t.common.valid : errorMsg}
    </div>
  );
}