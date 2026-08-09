import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { journalPosts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "The Journal — plant care and design",
  description: "Practical plant care, considered design notes and stories from the Luna 3D-printing studio.",
};

export default function JournalPage() {
  return (
    <main className="journal-page">
      <header className="journal-hero"><div className="site-container"><span className="eyebrow">Notes on plants & making</span><h1>The Luna <em>journal.</em></h1><p>Useful ideas for greener rooms, better objects and living with both.</p></div></header>
      <section className="section journal-listing"><div className="site-container"><div className="journal-featured">
        <Link className={`journal-featured-art journal-${journalPosts[0].tone}`} href={`/journal/${journalPosts[0].slug}`}><span>FIELD NOTE / 001</span><span className="journal-plant" aria-hidden="true" /></Link>
        <div><span className="eyebrow">{journalPosts[0].category} · {journalPosts[0].readTime}</span><h2><Link href={`/journal/${journalPosts[0].slug}`}>{journalPosts[0].title}</Link></h2><p>{journalPosts[0].excerpt}</p><Link className="text-link" href={`/journal/${journalPosts[0].slug}`}>Read the note <ArrowRight size={15} /></Link></div>
      </div><div className="journal-grid journal-list-grid">{journalPosts.slice(1).map((post, index) => <article className="journal-card" key={post.slug}><Link className={`journal-art journal-${post.tone}`} href={`/journal/${post.slug}`}><span className="journal-number">0{index + 2}</span><span className="journal-plant" aria-hidden="true" /></Link><div className="journal-meta"><span>{post.category}</span><span>{post.date}</span></div><h3><Link href={`/journal/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link className="text-link" href={`/journal/${post.slug}`}>Read story <ArrowRight size={14} /></Link></article>)}</div></div></section>
    </main>
  );
}
