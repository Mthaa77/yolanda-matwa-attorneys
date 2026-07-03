import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-colors", className)}
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="42"
        height="42"
        rx="8"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />
      <rect x="4" y="4" width="36" height="36" rx="6" fill="currentColor" />
      <text
        x="22"
        y="29"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="18"
        fontWeight="700"
        fill="#D9C79A"
        letterSpacing="-0.5"
      >
        YM
      </text>
      <line x1="11" y1="34" x2="33" y2="34" stroke="#B08D45" strokeWidth="0.8" />
    </svg>
  );
}
