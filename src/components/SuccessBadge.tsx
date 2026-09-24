interface SuccessBadgeProps {
  className?: string;
  isAnimating?: boolean;
}

export function SuccessBadge({ className = '', isAnimating = false }: SuccessBadgeProps) {
  return (
    <div
      className={`success-badge-container ${isAnimating ? 'is-animating' : ''} ${className}`.trim()}
      aria-hidden="true"
    >
      <svg
        width="105"
        height="105"
        viewBox="0 0 105 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="success-badge-svg"
      >
        <defs>
          {/* Outer Ring Drop Shadow */}
          <filter id="badge-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
          </filter>

          {/* Holographic Green Base Linear Gradient */}
          <linearGradient id="holo-base" x1="15" y1="90" x2="90" y2="15" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#188672" />
            <stop offset="14%" stopColor="#2FD08A" />
            <stop offset="28%" stopColor="#9EF7BE" />
            <stop offset="42%" stopColor="#32C589" />
            <stop offset="56%" stopColor="#177B66" />
            <stop offset="70%" stopColor="#45DE96" />
            <stop offset="85%" stopColor="#B4FFC7" />
            <stop offset="100%" stopColor="#199983" />
          </linearGradient>

          {/* Swirling Wavy Ribbon Gradients */}
          <linearGradient id="wave-grad-1" x1="20" y1="80" x2="80" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#167965" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#8DF0B5" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1C9E86" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="wave-grad-2" x1="10" y1="65" x2="75" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38D692" stopOpacity="0.7" />
            <stop offset="45%" stopColor="#B6FFCB" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1B937E" stopOpacity="0.7" />
          </linearGradient>

          {/* Disc Clipping Mask */}
          <clipPath id="disc-clip">
            <circle cx="52.5" cy="52.5" r="44.5" />
          </clipPath>

          {/* Checkmark Bevel Filters & Gradients */}
          <linearGradient id="check-highlight" x1="34" y1="66" x2="75" y2="39" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#D8FEF2" />
            <stop offset="100%" stopColor="#96F1D0" />
          </linearGradient>

          <linearGradient id="check-shadow" x1="34" y1="52" x2="52" y2="68" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#166655" />
            <stop offset="100%" stopColor="#1F8B74" />
          </linearGradient>

          <filter id="check-drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#0D4B3D" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* 1. Outer Ring (#EDEDED, 105px diameter) */}
        <circle
          cx="52.5"
          cy="52.5"
          r="52.5"
          fill="#EDEDED"
          filter="url(#badge-shadow)"
        />
        {/* Subtle inner bevel ring */}
        <circle
          cx="52.5"
          cy="52.5"
          r="51"
          fill="none"
          stroke="#F8F8F8"
          strokeWidth="1.5"
        />

        {/* 2. Round Holographic Green Disc (89px diameter) */}
        <g clipPath="url(#disc-clip)">
          {/* Base gradient disc */}
          <circle cx="52.5" cy="52.5" r="44.5" fill="url(#holo-base)" />

          {/* Swirling ribbons / light streaks */}
          <path
            d="M10 95 C25 80, 35 60, 55 45 C75 30, 85 20, 100 10 L105 25 C88 38, 75 52, 58 68 C40 85, 25 98, 15 105 Z"
            fill="url(#wave-grad-1)"
          />
          <path
            d="M0 65 C20 50, 32 35, 50 20 C65 8, 78 2, 90 -5 L95 10 C80 20, 68 32, 50 48 C32 64, 18 78, 5 80 Z"
            fill="url(#wave-grad-2)"
          />
          <path
            d="M30 105 C42 90, 56 75, 72 60 C88 45, 96 38, 108 30 L112 42 C98 52, 88 62, 72 78 C56 94, 44 104, 35 110 Z"
            fill="url(#wave-grad-1)"
            opacity="0.75"
          />

          {/* Fine surface sheen lines */}
          <path
            d="M15 80 Q 45 48 85 22"
            stroke="#C4FFD5"
            strokeWidth="2.5"
            strokeOpacity="0.4"
            fill="none"
          />
          <path
            d="M25 92 Q 55 60 92 35"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeOpacity="0.5"
            fill="none"
          />

          {/* Inner radial vignette / edge depth */}
          <circle
            cx="52.5"
            cy="52.5"
            r="44.5"
            fill="none"
            stroke="#125747"
            strokeWidth="1.5"
          />
        </g>

        {/* 3. Bevelled White-ish Checkmark (~45px wide) */}
        <g filter="url(#check-drop-shadow)">
          {/* Base checkmark body with bevel border */}
          <path
            d="M34 52 L48 66 L75 39"
            fill="none"
            stroke="#166B5A"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="success-badge__check-base"
          />
          {/* Lower shaded facet */}
          <path
            d="M34 52 L48 66 L75 39"
            fill="none"
            stroke="url(#check-shadow)"
            strokeWidth="7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="success-badge__check-shadow"
          />
          {/* Upper light highlight facet */}
          <path
            d="M34 51.2 L48 65.2 L75 38.2"
            fill="none"
            stroke="url(#check-highlight)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="success-badge__check-path"
          />
          {/* Crisp central ridge highlight */}
          <path
            d="M34.5 50.8 L48 64.8 L74.5 38"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.9"
            className="success-badge__check-ridge"
          />
        </g>

        {/* 4. Two Tiny Four-Point Sparkles */}
        {/* Top-left Sparkle (x ≈ 44, y ≈ 34) */}
        <g transform="translate(44, 34)">
          <g className="success-badge__sparkle success-badge__sparkle-1">
            {/* Sparkle base shape */}
            <path
              d="M 0,-7 Q 0.6,-1.2 6.5,0 Q 0.6,1.2 0,7 Q -0.6,1.2 -6.5,0 Q -0.6,-1.2 0,-7 Z"
              fill="#D9FFE9"
              stroke="#167A65"
              strokeWidth="0.6"
            />
            {/* Highlight facets */}
            <path d="M 0,-7 Q 0.6,-1.2 6.5,0 L 0,0 Z" fill="#FFFFFF" />
            <path d="M 0,7 Q -0.6,1.2 -6.5,0 L 0,0 Z" fill="#75DC9F" />
          </g>
        </g>

        {/* Bottom-right Sparkle (x ≈ 62, y ≈ 74) */}
        <g transform="translate(62, 74)">
          <g className="success-badge__sparkle success-badge__sparkle-2">
            {/* Sparkle base shape */}
            <path
              d="M 0,-6 Q 0.5,-1 5.5,0 Q 0.5,1 0,6 Q -0.5,1 -5.5,0 Q -0.5,-1 0,-6 Z"
              fill="#D9FFE9"
              stroke="#167A65"
              strokeWidth="0.6"
            />
            {/* Highlight facets */}
            <path d="M 0,-6 Q 0.5,-1 5.5,0 L 0,0 Z" fill="#FFFFFF" />
            <path d="M 0,6 Q -0.5,1 -5.5,0 L 0,0 Z" fill="#75DC9F" />
          </g>
        </g>
      </svg>
    </div>
  );
}
