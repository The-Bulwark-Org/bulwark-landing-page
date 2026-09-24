interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/assets/logo.svg"
      alt="Bulwark"
      width={166}
      height={47}
      className={`bulwark-logo ${className}`.trim()}
      draggable={false}
    />
  );
}
