// Read from public env (Next.js inlines NEXT_PUBLIC_* at build time)
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  // Ensure leading slash on provided path but avoid double slashes
  const cleaned = path.startsWith("/") ? path : `/${path}`;
  if (!BASE_PATH || BASE_PATH === "/") return cleaned;
  return `${BASE_PATH}${cleaned}`;
}
