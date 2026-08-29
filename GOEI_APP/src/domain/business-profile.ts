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
  challenges:z.array(z.string().trim().min(4).max(240)).min(1).max(8),
  /** Chapter 15 of the methodological book.  These facets classify the
   * operation; they are deliberately separate from company size. */
  facets:z.object({
    delivery:z.enum(["en_sala","para_llevar","reparto","mixto"]),
    production:z.enum(["convencional","cocina_enfriamiento","central_produccion","ensamblar_servir"]),
    economicNature:z.enum(["comercial","no_comercial"])
  }).optional()
});

export type BusinessProfile = z.infer<typeof businessProfileSchema>;

export const facetLabels = {
  delivery:{en_sala:"En sala",para_llevar:"Para llevar",reparto:"Reparto",mixto:"Mixto"},
  production:{convencional:"Convencional",cocina_enfriamiento:"Cocina-enfriamiento",central_produccion:"Central de producción",ensamblar_servir:"Ensamblar-servir"},
  economicNature:{comercial:"Comercial",no_comercial:"No comercial"}
} as const;

export function parseBusinessProfile(value:unknown) {
  const result = businessProfileSchema.safeParse(value);
  return result.success ? result.data : null;
}
