# Política Git y contribución GOEI

| Campo | Valor |
|---|---|
| Identificador | GOEI-GIT-0001 |
| Versión | 1.0.0 |
| Estado | Control técnico activo |
| Responsable | Oficina Técnica GOEI |
| Repositorio remoto previsto | `https://github.com/PabloGoup/GOEI.git` |

## Modelo

Se utiliza desarrollo basado en `main` con ramas cortas y pull requests. `main` representa la mejor configuración administrativa estable disponible, pero un merge no otorga aprobación científica.

## Protección requerida en GitHub

- pull request obligatorio;
- comprobación `integrity` obligatoria;
- conversaciones resueltas antes de fusionar;
- impedir force-push y eliminación de `main`;
- historial lineal preferido;
- revisión de CODEOWNERS en áreas controladas;
- etiquetas de release protegidas y firmadas cuando la infraestructura lo permita.

La aplicación remota de estas reglas requiere permisos administrativos y deberá verificarse separadamente.

### Restricción remota vigente

GitHub informó que la protección de ramas no está disponible para este repositorio privado bajo el plan actual. GOEI-ISS-042 permanece bloqueado hasta contratar GitHub Pro o convertir el repositorio en público mediante decisión de la Dirección. Esta restricción no se resuelve reduciendo controles.

Como defensa compensatoria se usan hooks versionados y validación continua. Los hooks se activan con `sh 16_Herramientas/git/install_hooks.sh`; la revisión mediante pull request permanece obligatoria por procedimiento.

## Estrategia de merge

Se prefiere squash para cambios autocontenidos y merge preservado para ramas de release cuando la historia de integración resulte material. El mensaje final conserva el ID del Issue, cambio o decisión.

## Releases

Una etiqueta Git solo se crea después de satisfacer GOEI-REL-POL-0001. Patrón: `vMAJOR.MINOR.PATCH`; candidatos: `vMAJOR.MINOR.PATCH-rc.N`. La etiqueta nunca sustituye el manifiesto ni el acto aprobatorio.

## Trazabilidad

La relación mínima es:

```text
Issue/Decisión → rama → commits → pull request → cambio → componente → release
```

Los identificadores canónicos permanecen en documentos y metadatos; los hashes Git añaden identidad histórica, pero no reemplazan los IDs GOEI.
