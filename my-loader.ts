// Custom loader for next/image to work under GitHub Pages basePath
// It prefixes relative src paths with NEXT_PUBLIC_BASE_PATH.

type LoaderParams = {
  src: string;
  width: number;
  quality?: number;
};

export default function myLoader({ src }: LoaderParams): string {
  // Leave absolute URLs and data URIs untouched
  if (/^(https?:)?\/\//i.test(src) || src.startsWith("data:")) {
    return src;
  }
  const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const cleaned = src.startsWith("/") ? src : `/${src}`;
  return `${bp}${cleaned}`;
}
