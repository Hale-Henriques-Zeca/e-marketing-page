import { TerritoryScore } from "@/types/territory";

export function normalizeTerritoryScore(data: TerritoryScore) {
  return {
    ...data,
    score: Math.min(100, data.score),
  };
}
