"use client";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "@/src/features/tokens/tokenSlice";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const store = configureStore({
  reducer: {
    tokens: tokenReducer,
  },
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </Provider>
  );
}
