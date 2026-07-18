import Image from "next/image";
import Link from "next/link";

import {
  pcBuilds,
  projects,
  publications,
  skills,
} from "../data/portfolio";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background-deep text-main-text">
      <header className="border-b border-panel-border/70 bg-background-deep">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#top" className="text-sm font-semibold tracking-wide">
            Harish Vijayakumar
          </a>

          <div className="hidden items-center gap-7 text-sm text-muted-text md:flex">
            <a
              href="#projects"
              className="transition hover:text-green-light"
            >
              Projects
            </a>

            <a
              href="#publications"
              className="transition hover:text-green-light"
            >
              Publications
            </a>

            <a
              href="#builds"
              className="transition hover:text-green-light"
            >
              PC Builds
            </a>

            <a
              href="#contact"
              className="transition hover:text-green-light"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section
        id="top"
        className="mx-auto grid min-h-[680px] max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8"
      >
        <div>
          <p className="font-[family-name:var(--font-ibm-plex-mono)] text-sm text-amber">
            Computer Engineering at Georgia Tech
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-6xl">
            Hi, I&apos;m Harish.
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-9 text-muted-text">
            I&apos;m a computer engineering student interested in FPGA
            development, RTL design, computer architecture, and digital
            hardware.
          </p>

          <p className="mt-5 max-w-2xl leading-8 text-muted-text">
            I enjoy building systems from the module level upward, verifying
            their behavior through simulation, and testing them on physical
            hardware. Outside of engineering projects, I also build and
            troubleshoot custom PCs.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-green-light px-5 py-3 text-sm font-semibold text-background-deep transition hover:bg-green-pale"
            >
              View my work
              <ArrowIcon />
            </a>

            <a
              href="/Harish_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-panel-border px-5 py-3 text-sm font-semibold transition hover:border-green-light hover:text-green-light"
            >
              Resume
              <ArrowIcon />
            </a>

            <a
              href="https://github.com/harishvjk27"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-2 py-3 text-sm text-muted-text transition hover:text-green-light"
            >
              GitHub
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 translate-x-3 translate-y-3 border border-green-dark bg-green-dark/20" />

          <div className="relative aspect-[4/5] overflow-hidden border border-panel-border bg-surface">
            <Image
              src="/harish-profile.jpg"
              alt="Harish Vijayakumar"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-t border-panel-border bg-background px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected projects
            </h2>

            <p className="mt-4 leading-7 text-muted-text">
              FPGA, RTL, processor-design, and digital-hardware projects that
              I have designed, simulated, and tested.
            </p>
          </div>

          <div className="space-y-5">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="group grid gap-8 border-b border-panel-border py-9 first:border-t lg:grid-cols-[1fr_auto] lg:items-center"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-amber">
                      {project.category}
                    </p>

                    <span className="text-dim-text">·</span>

                    <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-green-light">
                      {project.status}
                    </p>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-3xl leading-7 text-muted-text">
                    {project.shortDescription}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                    {project.technologies.slice(0, 5).map((technology) => (
                      <span
                        key={technology}
                        className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-dim-text"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="flex items-center gap-2 text-sm font-semibold text-green-light transition group-hover:text-green-pale"
                >
                  View project
                  <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="publications"
        className="border-t border-panel-border bg-background-deep px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Publications
            </h2>

            <p className="mt-4 leading-7 text-muted-text">
              Engineering-education research focused on student experiences,
              mental health, and coping strategies.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {publications.map((publication) => (
              <article
                key={publication.slug}
                className="flex h-full flex-col border border-panel-border bg-surface p-7 transition hover:border-green"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-amber">
                    {publication.venue}
                  </p>

                  <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-green-light">
                    {publication.year}
                  </p>
                </div>

                <h3 className="mt-6 text-xl font-semibold leading-8">
                  {publication.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-muted-text">
                  {publication.description}
                </p>

                <div className="mt-7 flex items-center justify-between gap-4">
                  <span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-dim-text">
                    {publication.status}
                  </span>

                  <Link
                    href={`/publications/${publication.slug}`}
                    className="flex items-center gap-2 text-sm font-semibold text-green-light transition hover:text-green-pale"
                  >
                    View details
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="builds"
        className="border-t border-panel-border bg-background px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              PC builds
            </h2>

            <p className="mt-4 leading-7 text-muted-text">
              Personal systems I have assembled, configured, upgraded, and
              troubleshot.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {pcBuilds.map((build) => (
              <article
                key={build.slug}
                className="border border-panel-border bg-surface p-7 transition hover:border-green"
              >
                <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-amber">
                  CUSTOM DESKTOP
                </p>

                <h3 className="mt-5 text-2xl font-semibold">{build.title}</h3>

                <p className="mt-4 leading-7 text-muted-text">
                  {build.description}
                </p>

                <dl className="mt-7 grid gap-4 border-t border-panel-border pt-6 sm:grid-cols-2">
                  <div>
                    <dt className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-dim-text">
                      CPU
                    </dt>
                    <dd className="mt-2 text-sm">{build.processor}</dd>
                  </div>

                  <div>
                    <dt className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-dim-text">
                      GPU
                    </dt>
                    <dd className="mt-2 text-sm">{build.graphics}</dd>
                  </div>
                </dl>

                <Link
                  href={`/builds/${build.slug}`}
                  className="mt-8 flex items-center gap-2 text-sm font-semibold text-green-light transition hover:text-green-pale"
                >
                  View build
                  <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-panel-border bg-background-deep px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[300px_1fr]">
          <div>
            <h2 className="text-3xl font-semibold">Technical focus</h2>

            <p className="mt-4 leading-7 text-muted-text">
              Tools and subjects I have worked with through coursework,
              research, and personal projects.
            </p>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-panel-border bg-surface px-4 py-2 text-sm text-muted-text"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-panel-border bg-background px-6 py-16 lg:px-8"
      >
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold">Get in touch</h2>

            <p className="mt-3 max-w-xl leading-7 text-muted-text">
              I&apos;m interested in FPGA, RTL, digital-design, and hardware
              engineering opportunities.
            </p>

            <a
              href="mailto:hvijayakumar32@gatech.edu"
              className="mt-4 inline-block text-green-light transition hover:text-green-pale"
            >
              hvijayakumar32@gatech.edu
            </a>
          </div>

          <div className="flex gap-6 text-sm text-muted-text">
            <a
              href="https://github.com/harishvjk27"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-green-light"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/harishvjk/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-green-light"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}