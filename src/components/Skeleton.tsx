export default function Skeleton() {
  return (
    <div className="animate-pulse space-y-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-12 rounded-md bg-zinc-800"
        />
      ))}
    </div>
  );
}
