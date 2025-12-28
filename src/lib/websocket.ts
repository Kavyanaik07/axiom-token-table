import { Token } from "@/src/features/tokens/types";

type Listener = (tokens: Token[]) => void;

let listeners: Listener[] = [];

let tokens: Token[] = [
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
    category: "migrated",
  },
];

export function connectWebSocket(listener: Listener) {
  listeners.push(listener);

  const interval = setInterval(() => {
    tokens = tokens.map(token => {
      const delta = +(Math.random() * 2 - 1).toFixed(2);
      return {
        ...token,
        price: +(token.price + delta).toFixed(2),
        change: delta,
      };
    });

    listeners.forEach(cb => cb(tokens));
  }, 2000);

  return () => {
    clearInterval(interval);
    listeners = listeners.filter(l => l !== listener);
  };
}
