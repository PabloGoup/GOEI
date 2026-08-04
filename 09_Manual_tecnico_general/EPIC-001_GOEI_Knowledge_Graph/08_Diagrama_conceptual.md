# Diagrama conceptual completo — GOEI Knowledge Graph

| Campo | Valor |
|---|---|
| Identificador | GOEI-KG-DGM-0001 |
| Versión | 0.1.0-draft |

```mermaid
flowchart TB
  subgraph GOV["K0 — Autoridad y gobernanza"]
    CON["Constitución"] -->|establece| ORG["Organización"]
    ORG -->|tiene miembro| AGT["Agente"]
    CON -->|establece| GR["Reglas de gobernanza"]
    AGT -->|participa en| DEC["Decisión científica"]
    ISS["Issue / Pregunta abierta"] -->|requiere| DEC
    DEC -->|resuelve| ISS
  end

  subgraph EPI["K1 — Procedencia epistémica"]
    SRC["Fuente bibliográfica"] -->|contiene| EVD["Evidencia"]
    RES["Investigación"] -->|usa| SRC
    RES -->|produce| EVD
    RES -->|produce| OBS["Observación"]
    RES -->|formula| HYP["Hipótesis"]
    DEB["Debate científico"] -->|discute| HYP
    EVD -->|sustenta o contradice| HYP
    EVD -->|informa| DEC
    HYP -->|evaluada por| DEC
    DEB -->|informa| DEC
  end

  subgraph ENG["K2 — Ingeniería del estándar"]
    DEC -->|crea o modifica| CMP["Componente"]
    DEC -->|crea| REQ["Requisito"]
    DEC -->|crea| RUL["Regla"]
    REV["Revisión técnica"] -->|revisa| CMP
    REV -->|detecta| ISS
    CMP --> ONT["Ontología"]
    CMP --> TAX["Taxonomía"]
    CMP --> PRC["Proceso"]
    CMP --> KPI["KPI-def"]
    CMP --> FML["Fórmula"]
    FML -->|implementa| RUL
    KPI -->|usa| FML
    KPI -->|relacionado con| PRC
    TAX -->|delimita aplicabilidad| KPI
    REQ -->|se expresa en| DOC["Documento"]
    CMP -->|se expresa en| DOC
  end

  subgraph DOCS["K3 — Empaquetado"]
    DOC --> STD["GOEI Standard"]
    MAN["Manual"] -->|deriva de| STD
    FRM["Formulario"] -->|implementa| REQ
    MAN -->|incluye| FRM
    ANX["Anexo"] -->|anexo de| DOC
    BOK["GOEI BOK"] -->|explica| STD
    BOK -->|referencia| DEC
  end

  subgraph VALD["K4 — Validación y difusión"]
    VAL["Validación"] -->|valida o no valida| CMP
    VAL -->|produce| EVD
    PUB["Publicación"] -->|deriva de| RES
    PUB -->|deriva de| STD
    THS["Tesis"] -->|deriva de| RES
    THS -->|deriva de| STD
  end

  subgraph EVO["K5 — Evolución"]
    CHG["Registro de cambio"] -->|propone cambio| CMP
    CHG -->|implementa| DEC
    CHG -->|produce| VER["Versión"]
    CMP -->|tiene versión| VER
    BSL["Línea base"] -->|fija| VER
    REL["Release"] -->|publica| BSL
    REL -->|incluye| DOC
    ISS -->|bloquea| CMP
    ISS -->|bloquea| REL
  end

  OBS -.->|cumple AX-11 del baseline| ONT
  BSL -->|congela| ONT
  VAL -->|habilita si corresponde| BSL
```

## Lectura

Las flechas sólidas representan relaciones permitidas; no afirman que todas existan hoy. La línea punteada marca una restricción heredada del baseline D-006/D-006-REV. Ningún camino desde `Publicación`, `Tesis`, `Manual`, `Formulario` o `BOK` crea autoridad normativa en sentido inverso.
