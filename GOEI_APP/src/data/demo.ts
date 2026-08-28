export const demoEstablishments = [
  { id:"synthetic-centro",code:"SYN-001",name:"Restaurante demostrativo Centro",status:"Elegibilidad simulada",evaluations:1,updatedAt:"25 ago 2026",profile:{concept:"Restaurante urbano de cocina chilena contemporánea",serviceModel:"Servicio en mesa y retiro",cuisine:"Chilena contemporánea",locationContext:"Zona comercial urbana",seats:64,teamSize:18,operatingDays:"Martes a domingo",serviceHours:"12:30–23:00",channels:["Salón","Retiro","Reservas web"],demandPattern:"Alta demanda en almuerzo laboral y viernes por la noche",sourcing:"Proveedores regionales y compras semanales",dataAvailability:"POS, inventario parcial, turnos y registros sanitarios sintéticos",challenges:["Variabilidad de tiempos en hora punta","Merma sin conciliación completa","Registros distribuidos"]}},
  { id:"synthetic-costanera",code:"SYN-002",name:"Caso sintético Costanera",status:"Elegibilidad simulada",evaluations:1,updatedAt:"24 ago 2026",profile:{concept:"Restaurante familiar con foco en pescados y productos costeros",serviceModel:"Servicio en mesa",cuisine:"Marina y chilena",locationContext:"Sector turístico costero",seats:92,teamSize:24,operatingDays:"Todos los días",serviceHours:"12:00–23:30",channels:["Salón","Reservas telefónicas","Eventos pequeños"],demandPattern:"Demanda estacional y concentración durante fines de semana",sourcing:"Productos frescos de recepción frecuente",dataAvailability:"Ventas, compras, recetas, turnos y bitácoras sintéticas completas",challenges:["Estacionalidad","Control de cadena de frío","Planificación de dotación"]}},
  { id:"synthetic-norte",code:"SYN-003",name:"Escenario formativo Norte",status:"Elegibilidad simulada",evaluations:1,updatedAt:"21 ago 2026",profile:{concept:"Cafetería restaurante de operación compacta",serviceModel:"Pedido en caja y entrega en mesa",cuisine:"Cafetería, panadería y menú breve",locationContext:"Barrio residencial y oficinas",seats:38,teamSize:11,operatingDays:"Lunes a sábado",serviceHours:"07:30–20:30",channels:["Salón","Retiro","Aplicaciones de reparto"],demandPattern:"Picos en desayuno, almuerzo y merienda",sourcing:"Producción propia y proveedores de frecuencia mixta",dataAvailability:"POS y compras disponibles; inventario y producción incompletos",challenges:["Capacidad limitada de producción","Quiebres de stock","Dependencia de pocas funciones clave"]}}
] as const;

export const demoAssessments = [
  { id:"synthetic-assessment-001",establishmentId:"synthetic-centro",establishment:"Restaurante demostrativo Centro",code:"SYN-001",kind:"Demostración sintética",status:"IN_PROGRESS",progress:61,updatedAt:"25 ago 2026" },
  { id:"synthetic-assessment-002",establishmentId:"synthetic-costanera",establishment:"Caso sintético Costanera",code:"SYN-002",kind:"Demostración sintética",status:"IN_REVIEW",progress:100,updatedAt:"24 ago 2026",periodStart:"2026-08-01",periodEnd:"2026-08-28",gateStatus:"NO_VERIFICABLE",gateBasis:"Gate deliberadamente no verificable en escenario sintético demostrativo.",gateProtocolVersion:null },
  { id:"synthetic-assessment-003",establishmentId:"synthetic-norte",establishment:"Escenario formativo Norte",code:"SYN-003",kind:"Demostración sintética",status:"CLOSED",progress:100,updatedAt:"21 ago 2026" }
] as const;

export const demoCompleteResponses = Array.from({length:28},(_,index) => ({
  criterion_id:`D${Math.floor(index / 4) + 1}.${index % 4 + 1}`,
  status:"EVALUABLE" as const,
  level:2,
  evidence_grade:2,
  justification:"Dato exclusivamente sintético para demostrar el recorrido técnico del MVP.",
  no_apply_basis:null,
  source_evaluator_id:null
}));
