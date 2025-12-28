"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-6">
      <h2 className="text-red-500 text-lg">Something went wrong</h2>
      <button
        onClick={reset}
        className="mt-4 rounded bg-black px-4 py-2 text-white"
      >
        Retry
      </button>
    </div>
  );
}
