import Link from "next/link";

export default async function NavBanner() {
  return (
    <div className="bg-primary w-full">
      <div className="container mx-auto py-1 px-16 flex justify-end items-center gap-4">
        <Link
          href={"#"}
          className="text-white text-base font-clash hover:underline"
        >
          Dubai, UAE
        </Link>
        <Link
          href={"#"}
          className="text-white text-base font-clash hover:underline"
        >
          +971527941604
        </Link>
        <Link
          href={"#"}
          className="text-white text-base font-clash hover:underline"
        >
          info@wealthixadvisors.com
        </Link>
      </div>
    </div>
  );
}
