import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand-mark ${inverse ? "brand-mark-inverse" : ""}`} href="/" aria-label="Luna home">
      <span className="brand-symbol" aria-hidden="true">L</span>
      <span className="brand-word">LUNA</span>
    </Link>
  );
}
