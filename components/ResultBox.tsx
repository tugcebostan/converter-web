import CopyButton from "./CopyButton";

type ResultBoxProps={
    result: number;
    copied: boolean;
    onCopy: () => void;
};

export default function ResultBox({ result, copied, onCopy }: ResultBoxProps) {
return(
    <div className="flex items-center justify-between  border border-gray-600 rounded-lg px-4 py-3">
    <div>
        <p className="text-xs text-gray-400 mb-1">Sonuç</p>
        <p className="text-2xl font-bold text-white">{result}</p>
    </div>
    <CopyButton onCopy={onCopy} copied={copied} />
</div>
);
}