import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "./types";

interface TokenState {
  tokens: Record<string, Token>;
  search: string;
  favorites: string[]; // ⭐ token IDs
}

const initialState: TokenState = {
  tokens: {},
  search: "",
  favorites:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("favorites") || "[]")
      : [],
};

const tokenSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setTokens(state, action: PayloadAction<Token[]>) {
      action.payload.forEach(token => {
        state.tokens[token.id] = token;
      });
    },

    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload.toLowerCase();
    },

    toggleFavorite(state, action: PayloadAction<string>) {
      const id = action.payload;

      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(f => f !== id);
      } else {
        state.favorites.push(id);
      }

      // ⭐ persist favorites
      localStorage.setItem(
        "favorites",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { setTokens, setSearch, toggleFavorite } =
  tokenSlice.actions;

export default tokenSlice.reducer;
