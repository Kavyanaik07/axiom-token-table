import { Token } from "../types";
import TokenRow from "./TokenRow";

interface Props {
  title: string;
  tokens: Token[];
}

export default function TokenColumn({ title, tokens }: Props) {
  return (
    <div className="flex-1 border border-zinc-800 rounded-lg overflow-hidden">
      <div className="bg-zinc-900 px-3 py-2 text-sm font-semibold">
        {title}
      </div>

      <div className="divide-y divide-zinc-800">
        {tokens.map(token => (
          <TokenRow key={token.id} token={token} />
        ))}
      </div>
    </div>
  );
}
