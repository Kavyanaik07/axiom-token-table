import TokenTable from "@/src/features/tokens/components/TokenTable";
import TokenSearch from "@/src/features/tokens/components/TokenSearch";

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <h1 className="mb-4 text-xl font-semibold">Token Discovery</h1>

      <TokenSearch />
      <TokenTable />
    </main>
  );
}
