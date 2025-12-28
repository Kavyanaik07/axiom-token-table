import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "./types";

interface TokenState {
  tokens: Record<string, Token>;
}

const initialState: TokenState = {
  tokens: {},
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
    updateTokenPrice(
      state,
      action: PayloadAction<{ id: string; price: number }>
    ) {
      const token = state.tokens[action.payload.id];
      if (token) {
        token.price = action.payload.price;
      }
    },
  },
});

export const { setTokens, updateTokenPrice } = tokenSlice.actions;
export default tokenSlice.reducer;
