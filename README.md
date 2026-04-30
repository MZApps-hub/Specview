# SpecView

O **SpecView** é um **monitor de hardware para Windows** feito em **Electron**, com interface em HTML/CSS/JS e coleta de dados via a biblioteca [`systeminformation`](https://www.npmjs.com/package/systeminformation).

Ele exibe informações **em tempo real** de:

- CPU (uso geral, uso por core, processos)
- Memória RAM
- GPU
- Armazenamento
- Rede (download/upload)
- Temperaturas (quando disponível)
- Benchmark sintético
- Compatibilidade de jogos (base local de requisitos + estimativa)

## Estrutura do repositório

Este repositório contém:

- **App (Electron)**: `SpecView-v5/specview5/`
- **Página estática de downloads/ajuda**: `index.html` (raiz)
- **Changelog das versões**: `CHANGELOG.md` (raiz)

O app em si está concentrado em:

- `SpecView-v5/specview5/src/main.js`: **processo principal** (janela, tray, IPC, chamadas ao `systeminformation`)
- `SpecView-v5/specview5/src/preload.js`: **contextBridge** (`window.specview.*`)
- `SpecView-v5/specview5/src/index.html`: UI (layout/páginas)
- `SpecView-v5/specview5/src/renderer.js`: lógica da UI (gráficos, páginas, jogos, benchmark, share)

## Requisitos

- **Windows 10/11 (x64)**
- **Node.js** (o instalador abre o link do Node 20.x caso não exista)

> Observação: para leituras de temperatura mais confiáveis, pode ser necessário executar como **Administrador** (ver abaixo).

## Como rodar (desenvolvimento)

Entre na pasta do app:

```bash
cd SpecView-v5/specview5
```

Instale dependências:

```bash
npm install
```

Rode:

```bash
npm start
```

Atalhos incluídos:

- `SpecView-v5/specview5/iniciar.bat`: executa `npm start`
- `SpecView-v5/specview5/instalar.bat`: verifica Node, roda `npm install` e cria atalho na área de trabalho

## Como compilar (gerar .exe)

Na pasta `SpecView-v5/specview5`:

```bash
npm install
npx electron-builder --win nsis portable --x64
```

Ou use:

- `SpecView-v5/specview5/compilar.bat`

Saída em:

- `SpecView-v5/specview5/dist/`
  - instalador (NSIS)
  - executável portátil (`SpecView-Portatil.exe`)

## Temperatura (N/A) e permissões

Algumas leituras de sensores podem retornar **N/A** quando o app não está com permissões elevadas.

- Para testar, execute o app como **Administrador** (ex.: clique direito em `iniciar.bat` → **Executar como administrador**).

## Notas de arquitetura (resumo)

- O `main.js` coleta dados (estáticos/dinâmicos) e expõe por **IPC**.
- O `preload.js` expõe uma API controlada no renderer via `window.specview`.
- O `renderer.js` consome `window.specview.getStaticInfo()` e `window.specview.getDynamicInfo()` e atualiza a UI periodicamente.

## Licença

O app declara licença **MIT** em `SpecView-v5/specview5/package.json`.

