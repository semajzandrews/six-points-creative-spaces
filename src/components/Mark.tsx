/* Original six-point star mark, drawn for this brand (no external icon set). */
export function MarkDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id="sixGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f0d489" />
          <stop offset="0.5" stopColor="#d4a545" />
          <stop offset="1" stopColor="#a87b23" />
        </linearGradient>
        <symbol id="six-star" viewBox="0 0 100 100">
          <path
            d="M50 2 L57 38 L91.5 26 L64 50 L91.5 74 L57 62 L50 98 L43 62 L8.5 74 L36 50 L8.5 26 L43 38 Z"
            fill="url(#sixGold)"
          />
        </symbol>
      </defs>
    </svg>
  );
}

export function Star({ className = "", size = 18 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} aria-hidden="true">
      <use href="#six-star" />
    </svg>
  );
}
