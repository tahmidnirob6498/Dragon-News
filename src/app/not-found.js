import Link from "next/link";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <section className="relative w-full max-w-xl text-center">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200">
          <span className="h-2 w-2 rounded-full bg-cyan-300" />
          Lost in the newsroom
        </p>

        <div className="relative mx-auto mb-3 w-fit">
          <span className="select-none text-[clamp(8rem,28vw,16rem)] font-black leading-none tracking-tighter text-white/[0.06]">
            404
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-6xl font-black tracking-tight sm:text-7xl">
            404
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          This story went off the record.
        </h1>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-300">
          The page may have moved, the link may be outdated, or this story was
          never published. Let’s get you back to the latest headlines.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-lg bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Back to homepage
          </Link>

          <Link
            href="/search"
            className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Search stories
          </Link>
        </div>

        <p className="mt-10 text-xs uppercase tracking-[0.2em] text-slate-500">
          Dragon News · Independent journalism
        </p>
      </section>
    </main>
  );
}
export default NotFound;