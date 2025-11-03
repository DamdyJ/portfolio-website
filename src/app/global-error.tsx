"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error.message);
  return (
    <html>
      <body className="flex min-h-svh flex-col items-center justify-center gap-6 lg:gap-12">
        <h2 className="text-step-5 font-semibold">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-space-s-m py-space-xs-s bg-pastel-red mb-space-m-l border-4 font-medium drop-shadow-[4px_4px_0px_rgba(51,47,46,1)] duration-100 ease-out hover:scale-[1.02] active:translate-y-1 active:scale-[0.98] active:drop-shadow-[0px_0px_0px_rgba(51,47,46,1)]"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
