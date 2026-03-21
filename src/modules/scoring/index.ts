import { Metrics } from "@/types/metrics";

export function calculateScore(metrics: Metrics) {
  const viewWeight = metrics.views * 0.2;
  const retentionWeight = metrics.retentionRate * 0.4;
  const engagementWeight = metrics.engagementScore * 0.4;

  return Math.round(viewWeight + retentionWeight + engagementWeight);
}
