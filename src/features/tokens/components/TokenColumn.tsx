"use client";

import { Token } from "../types";
import TokenRow from "./TokenRow";
import Skeleton from "@/src/components/Skeleton";
import { useMemo, useState } from "react";
import clsx from "clsx";

type SortKey = "price" | "change" | "name";
type SortOrder = "asc" | "desc";

interface Props {
  title: string;
  tokens: Token[];
  isLoading?: boolean;
}

export default function TokenColumn({
  title,
  tokens,
  isLoading = false,
}: Props) {
  const [sortKey, setSortKey] = useState<SortKey>("price");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const sortedTokens = useMemo(() => {
    const sorted = [...tokens].sort((a, b) => {
      if (sortKey === "name") {
        return a.name.localeCompare(b.name);
      }
      return a[sortKey] - b[sortKey];
    });

    return sortOrder === "asc" ? sorted : sorted.reverse();
  }, [tokens, sortKey, sortOrder]);

  const toggleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("desc");
    }
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950">
      {/* Header */}
      <div className="border-b border-zinc-800 px-3 py-2">
        <h2 className="mb-2 text-sm font-semibold text-zinc-300">
          {title}
        </h2>

        <div className="flex gap-3 text-xs text-zinc-400">
          <button
            onClick={() => toggleSort("name")}
            className={clsx(sortKey === "name" && "text-white")}
          >
            Name
          </button>
          <button
            onClick={() => toggleSort("price")}
            className={clsx(sortKey === "price" && "text-white")}
          >
            Price
          </button>
          <button
            onClick={() => toggleSort("change")}
            className={clsx(sortKey === "change" && "text-white")}
          >
            Change
          </button>
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-zinc-800">
        {isLoading ? (
          <Skeleton />
        ) : (
          sortedTokens.map(token => (
            <TokenRow key={token.id} token={token} />
          ))
        )}
      </div>
    </div>
  );
}
