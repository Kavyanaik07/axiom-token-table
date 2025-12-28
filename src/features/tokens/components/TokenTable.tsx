"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchTokens } from "../api/tokens.api";
import TokenColumn from "./TokenColumn";
import { useDispatch, useSelector } from "react-redux";
import { setTokens } from "../tokenSlice";
import { useTokenStream } from "../hooks/useTokenStream";
import { RootState } from "@/src/store";

export default function TokenTable() {
  const dispatch = useDispatch();

  // Subscribe to WebSocket updates
  useTokenStream();

  // Read tokens from Redux (Record → Array)
  const tokenMap = useSelector(
    (state: RootState) => state.tokens.tokens
  );
  const tokens = Object.values(tokenMap);

  const { isLoading } = useQuery({
    queryKey: ["tokens"],
    queryFn: fetchTokens,
    onSuccess: data => dispatch(setTokens(data)),
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
