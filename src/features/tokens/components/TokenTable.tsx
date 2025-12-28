"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { fetchTokens } from "../api/tokens.api";
import { setTokens } from "../tokenSlice";
import { useTokenStream } from "../hooks/useTokenStream";
import TokenColumn from "./TokenColumn";
import { RootState } from "@/src/store";

export default function TokenTable() {
  const dispatch = useDispatch();

  // 🔴 Live WebSocket updates
  useTokenStream();

  // 🔴 Read tokens, search & favorites from Redux
  const { tokens: tokenMap, search, favorites } = useSelector(
    (state: RootState) => state.tokens
  );

  // 🔴 Convert Record → Array + search filter
  const tokens = Object.values(tokenMap).filter(
    token =>
      token.name.toLowerCase().includes(search) ||
      token.symbol.toLowerCase().includes(search)
  );

  // ⭐ Favorite tokens
  const favoriteTokens = tokens.filter(token =>
    favorites.includes(token.id)
  );

  // 🔴 Fetch tokens (React Query v5)
  const { data, isLoading } = useQuery({
    queryKey: ["tokens"],
    queryFn: fetchTokens,
    staleTime: 10_000,
  });

  // 🔴 Hydrate Redux
  useEffect(() => {
    if (data) dispatch(setTokens(data));
  }, [data, dispatch]);

  // 🔍 EMPTY STATE — search found nothing
  if (!isLoading && tokens.length === 0) {
    return (
      <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6 text-center text-zinc-400">
        No tokens found for your search.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {/* ⭐ FAVORITES */}
      {favorites.length === 0 ? (
        <div className="md:col-span-3 rounded-lg border border-dashed border-zinc-800 p-4 text-center text-zinc-500">
          ⭐ Mark tokens as favorites to see them here
        </div>
      ) : (
        <TokenColumn
          title="⭐ Favorites"
          tokens={favoriteTokens}
          isLoading={false}
        />
      )}

      {/* MAIN COLUMNS */}
      <TokenColumn
        title="New Pairs"
        tokens={tokens.filter(t => t.category === "new")}
        isLoading={isLoading}
      />

      <TokenColumn
        title="Final Stretch"
        tokens={tokens.filter(t => t.category === "final")}
        isLoading={isLoading}
      />

      <TokenColumn
        title="Migrated"
        tokens={tokens.filter(t => t.category === "migrated")}
        isLoading={isLoading}
      />
    </div>
  );
}
