import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand-mark ${inverse ? "brand-mark-inverse" : ""}`} href="/" aria-label="Terra home">
      <span className="brand-symbol" aria-hidden="true">T</span>
      <span className="brand-word">TERRA</span>
    </Link>
  );
}
