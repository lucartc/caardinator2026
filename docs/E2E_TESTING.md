# E2E Testing Configuration

## Problema Resolvido

O binário Electron funciona com `--no-sandbox` em ambientes Linux/CI.

## Configuração WDIO

- **Caminho do binário:** Configurado com caminho absoluto em `wdio.conf.ts:61`
- **Flags essenciais:** `--disable-dev-shm-usage --disable-gpu --disable-software-rasterizer`
- **Serviço Xvfb:** Auto-configurado para Linux headless

## Scripts de Teste

```bash
# Executar testes E2E
npm run test:e2e

# Testar binário diretamente
npm run test:binary

# Build + Test
npm run build && npm run test:e2e
```

## Variáveis de Ambiente (Opcional)

- `ELECTRON_BINARY_PATH`: Override caminho do binário
- `ELECTRON_EXTRA_FLAGS`: Flags adicionais

## Diagnóstico

Se os testes falharem:
1. Verifique se o binário existe: `ls -la release/0.0.0/linux-unpacked/caardinator`
2. Teste manual: `./release/0.0.0/linux-unpacked/caardinator --version --no-sandbox`
3. Verifique logs WDIO para erros Chrome/sandbox