import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/src/store";

export const selectTokenState = (state: RootState) => state.tokens;

export const selectFilteredTokens = createSelector(
  [selectTokenState],
  ({ tokens, search }) =>
    Object.values(tokens).filter(
      token =>
        token.name.toLowerCase().includes(search) ||
        token.symbol.toLowerCase().includes(search)
    )
);

export const selectFavoriteTokens = createSelector(
  [selectFilteredTokens, selectTokenState],
  (tokens, { favorites }) =>
    tokens.filter(token => favorites.includes(token.id))
);
