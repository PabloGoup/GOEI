export const demoAuditEvents = [
  {id:"AUD-SYN-006",eventType:"assessment.returned",entityType:"assessment",entityLabel:"SYN-002",occurredAt:"2026-08-26T10:35:00-04:00",metadata:{synthetic:true,fromStatus:"IN_REVIEW",toStatus:"RETURNED"}},
  {id:"AUD-SYN-005",eventType:"assessment.review_started",entityType:"assessment",entityLabel:"SYN-002",occurredAt:"2026-08-26T10:14:00-04:00",metadata:{synthetic:true,fromStatus:"SUBMITTED",toStatus:"IN_REVIEW"}},
  {id:"AUD-SYN-004",eventType:"assessment.submitted",entityType:"assessment",entityLabel:"SYN-002",occurredAt:"2026-08-26T09:58:00-04:00",metadata:{synthetic:true,instrumentVersion:"0.1.0-candidate"}},
  {id:"AUD-SYN-003",eventType:"assessment.response_saved",entityType:"assessment_response",entityLabel:"SYN-001 · D2.4",occurredAt:"2026-08-25T17:42:00-04:00",metadata:{synthetic:true,criterionId:"D2.4",status:"EVALUABLE"}},
  {id:"AUD-SYN-002",eventType:"assessment.created",entityType:"assessment",entityLabel:"SYN-002",occurredAt:"2026-08-25T15:20:00-04:00",metadata:{synthetic:true,instrumentVersion:"0.1.0-candidate"}},
  {id:"AUD-SYN-001",eventType:"establishment.created",entityType:"establishment",entityLabel:"SYN-002",occurredAt:"2026-08-25T15:18:00-04:00",metadata:{synthetic:true}}
] as const;
