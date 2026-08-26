export const demoEstablishments = [
  { id:"synthetic-centro",code:"SYN-001",name:"Restaurante demostrativo Centro",status:"Elegibilidad simulada",evaluations:1,updatedAt:"25 ago 2026" },
  { id:"synthetic-costanera",code:"SYN-002",name:"Caso sintético Costanera",status:"Elegibilidad simulada",evaluations:1,updatedAt:"24 ago 2026" },
  { id:"synthetic-norte",code:"SYN-003",name:"Escenario formativo Norte",status:"Elegibilidad simulada",evaluations:1,updatedAt:"21 ago 2026" }
] as const;

export const demoAssessments = [
  { id:"synthetic-assessment-001",establishmentId:"synthetic-centro",establishment:"Restaurante demostrativo Centro",code:"SYN-001",kind:"Demostración sintética",status:"IN_PROGRESS",progress:61,updatedAt:"25 ago 2026" },
  { id:"synthetic-assessment-002",establishmentId:"synthetic-costanera",establishment:"Caso sintético Costanera",code:"SYN-002",kind:"Demostración sintética",status:"IN_REVIEW",progress:100,updatedAt:"24 ago 2026" },
  { id:"synthetic-assessment-003",establishmentId:"synthetic-norte",establishment:"Escenario formativo Norte",code:"SYN-003",kind:"Demostración sintética",status:"CLOSED",progress:100,updatedAt:"21 ago 2026" }
] as const;
