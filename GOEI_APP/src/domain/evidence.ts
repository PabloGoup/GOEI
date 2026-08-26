export const evidenceMimeTypes = ["application/pdf","image/jpeg","image/png","text/csv"] as const;
export type EvidenceMimeType = (typeof evidenceMimeTypes)[number];
export const evidenceMaxBytes = 15 * 1024 * 1024;

export function evidenceExtension(mimeType: EvidenceMimeType) {
  return {"application/pdf":"pdf","image/jpeg":"jpg","image/png":"png","text/csv":"csv"}[mimeType];
}

export function isEvidenceFileAllowed(mimeType:string,sizeBytes:number) {
  return evidenceMimeTypes.includes(mimeType as EvidenceMimeType) && Number.isInteger(sizeBytes) && sizeBytes > 0 && sizeBytes <= evidenceMaxBytes;
}
