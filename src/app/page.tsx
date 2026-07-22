import Image from "next/image";
import Link from "next/link";

import {
  experiences,
  pcBuildGallery,
  pcBuilds,
  projects,
  publications,
  skills,
} from "../data/portfolio";

const navItems = [
  { label: "Experience", href: "#experience", tone: "green" },
  { label: "Projects", href: "#projects", tone: "purple" },
  { label: "Research", href: "#publications", tone: "blue" },
  { label: "Builds", href: "#builds", tone: "yellow" },
  { label: "Technical focus", href: "#technical-focus", tone: "green" },
  { label: "Contact", href: "#contact", tone: "green" },
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
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
        <nav
          aria-label="Primary navigation"
          className="nav-shell mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-panel-border/80 px-3 py-3 shadow-2xl shadow-black/25 backdrop-blur-xl sm:px-4"
        >
          <a
            href="#top"
            aria-label="Harish Vijayakumar — back to top"
            className="group flex items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-light"
          >
            <span className="brand-chip grid h-11 w-11 place-items-center rounded-xl font-[family-name:var(--font-ibm-plex-mono)] text-sm font-semibold text-background-deep transition group-hover:rotate-[-3deg]">
              HV
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-semibold tracking-tight">Harish Vijayakumar</span>
              <span className="mt-0.5 block font-[family-name:var(--font-ibm-plex-mono)] text-[10px] tracking-[0.14em] text-green-light">
                RTL · ARCHITECTURE · HARDWARE
              </span>
            </span>
          </a>

          <div className="hidden items-center rounded-xl border border-panel-border/70 bg-background-deep/45 p-1 text-sm text-muted-text lg:flex">
            {navItems.map(({ label, href, tone }) => (
              <a
                key={href}
                href={href}
                className={`section-nav-link section-nav-link--${tone} rounded-lg px-3 py-2 transition`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1 text-sm lg:hidden">
            <a href="#projects" className="rounded-lg px-3 py-2 text-green-pale hover:bg-green-dark/60">
              Work
            </a>
            <a href="#contact" className="rounded-lg px-3 py-2 text-green-pale hover:bg-green-dark/60">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div>
           
            <h1 className="hero-name mt-5 text-5xl font-semibold leading-[1.08] sm:text-7xl">
              Harish Vijayakumar
            </h1>
          </div>
          <div className="mt-7">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="rounded-md bg-green-light px-5 py-3 text-sm font-semibold text-background-deep shadow-[0_12px_34px_rgba(47,125,74,0.24)] transition hover:-translate-y-0.5 hover:bg-green-pale focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-light"
              >
                Projects
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
                className="rounded-md border border-amber/35 bg-amber/10 px-5 py-3 text-sm font-semibold text-amber-light transition hover:-translate-y-0.5 hover:bg-amber/20"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          <article className="bio-card overflow-hidden rounded-2xl border border-panel-border bg-surface/90 lg:col-span-5">
            <div className="grid min-h-[370px] place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_30%,rgba(146,230,170,0.16),transparent_58%)] px-6 py-5">
              <div className="relative h-[340px] w-[191px] overflow-hidden rounded-xl border border-green-light/20 shadow-2xl shadow-black/30 sm:h-[350px] sm:w-[197px]">
                <Image
                  src="/harish-profile.jpg"
                  alt="Portrait of Harish Vijayakumar"
                  fill
                  priority
                  sizes="197px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-7 sm:p-8">
              <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.12em] text-amber">MY BACKGROUND</p>
              <p className="mt-4 leading-8 text-muted-text">
                I&apos;m a computer engineering student at Georgia Tech focused on RTL design,
                FPGA development, and computer architecture. I&apos;m working
                toward becoming a highly skilled chip-design engineer with a
                strong understanding of the complete tape-out process—from RTL
                and verification through physical implementation.
              </p>
            </div>
          </article>

          <article className="bio-card overflow-hidden rounded-2xl border border-panel-border bg-surface/90 lg:col-span-7">
            <div className="gallery-frame grid grid-cols-2 gap-1 overflow-hidden rounded-t-2xl bg-background-deep p-1 md:grid-cols-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-tl-[13px] md:col-span-3">
                <Image
                  src="/toronto-trip.webp"
                  alt="Harish visiting Toronto"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="toronto-photo object-cover object-[45%_65%] transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-tr-[13px] md:col-span-3">
                <Image
                  src="/harish-and-girlfriend.webp"
                  alt="Harish with his girlfriend"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover object-[center_62%]"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden md:col-span-2">
                <Image
                  src="/basketball-color.webp"
                  alt="A basketball game at State Farm Arena"
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden md:col-span-2">
                <Image
                  src="/outside-engineering-autumn.webp"
                  alt="An autumn display with plants, pumpkins, and natural textures"
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative col-span-2 aspect-[4/3] overflow-hidden md:col-span-2">
                <Image
                  src="/esp32-project.webp"
                  alt="ESP32 prototype assembled on breadboards with buttons, a joystick, and a display"
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover object-[center_58%]"
                />
              </div>
            </div>
            <div className="p-7 sm:p-8">
              <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.12em] text-amber">BEYOND ENGINEERING</p>
              <p className="mt-4 leading-8 text-muted-text">
                Outside engineering, I love playing sports, traveling, and
                discovering new experiences. I like changes in my environment, and I value meeting new people/learning from different
                perspectives.
              </p>
            </div>
          </article>

          <article className="bio-card grid overflow-hidden rounded-2xl border border-panel-border bg-surface/90 lg:col-span-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-72 overflow-hidden lg:min-h-[360px]">
              <Image
                src="/pc-build.webp"
                alt="A custom desktop PC during assembly"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[center_68%]"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs tracking-[0.12em] text-amber">WHERE IT STARTED</p>
              
              <p className="mt-5 max-w-2xl leading-8 text-muted-text">
                I built my first desktop with my father when I was around eight
                years old - an Intel Core i5-4670K system with an NVIDIA GeForce
                GTX 750 Ti. I started because I wanted better frame rates in
                video games, but I quickly became more interested in how the
                computer worked. Since then, I&apos;ve helped friends and family
                assemble, upgrade, and repair desktops, handheld devices, and
                other hardware.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" className="experience-section border-t border-panel-border px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-[240px_1fr] md:items-end">
            <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
            <p className="max-w-2xl leading-7 text-muted-text">
            </p>
          </div>

          <div className="mt-12 space-y-5">
            {experiences.map((experience) => (
              <article key={experience.organization} className="experience-card rounded-2xl border bg-surface/80 p-7 sm:p-9">
                <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-green-light">
                      {experience.context}
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold">{experience.organization}</h3>
                    <p className="mt-2 text-amber-light">{experience.role}</p>
                    <a
                      href={experience.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex items-center gap-2 font-semibold text-green-light transition hover:text-green-pale"
                    >
                      Visit RevSync <span aria-hidden="true">→</span>
                    </a>
                  </div>
                  <div className="space-y-5 leading-8 text-muted-text">
                    <p>{experience.description}</p>
                    <p>{experience.contribution}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="project-section circuit-section border-t border-panel-border bg-background px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-[240px_1fr] md:items-end">
            <h2 className="text-3xl font-semibold tracking-tight">Selected projects</h2>
            <p className="max-w-2xl leading-7 text-muted-text">
             
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="project-card hardware-card flex h-full flex-col overflow-hidden rounded-xl border bg-surface/85"
              >
                <div className="border-b border-panel-border bg-background-deep/45 px-6 py-4">
                  <p className="text-xs font-semibold tracking-[0.08em] text-amber">{project.category}</p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-semibold leading-tight">{project.title}</h3>
                  <p className="mt-4 leading-7 text-muted-text">{project.shortDescription}</p>
                  <div className="mt-6 border-l-2 border-green-dark pl-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-dim-text">Technical focus</p>
                    <p className="mt-2 text-sm leading-6 text-green-pale">{project.technologies.slice(0, 5).join(" · ")}</p>
                  </div>
                  <div className="mt-auto pt-7">
                    <TextLink href={`/projects/${project.slug}`}>View project</TextLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="publication-section accent-section border-t border-panel-border px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">Published Research</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {publications.map((publication) => (
              <article key={publication.slug} className="publication-card content-card rounded-xl border bg-surface/65 p-7">
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

      <section id="builds" className="build-section circuit-section border-t border-panel-border bg-background px-6 py-20 sm:py-24 lg:px-8">
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
                className="build-card hardware-card flex h-full flex-col overflow-hidden rounded-xl border bg-surface/85"
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
              className="build-card hardware-card group flex h-full flex-col overflow-hidden rounded-xl border bg-surface/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-light"
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

      <section id="technical-focus" className="accent-section border-t border-panel-border px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[260px_1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Technical focus</h2>
            <p className="mt-3 leading-7 text-muted-text">
              Tools and subjects I use across coursework, research, and personal projects.
            </p>
          </div>
          <ul className="flex flex-wrap content-start gap-x-6 gap-y-3 text-muted-text">
            {skills.map((skill) => (
              <li key={skill} className="skill-chip rounded-full border border-panel-border bg-surface/75 px-4 py-2">{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer id="contact" className="border-t border-panel-border bg-background px-6 py-16 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Get in touch</h2>
            <p className="mt-3 max-w-xl leading-7 text-muted-text">
              I&apos;m interested in chip design, hardware engineering, mental health research, and just about anything else!
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
