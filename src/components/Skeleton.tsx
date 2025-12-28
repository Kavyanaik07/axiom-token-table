"use client";

export default function Skeleton() {
  return (
    <div className="animate-pulse space-y-2">
      {[1, 2, 3, 4].map(i => (
        <div
          key={i}
          className="h-12 rounded bg-zinc-800"
        />
      ))}
    </div>
  );
}
