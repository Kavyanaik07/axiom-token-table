export type TokenCategory = "new" | "final" | "migrated";

export interface Token {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  category: TokenCategory;

  // ✅ ADD THESE (optional, safe)
  marketCap?: number;
  volume?: number;
}
