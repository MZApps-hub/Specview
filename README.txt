╔══════════════════════════════════════════════╗
║        SPECVIEW v7 — LEIA-ME               ║
╚══════════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PASSO 1 — PRIMEIRA VEZ (so faz uma vez)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Clique duas vezes em: instalar.bat

 O que ele faz automaticamente:
  - Verifica se o Node.js esta instalado
  - Se nao estiver, abre o download
  - Instala todas as dependencias do app
  - Instala o electron-builder (para gerar .exe)
  - Cria o atalho "SpecView" na Area de Trabalho

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PASSO 2 — ABRIR O APP (proximas vezes)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Opcao A (recomendado):
   Clique no atalho "SpecView" na Area de Trabalho
   Abre sem janela preta, igual ao Discord!

 Opcao B:
   Clique duas vezes em iniciar.bat

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 GERAR .EXE STANDALONE (opcional)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Apos instalar.bat, clique em: compilar.bat
 Pode demorar 15-20 min na primeira vez.

 Arquivos gerados na pasta dist\:
  - SpecView Setup.exe     -> instala no PC
  - SpecView-Portatil.exe  -> abre direto

 Se der erro no compilar.bat:
  - Clique direito e "Executar como administrador"
  - Desative o antivirus temporariamente

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 TEMPERATURA DA CPU
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 O app tenta 2 metodos automaticamente:
  1. systeminformation (sensor direto)
  2. WMI do Windows (fallback automatico)

 Para melhores resultados:
  - Clique direito em iniciar.bat
  - Escolha "Executar como administrador"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 MINIMIZAR PARA BANDEJA (igual Discord)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Fechar a janela NAO fecha o app.
 Ele fica na bandeja (canto inferior direito).
  - Clique no icone para reabrir
  - Clique direito > Sair para fechar de verdade

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 FUNCIONALIDADES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Visao Geral  -> resumo de tudo
 CPU          -> modelo real, nucleos, historico
 RAM          -> uso em tempo real, graficos
 GPU          -> detecta integrada e dedicada
 Disco        -> modelo, tamanho, tipo
 Rede         -> velocidade real + teste
 Temperatura  -> CPU por core, WMI fallback
 FPS          -> FPS ao vivo WebGL + benchmark
 Jogos        -> verifica compatibilidade

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 REQUISITOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 - Windows 10 ou 11 (64-bit)
 - Node.js 18 ou superior
 - ~200MB de espaco em disco
 - Internet na primeira instalacao

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
