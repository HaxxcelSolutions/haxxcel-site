export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="flex flex-col items-center gap-4" role="status" aria-live="polite">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-blue-400" />
        <p className="text-sm text-slate-400">Loading…</p>
        <span className="sr-only">Loading content</span>
      </div>
    </div>
  );
}
