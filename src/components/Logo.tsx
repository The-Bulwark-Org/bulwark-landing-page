interface LogoProps {
  className?: string;
  src?: string;
}

export function Logo({ className = '', src = '/assets/logo.svg' }: LogoProps) {
  return (
    <img
      src={src}
      alt="Bulwark"
      width={166}
      height={47}
      className={`bulwark-logo ${className}`.trim()}
      draggable={false}
    />
  );
}
