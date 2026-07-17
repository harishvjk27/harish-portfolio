import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/portfolio";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background-deep text-main-text">
      <nav className="border-b border-panel-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/"
            className="font-[family-name:var(--font-ibm-plex-mono)] text-sm text-green-light transition hover:text-green-pale"
          >
            ← RETURN HOME
          </Link>

          <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-dim-text">
            PROJECT // {project.number}
          </span>
        </div>
      </nav>

      <section className="technical-grid border-b border-panel-border px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-green-dark bg-green-dark/30 px-3 py-1.5 font-[family-name:var(--font-ibm-plex-mono)] text-[10px] tracking-[0.12em] text-green-light">
              {project.status}
            </span>

            <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.12em] text-amber">
              {project.category}
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-text">
            {project.shortDescription}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="border border-panel-border bg-surface px-3 py-2 font-[family-name:var(--font-ibm-plex-mono)] text-[10px] tracking-[0.08em] text-green-pale"
              >
                {technology.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.15em] text-amber">
              01 // PROJECT OVERVIEW
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              System design and implementation
            </h2>

            <p className="mt-6 leading-8 text-muted-text">
              {project.overview}
            </p>
          </div>

          <div className="border border-panel-border bg-surface p-6">
            <p className="border-b border-panel-border pb-4 font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.12em] text-amber">
              {project.visualTitle}
            </p>

            <div className="mt-6 space-y-3">
              {project.visualLines.map((line, index) => (
                <div
                  key={line}
                  className="flex items-center gap-4 border border-panel-border bg-background-deep px-4 py-4"
                >
                  <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-green-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs">
                    {line}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-panel-border bg-background-deep px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.15em] text-amber">
            02 // TECHNICAL HIGHLIGHTS
          </p>

          <div className="mt-10 grid gap-px overflow-hidden border border-panel-border bg-panel-border md:grid-cols-2">
            {project.highlights.map((highlight, index) => (
              <div key={highlight} className="bg-surface p-7">
                <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-green-light">
                  0{index + 1}
                </p>

                <p className="mt-4 leading-7 text-muted-text">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-20 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-amber">
              SOURCE CODE
            </p>

            <p className="mt-2 text-muted-text">
              Review the RTL implementation and supporting files.
            </p>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="border border-green px-6 py-3 text-sm font-semibold text-green-light transition hover:bg-green-dark/30"
          >
            OPEN GITHUB →
          </a>
        </div>
      </section>
    </main>
  );
}