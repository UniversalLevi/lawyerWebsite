type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX = 5;

export function rateLimit(key: string): {
  ok: boolean;
  remaining: number;
  retryAfter: number;
} {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, remaining: MAX - 1, retryAfter: 0 };
  }

  if (existing.count >= MAX) {
    return {
      ok: false,
      remaining: 0,
      retryAfter: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  return {
    ok: true,
    remaining: MAX - existing.count,
    retryAfter: 0,
  };
}
