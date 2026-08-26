export type CriterionStatus = "PENDING" | "EVALUABLE" | "NO_APLICA" | "NO_VERIFICABLE";

export interface InstrumentDimension { id: string; name: string }
export interface InstrumentCriterion { id: string; dimensionId: string; name: string; evidenceHint: string }

export const instrument = {
  id: "GOEI-INSTRUMENT-PILOT-28",
  version: "0.1.0-candidate",
  modelVersion: "GOEI-MOD-SCORE-PILOT-0001@0.1.0-candidate",
  status: "candidate",
  source: "07_Ponderacion_y_formula/GOEI_Modelo_Puntaje_Salud_Operacional_Piloto_v0.1.md"
} as const;

export const instrumentDimensions: readonly InstrumentDimension[] = [
  { id: "D1", name: "Inocuidad, legalidad y control crítico" },
  { id: "D2", name: "Sostenibilidad económica y control de costos" },
  { id: "D3", name: "Procesos, inventario y productividad" },
  { id: "D4", name: "Servicio y experiencia del cliente" },
  { id: "D5", name: "Calidad y consistencia del producto" },
  { id: "D6", name: "Personas y organización del trabajo" },
  { id: "D7", name: "Información, resiliencia y mejora" }
];

export const instrumentCriteria: readonly InstrumentCriterion[] = [
  { id:"D1.1",dimensionId:"D1",name:"Habilitación sanitaria/legal aplicable y vigente",evidenceHint:"Documento o consulta verificable; alcance del establecimiento." },
  { id:"D1.2",dimensionId:"D1",name:"Controles de higiene y prevención aplicados",evidenceHint:"Registros, observación estructurada y responsables." },
  { id:"D1.3",dimensionId:"D1",name:"Control de condiciones críticas del alimento",evidenceHint:"Procedimiento, registros e instrumentos aptos cuando corresponda." },
  { id:"D1.4",dimensionId:"D1",name:"Trazabilidad, respuesta y corrección de hallazgos",evidenceHint:"Identificación, contención, corrección y registro." },
  { id:"D2.1",dimensionId:"D2",name:"Ventas y costos conciliables por periodo",evidenceHint:"Fuentes, periodo, perímetro y conciliación." },
  { id:"D2.2",dimensionId:"D2",name:"Control del costo de alimentos",evidenceHint:"C-009 cuando sea calculable; receta, rendimiento, merma, precio, desviaciones y acciones." },
  { id:"D2.3",dimensionId:"D2",name:"Control del costo laboral",evidenceHint:"C-029 cuando sea calculable; componentes, asignaciones y revisión." },
  { id:"D2.4",dimensionId:"D2",name:"Control integral del costo del producto y decisiones de precio",evidenceHint:"Cobertura trazable de F.C., M.O. y C.I.F.; precio, margen, responsable y verificación." },
  { id:"D3.1",dimensionId:"D3",name:"Procesos críticos definidos y repetibles",evidenceHint:"Secuencia, responsables y excepciones." },
  { id:"D3.2",dimensionId:"D3",name:"Inventario y abastecimiento bajo control",evidenceHint:"Conteos, compras, diferencias, quiebres y mermas." },
  { id:"D3.3",dimensionId:"D3",name:"Capacidad y productividad gestionadas",evidenceHint:"Demanda, capacidad, carga, tiempos, errores y calidad." },
  { id:"D3.4",dimensionId:"D3",name:"Mantenimiento y continuidad operacional",evidenceHint:"Fallas, responsables, reparación, retorno al servicio y prevención." },
  { id:"D4.1",dimensionId:"D4",name:"Estándar de servicio aplicable",evidenceHint:"Expectativas, secuencia y responsabilidades." },
  { id:"D4.2",dimensionId:"D4",name:"Exactitud, oportunidad y recuperación del servicio",evidenceHint:"Errores o retrasos, respuesta y cierre." },
  { id:"D4.3",dimensionId:"D4",name:"Voz del cliente capturada lícitamente",evidenceHint:"Canal, registro, clasificación y privacidad." },
  { id:"D4.4",dimensionId:"D4",name:"Mejora del servicio basada en evidencia",evidenceHint:"Tendencias, acciones y verificación posterior." },
  { id:"D5.1",dimensionId:"D5",name:"Especificaciones mínimas de producto",evidenceHint:"Receta, ficha o estándar equivalente." },
  { id:"D5.2",dimensionId:"D5",name:"Consistencia de preparación y presentación",evidenceHint:"Observaciones replicadas, controles o registros." },
  { id:"D5.3",dimensionId:"D5",name:"Control de no conformidades y desperdicio",evidenceHint:"Devoluciones, reprocesos, mermas o causas." },
  { id:"D5.4",dimensionId:"D5",name:"Acciones correctivas y aprendizaje",evidenceHint:"Responsable, acción, seguimiento y cierre." },
  { id:"D6.1",dimensionId:"D6",name:"Roles, responsabilidades y cobertura operativa",evidenceHint:"Asignación y continuidad ante ausencias." },
  { id:"D6.2",dimensionId:"D6",name:"Competencias e inducción",evidenceHint:"Entrenamiento proporcional y evidencia de aplicación." },
  { id:"D6.3",dimensionId:"D6",name:"Jornada, carga y dotación gestionadas",evidenceHint:"Registros autorizados, pausas, carga y ajustes." },
  { id:"D6.4",dimensionId:"D6",name:"Comunicación, incidentes y mejora del equipo",evidenceHint:"Reporte, respuesta y aprendizaje." },
  { id:"D7.1",dimensionId:"D7",name:"Datos operacionales trazables",evidenceHint:"Fuente, periodo, responsable, versión y calidad." },
  { id:"D7.2",dimensionId:"D7",name:"Revisión periódica del desempeño",evidenceHint:"Rutina, perfil o indicadores y responsables." },
  { id:"D7.3",dimensionId:"D7",name:"Continuidad ante fallas o interrupciones",evidenceHint:"Respuesta, prioridades y recuperación." },
  { id:"D7.4",dimensionId:"D7",name:"Ciclo de mejora cerrado",evidenceHint:"Problema, causa, acción, responsable y verificación." }
];

export const levelRubric = [
  { level:0,label:"Ausente / fuera de control",description:"No existe práctica mínima o el proceso está fuera de control." },
  { level:1,label:"Reactivo e informal",description:"Depende de personas y reacción; ejecución variable." },
  { level:2,label:"Definido parcialmente",description:"Práctica reconocible, pero aplicación o registro incompletos." },
  { level:3,label:"Controlado y repetible",description:"Práctica consistente, con responsable y evidencia verificable." },
  { level:4,label:"Medido y mejorado",description:"Nivel 3 más uso de tendencias para corregir y demostrar mejora." }
] as const;

export const evidenceGrades = [
  { grade:0,label:"No verificable" },
  { grade:1,label:"Declaración coherente, sin soporte adicional" },
  { grade:2,label:"Documento u observación verificable" },
  { grade:3,label:"Triangulación o repetición consistente" }
] as const;
