import { z } from "zod";

const shortText = z.string().trim().min(2).max(240);

export const businessProfileSchema = z.object({
  concept:shortText,
  serviceModel:shortText,
  cuisine:shortText,
  locationContext:shortText,
  seats:z.coerce.number().int().min(1).max(2000),
  teamSize:z.coerce.number().int().min(1).max(1000),
  operatingDays:shortText,
  serviceHours:shortText,
  channels:z.array(shortText).min(1).max(8),
  demandPattern:z.string().trim().min(8).max(600),
  sourcing:z.string().trim().min(8).max(600),
  dataAvailability:z.string().trim().min(8).max(600),
  challenges:z.array(z.string().trim().min(4).max(240)).min(1).max(8)
});

export type BusinessProfile = z.infer<typeof businessProfileSchema>;

export function parseBusinessProfile(value:unknown) {
  const result = businessProfileSchema.safeParse(value);
  return result.success ? result.data : null;
}
