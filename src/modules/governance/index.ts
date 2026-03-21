import { Campaign } from "@/types/campaign";

export function calculateEngagement(campaign: Campaign) {
  if (campaign.views === 0) return 0;
  return Math.round((campaign.engagements / campaign.views) * 100);
}
