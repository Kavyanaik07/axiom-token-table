"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchTokens } from "../api/tokens.api";
import TokenColumn from "./TokenColumn";
import { useDispatch } from "react-redux";
import { setTokens } from "../tokenSlice";

export default function TokenTable() {
  const dispatch = useDispatch();

  const { data = [], isLoading } = useQuery({
    queryKey: ["tokens"],
    queryFn: fetchTokens,
    onSuccess: tokens => dispatch(setTokens(tokens)),
  });

  if (isLoading) {
    return <div className="text-zinc-400">Loading tokens...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <TokenColumn
        title="New Pairs"
        tokens={data.filter(t => t.category === "new")}
      />
      <TokenColumn
        title="Final Stretch"
        tokens={data.filter(t => t.category === "final")}
      />
      <TokenColumn
        title="Migrated"
        tokens={data.filter(t => t.category === "migrated")}
      />
    </div>
  );
}
