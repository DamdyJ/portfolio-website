import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 lg:gap-12">
      <div className="text-center">
        <h2 className="text-step-5 font-semibold">Not Found</h2>
        <p>This page is missing or you assembled the link incorrectly.</p>
      </div>
      <Link
        href="/"
        className="px-space-s-m py-space-xs-s bg-pastel-red mb-space-m-l border-4 font-medium drop-shadow-[4px_4px_0px_rgba(51,47,46,1)] duration-100 ease-out hover:scale-[1.02] active:translate-y-1 active:scale-[0.98] active:drop-shadow-[0px_0px_0px_rgba(51,47,46,1)]"
      >
        Return to homepage
      </Link>
    </div>
  );
}
