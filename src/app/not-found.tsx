import Link from "next/link";

export default function NotFound() {
  return (
    <main className="technical-grid flex min-h-screen items-center justify-center bg-background-deep px-6 text-main-text">
      <div className="w-full max-w-xl border border-panel-border bg-surface p-10 text-center">
        <p className="font-[family-name:var(--font-ibm-plex-mono)] text-sm tracking-[0.15em] text-status-red">
          ERROR // 404
        </p>

        <h1 className="mt-5 text-4xl font-semibold">
          Page not found.
        </h1>

        <p className="mt-5 leading-7 text-muted-text">
          The requested project, publication, or build does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block border border-green px-6 py-3 text-sm font-semibold text-green-light transition hover:bg-green-dark/30"
        >
          RETURN HOME
        </Link>
      </div>
    </main>
  );
}