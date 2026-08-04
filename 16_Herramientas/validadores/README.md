# Validadores del repositorio GOEI

Ejecutar desde la raíz:

```bash
python3 16_Herramientas/validadores/validate_repository.py
```

El validador es de solo lectura. Comprueba artefactos requeridos, checksums de la Ontology Baseline v0.1, enlaces Markdown locales, unicidad de Issues canónicos, unicidad y rutas canónicas del registro de componentes, cobertura bidireccional entre componentes y matriz de trazabilidad, y presencia del inventario mínimo directoral de la tesis. No valida contenido científico.

Para consultar preparación real de los entregables finales:

```bash
python3 16_Herramientas/validadores/assess_readiness.py
```

El código de salida `2` significa que quedan compuertas pendientes; no es un error del programa.

Para generar un manifiesto reproducible:

```bash
python3 16_Herramientas/validadores/build_manifest.py --root . --scope . --output /ruta/segura/MANIFEST.json
```

Para comparar una línea base con un candidato:

```bash
python3 16_Herramientas/validadores/compare_manifests.py BASELINE.json CANDIDATE.json
```

El comparador devuelve `0` si son idénticos y `1` si detecta diferencias. Estas herramientas solo describen contenido y cambios; no aprueban una baseline ni una release.

Para evaluar las compuertas G0–G5 de un expediente:

```bash
python3 16_Herramientas/validadores/evaluate_release_gates.py RUTA/RELEASE_DOSSIER.json
```

El código `0` indica que el expediente resulta técnicamente elegible para promoción; `2` indica una o más compuertas pendientes. Incluso con código `0`, la salida no crea una aprobación: G1 y G5 requieren registros aprobatorios explícitos aportados por las autoridades competentes.

Las pruebas unitarias se ejecutan desde esta carpeta:

```bash
cd 16_Herramientas/validadores
python3 -m unittest discover -s tests -v
```

Para evaluar la cobertura del Plan Maestro Directoral:

```bash
python3 16_Herramientas/validadores/assess_thesis_coverage.py
```

El código `2` indica requisitos todavía pendientes. Solo `Aprobado` y `Publicado` cuentan como satisfechos; la herramienta no juzga la ciencia ni la calidad académica.

Para comprobar la hoja de ruta técnica:

```bash
python3 16_Herramientas/validadores/validate_technical_roadmap.py
```

El control rechaza paquetes completos sin evidencia, dependencias desconocidas o cíclicas y ramas bloqueadas sin blocker explícito.

Para validar el catálogo bibliográfico:

```bash
python3 16_Herramientas/validadores/validate_bibliography.py
```

El resultado conforme solo acredita integridad de metadatos y trazabilidad. No admite fuentes como evidencia ni evalúa su calidad científica.
