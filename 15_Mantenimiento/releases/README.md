# Expedientes de releases GOEI

Esta carpeta contiene candidatos y releases del estándar. No se debe crear una carpeta de release sin su expediente de autoridad y sus compuertas documentadas.

Estructura esperada:

```text
releases/
└── GOEI-RC-vX.Y.Z-rc.N/
    ├── RELEASE.md
    ├── MANIFEST.json
    └── VALIDATION.md
```

Las plantillas canónicas están en `plantillas/RELEASE_TEMPLATE.md` y `plantillas/RELEASE_DOSSIER_TEMPLATE.json`. Los manifiestos se generan con `16_Herramientas/validadores/build_manifest.py`, se comparan con `compare_manifests.py` y sus compuertas se evalúan con `evaluate_release_gates.py`.
