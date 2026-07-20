import Image from "next/image";
import Link from "next/link";

import { pcBuildGallery } from "../../../data/portfolio";

export default function BuildGalleryPage() {
  return (
    <main className="portfolio-background min-h-screen bg-background-deep text-main-text">
      <nav className="border-b border-panel-border bg-background-deep/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/#builds"
            className="text-sm font-semibold text-green-light transition hover:text-green-pale"
          >
            ← Return to PC builds
          </Link>
          <span className="text-sm text-dim-text">Harish Vijayakumar</span>
        </div>
      </nav>

      <header className="circuit-section border-b border-panel-border px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold tracking-[0.1em] text-amber">BUILD ARCHIVE</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Other builds and assembly work
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-text">
            A collection of compact layouts, cooling configurations, component
            installations, and systems I have helped assemble and/or troubleshoot.
          </p>
        </div>
      </header>

      <section className="bg-background px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {pcBuildGallery.map((image, index) => (
            <div
              key={image.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-panel-border bg-black/35 p-3"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition duration-500 group-hover:scale-[1.01]"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
