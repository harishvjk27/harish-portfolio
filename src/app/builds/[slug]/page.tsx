import Link from "next/link";
import { notFound } from "next/navigation";
import { pcBuilds } from "../../../data/portfolio";

type BuildPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return pcBuilds.map((build) => ({
    slug: build.slug,
  }));
}

export default async function BuildPage({
  params,
}: BuildPageProps) {
  const { slug } = await params;

  const build = pcBuilds.find((item) => item.slug === slug);

  if (!build) {
    notFound();
  }

  const specifications = [
    ["CPU", build.processor],
    ["GPU", build.graphics],
    ["MEMORY", build.memory],
    ["STORAGE", build.storage],
    ["MOTHERBOARD", build.motherboard],
  ];

  return (
    <main className="min-h-screen bg-background-deep text-main-text">
      <nav className="border-b border-panel-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/#builds"
            className="font-[family-name:var(--font-ibm-plex-mono)] text-sm text-green-light transition hover:text-green-pale"
          >
            ← RETURN TO PC BUILDS
          </Link>

          <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-dim-text">
            BUILD // {build.number}
          </span>
        </div>
      </nav>

      <section className="technical-grid border-b border-panel-border px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.15em] text-amber">
            PERSONAL HARDWARE
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {build.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-text">
            {build.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {build.tags.map((tag) => (
              <span
                key={tag}
                className="border border-panel-border bg-surface px-3 py-2 font-[family-name:var(--font-ibm-plex-mono)] text-[10px] text-green-pale"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.15em] text-amber">
              01 // SYSTEM SPECIFICATIONS
            </p>

            <div className="mt-8 border border-panel-border bg-surface">
              {specifications.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[130px_1fr] border-b border-panel-border px-5 py-5 last:border-b-0"
                >
                  <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-dim-text">
                    {label}
                  </span>

                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.15em] text-amber">
              02 // BUILD GOALS
            </p>

            <div className="mt-8 space-y-4">
              {build.goals.map((goal, index) => (
                <div
                  key={goal}
                  className="flex gap-5 border border-panel-border bg-surface p-5"
                >
                  <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-green-light">
                    0{index + 1}
                  </span>

                  <p className="leading-7 text-muted-text">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-panel-border bg-background-deep px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.15em] text-amber">
            IMAGES COMING NEXT
          </p>

          <p className="mt-4 max-w-2xl leading-7 text-muted-text">
            Finished-build photographs, internal component views, cable
            management, cooling configuration, and setup images will be added
            here.
          </p>
        </div>
      </section>
    </main>
  );
}