interface DotRowProps {
  count?: number;
  className?: string;
}

export function DotRow({ count = 16, className = '' }: DotRowProps) {
  const dots = Array.from({ length: count }, (_, i) => i);

  return (
    <div className={`dot-row ${className}`.trim()} aria-hidden="true">
      {dots.map((index) => (
        <span key={index} className="dot-row__dot" />
      ))}
    </div>
  );
}
