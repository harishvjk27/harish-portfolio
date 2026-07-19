import Image from "next/image";
import Link from "next/link";

import {
  pcBuildGallery,
  pcBuilds,
  projects,
  publications,
  skills,
} from "../data/portfolio";

const navItems = [
  ["Projects", "#projects"],
  ["Publications", "#publications"],
  ["PC builds", "#builds"],
  ["Contact", "#contact"],
];

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 font-semibold text-green-light transition-colors hover:text-green-pale focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-light"
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export default function Home() {
  return (
    <main id="top" className="portfolio-background min-h-screen bg-background-deep text-main-text">
      <header className="border-b border-panel-border/70 bg-background-deep/75 backdrop-blur-md">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8"
        >
          <a
            href="#top"
            className="font-semibold tracking-tight transition-colors hover:text-green-light"
          >
            Harish Vijayakumar
          </a>

          <div className="hidden items-center gap-6 text-sm text-muted-text sm:flex">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="transition-colors hover:text-green-light"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-14 overflow-hidden px-6 py-20 sm:py-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(480px,1.1fr)] lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-amber/25 bg-amber/10 px-4 py-2 text-sm font-medium text-amber-light">
            Computer engineering student at Georgia Tech
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-6xl">
            Hi, I&apos;m Harish.
          </h1>
          <p className="mt-7 text-xl leading-9 text-muted-text">
            I&apos;m a computer engineering student interested in FPGA
            development, RTL design, computer architecture, and digital
            hardware.
          </p>
          <p className="mt-5 max-w-2xl leading-8 text-muted-text">
            Right now, I&apos;m focused on writing and verifying RTL, exploring
            processor design, and turning simulated systems into working FPGA
            hardware. Outside that work, I enjoy building and troubleshooting
            custom PCs and studying mental health in engineering education.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#projects"
              className="rounded-md bg-green-light px-5 py-3 text-sm font-semibold text-background-deep shadow-[0_12px_34px_rgba(47,125,74,0.24)] transition hover:-translate-y-0.5 hover:bg-green-pale focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-light"
            >
              View my work
            </a>
            <a
              href="/Harish_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-panel-border bg-surface/70 px-5 py-3 text-sm font-semibold text-main-text transition hover:-translate-y-0.5 hover:border-green-light/60 hover:text-green-light"
            >
              Resume
            </a>
            <a
              href="https://github.com/harishvjk27"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-muted-text transition-colors hover:text-green-light"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="photo-collage mx-auto grid w-full max-w-lg grid-cols-[0.78fr_1.22fr] grid-rows-[170px_150px] gap-3 sm:grid-rows-[190px_170px] lg:mx-0">
          <div className="relative row-span-2 overflow-hidden rounded-xl border border-green-light/20 bg-surface shadow-2xl shadow-black/30 sm:row-span-2">
            <Image
              src="/harish-profile.jpg"
              alt="Portrait of Harish Vijayakumar"
              fill
              priority
              sizes="(max-width: 640px) 38vw, (max-width: 1024px) 200px, 190px"
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-xl border border-green-light/20 bg-surface shadow-xl shadow-black/25">
            <Image
              src="/toronto-trip.webp"
              alt="Harish visiting Toronto"
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 300px, 240px"
              className="object-cover object-[55%_70%] transition duration-500 hover:scale-[1.03]"
            />
          </div>
          <div className="relative overflow-hidden rounded-xl border border-green-light/20 bg-surface shadow-xl shadow-black/25">
            <Image
              src="/pc-build.webp"
              alt="A custom PC build in progress"
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 300px, 240px"
              className="object-cover object-[55%_68%] transition duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>

      <section id="projects" className="circuit-section border-t border-panel-border bg-background px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-[240px_1fr] md:items-end">
            <h2 className="text-3xl font-semibold tracking-tight">Selected projects</h2>
            <p className="max-w-2xl leading-7 text-muted-text">
              A closer look at the RTL systems I have taken from architecture and simulation through FPGA implementation and physical testing.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="hardware-card flex h-full flex-col overflow-hidden rounded-xl border border-panel-border bg-surface/85"
              >
                <div className="flex items-center justify-between gap-4 border-b border-panel-border bg-background-deep/45 px-6 py-4">
                  <p className="text-xs font-semibold tracking-[0.08em] text-amber">{project.category}</p>
                  <p className="text-xs text-green-light">{project.status}</p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-semibold leading-tight">{project.title}</h3>
                  <p className="mt-4 leading-7 text-muted-text">{project.shortDescription}</p>
                  <div className="mt-6 border-l-2 border-green-dark pl-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-dim-text">Technical focus</p>
                    <p className="mt-2 text-sm leading-6 text-green-pale">{project.technologies.slice(0, 5).join(" · ")}</p>
                  </div>
                  <p className="mt-6 text-sm leading-6 text-muted-text">{project.highlights[0]}</p>
                  <div className="mt-auto pt-7">
                    <TextLink href={`/projects/${project.slug}`}>View project</TextLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="border-t border-panel-border px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">Publications</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {publications.map((publication) => (
              <article key={publication.slug}>
                <p className="text-sm text-amber">
                  {publication.venue} · {publication.year}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-8">{publication.title}</h3>
                <p className="mt-3 leading-7 text-muted-text">{publication.description}</p>
                <div className="mt-5">
                  <TextLink href={`/publications/${publication.slug}`}>View publication</TextLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="builds" className="circuit-section border-t border-panel-border bg-background px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-[240px_1fr] md:items-end">
            <h2 className="text-3xl font-semibold tracking-tight">PC builds</h2>
            <p className="max-w-2xl leading-7 text-muted-text">
              Systems I have assembled for myself and friends, with attention to compatibility, thermals, cable routing, and dependable daily use.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {pcBuilds.map((build) => (
              <article
                key={build.slug}
                className="hardware-card flex h-full flex-col overflow-hidden rounded-xl border border-panel-border bg-surface/85"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={build.images[0].src}
                    alt={build.images[0].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{build.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-text">
                    {build.processor} · {build.graphics} · {build.memory}
                  </p>
                  <div className="mt-auto pt-6">
                    <TextLink href={`/builds/${build.slug}`}>View build</TextLink>
                  </div>
                </div>
              </article>
            ))}
            <Link
              href="/builds/gallery"
              className="hardware-card group flex h-full flex-col overflow-hidden rounded-xl border border-amber/35 bg-surface/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-light"
            >
              <div className="grid aspect-[4/3] grid-cols-2 grid-rows-2 gap-1 overflow-hidden bg-background-deep p-1">
                {pcBuildGallery.slice(0, 4).map((image, index) => (
                  <div key={image.src} className={`relative overflow-hidden ${index === 0 ? "row-span-2" : ""}`}>
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 50vw, 15vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">Other builds and assembly work</h3>
                <p className="mt-3 text-sm leading-6 text-muted-text">
                  Browse compact systems, cooling layouts, component installations, and works in progress.
                </p>
                <span className="mt-auto pt-6 font-semibold text-green-light transition group-hover:text-green-pale">
                  Open gallery →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-panel-border px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[260px_1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Technical focus</h2>
            <p className="mt-3 leading-7 text-muted-text">
              Tools and subjects I use across coursework, research, and personal projects.
            </p>
          </div>
          <ul className="flex flex-wrap content-start gap-x-6 gap-y-3 text-muted-text">
            {skills.map((skill) => (
              <li key={skill} className="border-b border-green-dark pb-1">{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer id="contact" className="border-t border-panel-border bg-background px-6 py-16 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Get in touch</h2>
            <p className="mt-3 max-w-xl leading-7 text-muted-text">
              I&apos;m interested in FPGA, RTL, digital design, and hardware engineering opportunities.
            </p>
            <a
              href="mailto:hvijayakumar32@gatech.edu"
              className="mt-4 inline-block text-green-light transition-colors hover:text-green-pale"
            >
              hvijayakumar32@gatech.edu
            </a>
          </div>
          <div className="flex gap-6 text-sm text-muted-text">
            <a href="https://github.com/harishvjk27" target="_blank" rel="noreferrer" className="hover:text-green-light">GitHub</a>
            <a href="https://www.linkedin.com/in/harishvjk/" target="_blank" rel="noreferrer" className="hover:text-green-light">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
