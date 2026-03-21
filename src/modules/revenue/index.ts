export interface RevenueSource {
  source: "subscription" | "branding" | "infrastructure";
  amount: number;
  currency: "USD" | "EUR" | "MZN";
}

export function totalRevenue(sources: RevenueSource[]) {
  return sources.reduce((sum, r) => sum + r.amount, 0);
}
