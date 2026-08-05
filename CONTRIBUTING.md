# Contribuir al GOEI

## Principio rector

El repositorio distingue autoridad científica de integración técnica. Un commit, una rama, una revisión o un merge no aprueban conocimiento científico. Todo contenido científico normativo debe enlazar una decisión aprobada en el registro canónico.

## Flujo

1. Crear o referenciar el Issue, decisión o cambio que origina el trabajo.
2. Abrir una rama corta desde `main`.
3. Modificar solo el alcance autorizado.
4. Actualizar registro de componentes, trazabilidad y CHANGELOG cuando corresponda.
5. Ejecutar todos los controles locales.
6. Abrir pull request con impacto, evidencia, dependencias y compuertas.
7. Obtener las revisiones técnicas y científicas exigibles.
8. Fusionar sin representar el merge como aprobación científica.

## Ramas

- `proposal/GOEI-DEC-NNNN-descripcion`: propuesta vinculada a una decisión científica aún no integrada.
- `change/GOEI-CHG-NNNN-descripcion`: cambio controlado del estándar o su infraestructura.
- `issue/GOEI-ISS-NNN-descripcion`: resolución técnica de un Issue.
- `release/GOEI-vX.Y.Z`: preparación de release después de cumplir sus compuertas.
- `hotfix/GOEI-vX.Y.Z-descripcion`: corrección urgente no semántica de una release.

Las ramas deben ser cortas, usar minúsculas ASCII después del identificador y separadores `-`.

## Commits

Formato:

```text
tipo(alcance): descripción imperativa
```

Tipos permitidos:

- `governance`: gobernanza y autoridad;
- `decision`: registro o integración de una decisión ya aprobada;
- `docs`: documentación no normativa;
- `model`: metamodelos, ontología implementada o Knowledge Graph;
- `validation`: controles, pruebas y expedientes de validación;
- `release`: versiones, manifiestos y CHANGELOG;
- `fix`: corrección técnica sin cambio científico;
- `test`: pruebas automatizadas;
- `chore`: mantenimiento sin efecto semántico.

El alcance debe preferir un ID controlado, fase o paquete: `D-006`, `EPIC-001`, `WP-01`, `tesis`, `repo`.

Ejemplos:

```text
model(EPIC-001): registrar diccionario de relaciones
governance(GOEI-DIR-0002): incorporar alcance mínimo de tesis
fix(repo): impedir rutas canónicas inexistentes
```

Cuando exista incompatibilidad, el cuerpo incluye `BREAKING CHANGE:` y referencia la decisión que la autoriza. No se usa `decision` para propuestas no aprobadas.

## Validación local

```bash
python3 16_Herramientas/validadores/validate_repository.py
cd 16_Herramientas/validadores
PYTHONPATH=16_Herramientas/validadores python3 -m unittest discover -s 16_Herramientas/validadores/tests -v
python3 16_Herramientas/validadores/validate_technical_roadmap.py
python3 assess_readiness.py
python3 assess_thesis_coverage.py
```

Los dos evaluadores de readiness pueden devolver `2` cuando existen compuertas pendientes; ese resultado es esperado fuera de una release final.

## Prohibiciones

- inventar KPI, fórmulas, ponderaciones, umbrales o decisiones;
- modificar una baseline congelada sin el proceso formal aplicable;
- ocultar Issues, limitaciones o resultados negativos;
- incluir secretos, datos personales o fuentes con restricciones incompatibles;
- reescribir el historial de una release publicada;
- usar la tesis o el software como fuente normativa sustitutiva.
