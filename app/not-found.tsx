import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container mx-auto px-4 md:px-16 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary-10 text-primary text-xs font-semibold tracking-wide mb-4">
          404 — Page not found
        </span>

        <h1 className="text-black text-lg md:text-3xl font-bold font-inter mb-4">
          Coming Soon
        </h1>

        <p className="text-sm md:text-base text-gray-dark font-normal max-w-2xl mx-auto mb-8">
          We&#39;re crafting this page to match the Wealthix experience. In the
          meantime, you can head back home or explore our services.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn" aria-label="Go to Home">
            Go Home
          </Link>
          <Link href="/services" className="btn" aria-label="Explore Services">
            Explore Services
          </Link>
        </div>
      </div>

      {/* Subtle decorative background */}
      <div className="relative">
        <div className="pointer-events-none absolute -z-10 inset-x-0 -top-24 flex justify-center">
          <div className="h-48 w-48 md:h-64 md:w-64 rounded-full bg-primary-10 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
