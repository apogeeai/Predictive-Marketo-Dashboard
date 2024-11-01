'use client';

import { Card } from '@/components/ui/card';
import { RevenuePredictor } from '@/components/cards/revenue-predictor';
import { EmailCampaign } from '@/components/cards/email-campaign';
import { LeadScoring } from '@/components/cards/lead-scoring';
import { CampaignPerformance } from '@/components/cards/campaign-performance';
import { ContentResonance } from '@/components/cards/content-resonance';
import { RoiForecast } from '@/components/cards/roi-forecast';

export function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <RevenuePredictor />
      <EmailCampaign />
      <LeadScoring />
      <CampaignPerformance />
      <ContentResonance />
      <RoiForecast />
    </div>
  );
}