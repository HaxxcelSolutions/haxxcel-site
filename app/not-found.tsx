import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold tracking-[0.25em] text-blue-600 uppercase">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">
          The page you were looking for does not exist.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
          It may have moved or been removed. Return home and explore our current services.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
