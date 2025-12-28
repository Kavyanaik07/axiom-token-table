import { Token } from "../types";
import clsx from "clsx";

export default function TokenRow({ token }: { token: Token }) {
  return (
    <div className="flex items-center justify-between px-3 py-2 hover:bg-zinc-900 transition">
      <div>
        <div className="font-medium">{token.name}</div>
        <div className="text-xs text-zinc-400">{token.symbol}</div>
      </div>

      <div className="text-right">
        <div>${token.price.toLocaleString()}</div>
        <div
          className={clsx(
            "text-xs",
            token.change >= 0 ? "text-green-400" : "text-red-400"
          )}
        >
          {token.change}%
        </div>
      </div>
    </div>
  );
}
