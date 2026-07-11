export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(' ');
}

export function formatDate(iso?: string) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export function safeJsonParse<T = unknown>(value: string, fallback: T | null = null): T | null {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}
