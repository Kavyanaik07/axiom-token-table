export type TokenCategory = "new" | "final" | "migrated";

export interface Token {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  category: TokenCategory;
}
