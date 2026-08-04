# Herramientas Git GOEI

Los hooks versionados en `.githooks/` ejecutan controles antes de commits y pushes. Se activan localmente mediante:

```bash
sh 16_Herramientas/git/install_hooks.sh
```

Los hooks son una defensa local y pueden ser omitidos deliberadamente por Git; no sustituyen la protección remota de `main`. Mientras GOEI-ISS-042 permanezca bloqueado por el plan de GitHub, toda integración deberá usar pull request por procedimiento y comprobar el workflow remoto exitoso.
