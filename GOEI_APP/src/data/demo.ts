import type { Gate } from "@goei/engine-ts";

export const demoEstablishments = [
  { id:"synthetic-centro",code:"SYN-001",name:"Restaurante demostrativo Centro",status:"Elegibilidad simulada",evaluations:1,updatedAt:"28 ago 2026",profile:{concept:"Restaurante urbano de cocina chilena contemporánea",serviceModel:"Servicio en mesa y retiro",cuisine:"Chilena contemporánea",locationContext:"Zona comercial urbana",seats:64,teamSize:18,operatingDays:"Martes a domingo",serviceHours:"12:30–23:00",channels:["Salón","Retiro","Reservas web"],demandPattern:"Alta demanda en almuerzo laboral y viernes por la noche",sourcing:"Compras semanales y recepción frecuente de productos frescos",dataAvailability:"POS, inventario parcial, turnos y registros sanitarios sintéticos",challenges:["Variabilidad de tiempos en hora punta","Merma sin conciliación completa","Registros distribuidos"]}},
  { id:"synthetic-costanera",code:"SYN-002",name:"Caso sintético Costanera",status:"Elegibilidad simulada",evaluations:1,updatedAt:"28 ago 2026",profile:{concept:"Restaurante familiar con foco en pescados y productos costeros",serviceModel:"Servicio en mesa",cuisine:"Marina y chilena",locationContext:"Sector turístico costero",seats:92,teamSize:24,operatingDays:"Todos los días",serviceHours:"12:00–23:30",channels:["Salón","Reservas telefónicas","Eventos pequeños"],demandPattern:"Demanda estacional y concentración durante fines de semana",sourcing:"Recepción diaria de productos frescos y compras programadas",dataAvailability:"Ventas, compras, recetas, turnos y bitácoras sintéticas completas",challenges:["Estacionalidad","Control de cadena de frío","Planificación de dotación"]}},
  { id:"synthetic-norte",code:"SYN-003",name:"Escenario formativo Norte",status:"Elegibilidad simulada",evaluations:1,updatedAt:"28 ago 2026",profile:{concept:"Cafetería restaurante de operación compacta",serviceModel:"Pedido en caja y entrega en mesa",cuisine:"Cafetería, panadería y menú breve",locationContext:"Barrio residencial y oficinas",seats:38,teamSize:11,operatingDays:"Lunes a sábado",serviceHours:"07:30–20:30",channels:["Salón","Retiro","Aplicaciones de reparto"],demandPattern:"Picos en desayuno, almuerzo y merienda",sourcing:"Producción propia y proveedores de frecuencia mixta",dataAvailability:"POS y compras disponibles; inventario y producción incompletos",challenges:["Capacidad limitada de producción","Quiebres de stock","Dependencia de pocas funciones clave"]}},
  { id:"synthetic-cordillera",code:"SYN-004",name:"Bistró sintético Cordillera",status:"Elegibilidad simulada",evaluations:1,updatedAt:"28 ago 2026",profile:{concept:"Bistró de temporada con carta breve y reservas",serviceModel:"Servicio en mesa con reserva",cuisine:"Cocina de temporada",locationContext:"Sector urbano de alta afluencia",seats:48,teamSize:15,operatingDays:"Miércoles a domingo",serviceHours:"13:00–23:00",channels:["Salón","Reservas web","Eventos pequeños"],demandPattern:"Demanda concentrada en cenas y fines de semana",sourcing:"Compras planificadas dos veces por semana y recepción diaria de frescos",dataAvailability:"POS, recetas, inventario, turnos y listas de verificación sintéticas",challenges:["Dependencia de reservas","Rotación de carta","Coordinación cocina y salón"]}},
  { id:"synthetic-mercado",code:"SYN-005",name:"Cocinería sintética Mercado",status:"Elegibilidad simulada",evaluations:1,updatedAt:"28 ago 2026",profile:{concept:"Cocinería de menú diario y alto volumen al almuerzo",serviceModel:"Pedido en caja y retiro en mostrador",cuisine:"Cocina chilena tradicional",locationContext:"Entorno de mercado y oficinas",seats:56,teamSize:13,operatingDays:"Lunes a sábado",serviceHours:"08:00–18:00",channels:["Salón","Retiro","Pedidos telefónicos"],demandPattern:"Pico pronunciado entre 12:30 y 15:00",sourcing:"Compras diarias en mercado y proveedores semanales",dataAvailability:"Ventas y compras sintéticas; registros de producción y mermas discontinuos",challenges:["Alta presión en almuerzo","Estandarización de porciones","Trazabilidad documental incompleta"]}}
] as const;

