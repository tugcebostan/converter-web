type AdSlotProps = {
    position: "top" | "after-result" | "bottom" | "side";
};

export default function AdSlot({ position }: AdSlotProps) {
    // Placeholder for ad rendering logic based on position
    return (
        <div
            className="w-full bg-gray-100 text-gray-400 text-center text-xs flex items-center justify-center"
            style={{ minHeight: "90px" }}
        >
            Ad Slot – {position}
        </div>
    );
}