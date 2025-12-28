"use client";

import React, { useEffect, useRef, useState } from "react";
import { Token } from "../types";
import clsx from "clsx";

function TokenRow({ token }: { token: Token }) {
  const prevPrice = useRef(token.price);
  const [flash, setFlash] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    if (token.price > prevPrice.current) {
      setFlash("up");
    } else if (token.price < prevPrice.current) {
      setFlash("down");
    }

    prevPrice.current = token.price;

    const timeout = setTimeout(() => setFlash(null), 400);
    return () => clearTimeout(timeout);
  }, [token.price]);

  return (
    <div
      className={clsx(
        "flex items-center justify-between px-3 py-2 transition-colors",
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
            token.change >= 0 ? "text-green-400" : "text-red-400"
          )}
        >
          {token.change.toFixed(2)}%
        </div>
      </div>
    </div>
  );
}

// ✅ PERFORMANCE OPTIMIZATION
export default React.memo(TokenRow);
