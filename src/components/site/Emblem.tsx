interface EmblemProps {
  className?: string;
  size?: number;
}

// Minimal interlaced rhombus emblem (inspired by classical maker's marks)
const Emblem = ({ className = "", size = 44 }: EmblemProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    aria-hidden="true"
  >
    <circle cx="32" cy="32" r="30" />
    <path d="M32 8 L56 32 L32 56 L8 32 Z" />
    <path d="M20 20 L44 44 M44 20 L20 44" />
    <circle cx="32" cy="32" r="6" />
  </svg>
);

export default Emblem;
