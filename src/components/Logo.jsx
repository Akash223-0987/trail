export function Logo({ className = "w-8 h-8", textClassName = "text-white" }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 35 L90 20 L90 40 L40 50 Z" fill="white" />
        <path d="M40 57 L75 50 L75 75 L40 82 Z" fill="white" />
        <path d="M75 50 L90 47 L90 72 L75 75 Z" fill="#FBBF24" />
      </svg>
      <span className={`font-bold text-xl tracking-widest uppercase ${textClassName}`}>
        TRAIL
      </span>
    </div>
  );
}