export const demoAssessments = [
  { id:"synthetic-assessment-001",establishmentId:"synthetic-centro",establishment:"Restaurante demostrativo Centro",code:"SYN-001",kind:"Demostración sintética",status:"CLOSED",progress:100,updatedAt:"28 ago 2026",periodStart:"2026-08-01",periodEnd:"2026-08-28",gateStatus:"VERDE",gateBasis:"Escenario sintético sin hallazgos críticos configurados.",gateProtocolVersion:"demo-v0.1",level:3,evidenceGrade:2 },
  { id:"synthetic-assessment-002",establishmentId:"synthetic-costanera",establishment:"Caso sintético Costanera",code:"SYN-002",kind:"Demostración sintética",status:"IN_REVIEW",progress:100,updatedAt:"28 ago 2026",periodStart:"2026-08-01",periodEnd:"2026-08-28",gateStatus:"NO_VERIFICABLE",gateBasis:"Gate deliberadamente no verificable en escenario sintético demostrativo.",gateProtocolVersion:null,level:2,evidenceGrade:2 },
  { id:"synthetic-assessment-003",establishmentId:"synthetic-norte",establishment:"Escenario formativo Norte",code:"SYN-003",kind:"Demostración sintética",status:"CLOSED",progress:100,updatedAt:"28 ago 2026",periodStart:"2026-08-01",periodEnd:"2026-08-28",gateStatus:"ROJO",gateBasis:"Hallazgo crítico ficticio incorporado para demostrar la regla de no compensación.",gateProtocolVersion:"demo-v0.1",level:2,evidenceGrade:1 },
  { id:"synthetic-assessment-004",establishmentId:"synthetic-cordillera",establishment:"Bistró sintético Cordillera",code:"SYN-004",kind:"Demostración sintética",status:"CLOSED",progress:100,updatedAt:"28 ago 2026",periodStart:"2026-08-01",periodEnd:"2026-08-28",gateStatus:"VERDE",gateBasis:"Escenario sintético sin hallazgos críticos configurados.",gateProtocolVersion:"demo-v0.1",level:4,evidenceGrade:3 },
  { id:"synthetic-assessment-005",establishmentId:"synthetic-mercado",establishment:"Cocinería sintética Mercado",code:"SYN-005",kind:"Demostración sintética",status:"CLOSED",progress:100,updatedAt:"28 ago 2026",periodStart:"2026-08-01",periodEnd:"2026-08-28",gateStatus:"VERDE",gateBasis:"Escenario sintético sin hallazgos críticos configurados.",gateProtocolVersion:"demo-v0.1",level:1,evidenceGrade:1 }
] as const;

export function demoResponses(level:number,evidenceGrade:number) {
  return Array.from({length:28},(_,index) => ({
    criterion_id:`D${Math.floor(index / 4) + 1}.${index % 4 + 1}`,
    status:"EVALUABLE" as const,
    level,
    evidence_grade:evidenceGrade,
    justification:"Dato exclusivamente sintético para demostrar y comparar el recorrido técnico del MVP.",
    no_apply_basis:null,
    source_evaluator_id:null
  }));
}

export const demoCompleteResponses = demoResponses(2,2);

export type DemoInsights = { summary:string; strengths:string[]; findings:string[]; suggestedActions:string[] };

export const demoInsights: Record<string,DemoInsights> = {
  "synthetic-assessment-001": {summary:"Operación urbana con prácticas mayormente consistentes y brechas de conciliación documental.",strengths:["Servicio y propuesta operacional definidos","Registros sintéticos disponibles en varias áreas"],findings:["Merma sin conciliación completa","Información distribuida entre registros"],suggestedActions:["Unificar el registro de mermas y responsables","Revisar tiempos de servicio en las franjas de mayor demanda"]},
  "synthetic-assessment-002": {summary:"Caso de desempeño intermedio cuya lectura queda limitada por un gate no verificable.",strengths:["Disponibilidad sintética amplia de ventas, compras y recetas","Modelo de servicio claramente delimitado"],findings:["Gate crítico sin evidencia suficiente para verificación","Demanda estacional con presión sobre dotación"],suggestedActions:["Completar la evidencia requerida para resolver el gate","Contrastar dotación planificada con períodos de demanda alta"]},
  "synthetic-assessment-003": {summary:"Operación compacta con hallazgo crítico ficticio que activa la regla de no compensación.",strengths:["Canales y momentos de demanda identificados","POS y compras disponibles en el escenario"],findings:["Gate rojo: el resultado favorable no puede compensarlo","Inventario y producción incompletos"],suggestedActions:["Abordar y documentar primero el hallazgo crítico ficticio","Establecer continuidad para inventario y producción"]},
  "synthetic-assessment-004": {summary:"Caso demostrativo de alta consistencia, evidencia robusta y gate verde.",strengths:["Recetas, inventario, turnos y verificaciones disponibles","Carta breve y compras planificadas"],findings:["Dependencia de reservas y concentración de demanda","Coordinación cocina-salón como punto de vigilancia"],suggestedActions:["Mantener revisión periódica de capacidad por reserva","Documentar aprendizajes de coordinación entre áreas"]},
  "synthetic-assessment-005": {summary:"Operación de alto volumen con nivel inicial y trazabilidad documental incompleta.",strengths:["Propuesta de valor y franja crítica bien delimitadas","Ventas y compras sintéticas disponibles"],findings:["Estandarización de porciones insuficiente","Registros de producción y mermas discontinuos"],suggestedActions:["Priorizar fichas de porción y controles simples de producción","Consolidar un registro diario de mermas y quiebres"]}
};

export function demoAssessmentResponses(assessmentId:string) {
  const assessment=demoAssessments.find(item=>item.id===assessmentId);
  return assessment ? demoResponses(assessment.level,assessment.evidenceGrade) : [];
}

export function demoGate(assessmentId:string):{status:Gate;basis:string;protocolVersion:string|null}|null {
  const item=demoAssessments.find(assessment=>assessment.id===assessmentId);
  return item ? {status:item.gateStatus as Gate,basis:item.gateBasis,protocolVersion:item.gateProtocolVersion} : null;
}
