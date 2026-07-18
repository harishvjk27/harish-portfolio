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

      <section id="projects" className="border-t border-panel-border bg-background px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-[240px_1fr] md:items-end">
            <h2 className="text-3xl font-semibold tracking-tight">Selected projects</h2>
            <p className="max-w-2xl leading-7 text-muted-text">
              A closer look at the RTL systems I have taken from architecture and simulation through FPGA implementation and physical testing.
            </p>
          </div>

          <article className="mt-12 grid overflow-hidden rounded-2xl border border-green/40 bg-[linear-gradient(135deg,rgba(47,125,74,0.18),rgba(13,24,18,0.92)_55%)] lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex min-h-64 flex-col justify-between border-b border-panel-border p-8 lg:border-r lg:border-b-0">
              <p className="text-sm text-amber">Featured work</p>
              <p className="mt-16 font-[family-name:var(--font-ibm-plex-mono)] text-sm leading-7 text-green-pale">
                {projects[0].technologies.slice(0, 6).join(" · ")}
              </p>
            </div>
            <div className="p-8 sm:p-10">
              <p className="text-sm text-amber">{projects[0].category}</p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{projects[0].title}</h3>
              <p className="mt-5 max-w-2xl leading-8 text-muted-text">{projects[0].shortDescription}</p>
              <div className="mt-8">
                <TextLink href={`/projects/${projects[0].slug}`}>Explore the full project</TextLink>
              </div>
            </div>
          </article>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {projects.slice(1).map((project, index) => (
              <article
                key={project.slug}
                className={`rounded-xl border border-panel-border bg-surface/60 p-7 ${index === 1 ? "lg:translate-y-8" : ""}`}
              >
                <p className="text-sm text-amber">{project.category}</p>
                <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 leading-7 text-muted-text">{project.shortDescription}</p>
                <p className="mt-5 text-sm leading-6 text-dim-text">{project.technologies.slice(0, 5).join(" · ")}</p>
                <div className="mt-6">
                  <TextLink href={`/projects/${project.slug}`}>View project</TextLink>
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

      <section id="builds" className="border-t border-panel-border bg-background px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-[240px_1fr] md:items-end">
            <h2 className="text-3xl font-semibold tracking-tight">PC builds</h2>
            <p className="max-w-2xl leading-7 text-muted-text">
              Systems I have assembled for myself and friends, with attention to compatibility, thermals, cable routing, and dependable daily use.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-start">
            {pcBuilds.map((build, index) => (
              <article
                key={build.slug}
                className={`overflow-hidden rounded-xl border border-panel-border bg-surface/70 ${index === 1 ? "lg:mt-10" : ""}`}
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
                <div className="p-6">
                  <p className="text-sm text-amber">{build.ownership}</p>
                  <h3 className="mt-2 text-xl font-semibold">{build.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-text">
                    {build.processor} · {build.graphics} · {build.memory}
                  </p>
                  <div className="mt-5">
                    <TextLink href={`/builds/${build.slug}`}>View build</TextLink>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 border-t border-panel-border pt-12 lg:mt-24">
            <div className="grid gap-6 md:grid-cols-[240px_1fr]">
              <div>
                <p className="text-sm text-amber">Build gallery</p>
                <h3 className="mt-2 text-2xl font-semibold">More systems and assembly work</h3>
              </div>
              <p className="max-w-2xl leading-7 text-muted-text">
                A visual archive of compact layouts, cooling configurations, component installation, and work-in-progress systems.
              </p>
            </div>
            <div className="mt-10 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[190px] md:grid-cols-4">
              {pcBuildGallery.map((image, index) => (
                <figure
                  key={image.src}
                  className={`group relative overflow-hidden rounded-xl border border-panel-border bg-surface ${index === 0 ? "col-span-2 row-span-2" : ""} ${index === 4 ? "col-span-2" : ""}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={index === 0 || index === 4 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </figure>
              ))}
            </div>
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
