import { Token } from "../types";

export const fetchTokens = async (): Promise<Token[]> => {
  return [
    {
      id: "btc",
      name: "Bitcoin",
      symbol: "BTC",
      price: 62450,
      change: 1.24,
      category: "new",
    },
    {
      id: "eth",
      name: "Ethereum",
      symbol: "ETH",
      price: 3420,
      change: -0.82,
      category: "final",
    },
    {
      id: "sol",
      name: "Solana",
      symbol: "SOL",
      price: 148,
      change: 2.91,
