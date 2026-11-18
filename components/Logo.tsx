export default function Logo() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
      <circle cx="24" cy="24" r="21" fill="#FFD84D" style={{ stroke: "var(--line)" }} strokeWidth="3" />
      <path d="M7 12c9 6 9 18 0 24M41 12c-9 6-9 18 0 24" fill="none" stroke="#14163B" strokeWidth="2.5" strokeLinecap="round" />
      <text x="24" y="31" textAnchor="middle" fontFamily="var(--font-head)" fontWeight="800" fontSize="22" fill="#14163B">K</text>
    </svg>
  );
}