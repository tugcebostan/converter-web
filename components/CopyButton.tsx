type CopyButtonProps = {
    onCopy: () => void;
    copied: boolean;
};

export default function CopyButton({ onCopy, copied }: CopyButtonProps) {
    return (
        <button
            onClick={onCopy}
            aria-label="Sonucu kopyala"
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
            {copied ? (
                <span className="text-green-400 text-sm font-medium">Kopyalandı ✓</span>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
            )}
        </button>
    )
};