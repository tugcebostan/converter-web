type AdSlotProps = {
    position: "top" | "after-result" | "bottom" | "side";
};

export default function AdSlot({ position }: AdSlotProps) {
  return (
    <div
      className={`w-full border border-dashed border-gray-700 text-gray-600 text-center text-xs flex items-center justify-center rounded-lg ${
        position === "side" ? "min-h-[600px]" : "min-h-[90px]"
      }`}
    >
      Ad Slot – {position}
    </div>
  );
}