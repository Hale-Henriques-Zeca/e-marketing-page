export type CampaignType =
  | "event"
  | "expo"
  | "donation"
  | "fieldwork"
  | "branding";

export interface Campaign {
  id: string;
  title: string;
  description: string;
  type: CampaignType;
  city: string;
  country: string;
  startDate: string;
  endDate?: string;
  views: number;
  engagements: number;
  createdAt: string;
}
