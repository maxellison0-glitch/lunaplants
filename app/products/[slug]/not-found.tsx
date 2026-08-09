import Link from "next/link";

export default function ProductNotFound() {
  return <main className="simple-empty-page"><span className="eyebrow">404 / Uprooted</span><h1>That plant has moved on.</h1><p>Try the full collection—there’s something green waiting there.</p><Link className="button button-primary" href="/shop">Browse all pairings</Link></main>;
}
