"use client";

import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../tokenSlice";
import { RootState } from "@/src/store";

export default function TokenSearch() {
  const dispatch = useDispatch();
  const search = useSelector(
    (state: RootState) => state.tokens.search
  );

  return (
    <input
      type="text"
      value={search}
      onChange={e => dispatch(setSearch(e.target.value))}
      placeholder="Search tokens..."
      className="mb-4 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-white outline-none focus:border-zinc-600"
    />
  );
}
