import Link from "next/link";

export default function NotFound() {
  return <main className="simple-empty-page"><span className="eyebrow">404 / Out of soil</span><h1>Nothing is growing here.</h1><p>The page may have moved, but the collection is right where you left it.</p><Link className="button button-primary" href="/shop">Return to the shop</Link></main>;
}
