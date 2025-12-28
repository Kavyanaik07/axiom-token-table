"use client";

import { Token } from "../types";
import { memo, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as Popover from "@radix-ui/react-popover";

function TokenRow({ token }: { token: Token }) {
  const prevPrice = useRef(token.price);
  const [flash, setFlash] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    if (token.price > prevPrice.current) setFlash("up");
    else if (token.price < prevPrice.current) setFlash("down");

    prevPrice.current = token.price;
    const t = setTimeout(() => setFlash(null), 400);
    return () => clearTimeout(t);
  }, [token.price]);

  return (
    <Popover.Root>
      <Tooltip.Provider delayDuration={200}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Popover.Trigger asChild>
              <div
                className={clsx(
                  "flex cursor-pointer items-center justify-between px-3 py-2 transition-colors",
                  flash === "up" && "bg-green-500/10",
                  flash === "down" && "bg-red-500/10",
                  "hover:bg-zinc-900"
                )}
              >
                <div>
                  <div className="font-medium">{token.name}</div>
                  <div className="text-xs text-zinc-400">{token.symbol}</div>
                </div>

                <div className="text-right">
                  <div
                    className={clsx(
                      flash === "up" && "text-green-400",
                      flash === "down" && "text-red-400"
                    )}
                  >
                    ${token.price.toLocaleString()}
                  </div>
                  <div
                    className={clsx(
                      "text-xs",
                      token.change >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    )}
                  >
                    {token.change.toFixed(2)}%
                  </div>
                </div>
              </div>
            </Popover.Trigger>
          </Tooltip.Trigger>

          {/* TOOLTIP */}
          <Tooltip.Content
            side="right"
            className="rounded bg-zinc-800 px-3 py-2 text-xs text-zinc-200 shadow"
          >
            <div>Market Cap: ${token.marketCap?.toLocaleString()}</div>
            <div>Volume: ${token.volume?.toLocaleString()}</div>
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>

      {/* POPOVER */}
      <Popover.Content
        side="right"
        className="w-64 rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-sm shadow-lg"
      >
        <div className="mb-2 font-semibold">{token.name}</div>
        <div className="text-zinc-400">Symbol: {token.symbol}</div>
        <div className="text-zinc-400">Price: ${token.price}</div>
        <div className="text-zinc-400">
          Change: {token.change.toFixed(2)}%
        </div>
        <div className="text-zinc-400">
          Category: {token.category.toUpperCase()}
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}

export default memo(TokenRow);
