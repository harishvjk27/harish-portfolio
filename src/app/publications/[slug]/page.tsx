import Link from "next/link";
import { notFound } from "next/navigation";
import { publications } from "../../../data/portfolio";

type PublicationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return publications.map((publication) => ({
    slug: publication.slug,
  }));
}

export default async function PublicationPage({
  params,
}: PublicationPageProps) {
  const { slug } = await params;

  const publication = publications.find((item) => item.slug === slug);

  if (!publication) {
    notFound();
  }

  return (
    <main className="detail-page publication-page min-h-screen bg-background-deep text-main-text">
      <nav className="detail-nav border-b border-panel-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/#publications"
            className="font-[family-name:var(--font-ibm-plex-mono)] text-sm text-green-light transition hover:text-green-pale"
          >
            ← RETURN TO PUBLICATIONS
          </Link>

          <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-dim-text">
            PUBLICATION // {publication.number}
          </span>
        </div>
      </nav>

      <section className="detail-hero technical-grid border-b border-panel-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-green-dark bg-green-dark/30 px-3 py-1.5 font-[family-name:var(--font-ibm-plex-mono)] text-[10px] tracking-[0.1em] text-green-light">
              {publication.status}
            </span>

            <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.1em] text-amber">
              {publication.year}
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {publication.title}
          </h1>

          <p className="mt-6 font-[family-name:var(--font-ibm-plex-mono)] text-sm text-amber-light">
            {publication.venue}
          </p>
        </div>
      </section>

      <section className="detail-section bg-background px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.15em] text-amber">
              RESEARCH SUMMARY
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-text">
              {publication.description}
            </p>

          </div>

          <aside className="h-fit border border-panel-border bg-surface p-6">
            <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-amber">
              PUBLICATION RECORD
            </p>

            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="text-dim-text">Venue</dt>
                <dd className="mt-1">{publication.venue}</dd>
              </div>

              <div>
                <dt className="text-dim-text">Year</dt>
                <dd className="mt-1">{publication.year}</dd>
              </div>

              <div>
                <dt className="text-dim-text">Type</dt>
                <dd className="mt-1">{publication.type}</dd>
              </div>

              <div>
                <dt className="text-dim-text">Status</dt>
                <dd className="mt-1 text-green-light">
                  {publication.status}
                </dd>
              </div>
            </dl>

            {publication.href ? (
              <a
                href={publication.href}
                target="_blank"
                rel="noreferrer"
                className="mt-8 block border border-green px-5 py-3 text-center text-sm font-semibold text-green-light transition hover:bg-green-dark/30"
              >
                VIEW PUBLICATION
              </a>
            ) : (
              <p className="mt-8 border border-panel-border px-5 py-3 text-center font-[family-name:var(--font-ibm-plex-mono)] text-[10px] text-dim-text">
                PUBLIC LINK PENDING
              </p>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
