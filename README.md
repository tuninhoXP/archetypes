# ArcheTypos — Exame Junguiano dos Doze Arquétipos

Site 100% estático em **HTML, CSS e JavaScript puro** — sem build, sem
Node, sem dependências. Basta arrastar os arquivos para o GitHub e ativar
o Pages.

## Estrutura

```
index.html          → página única, carrega os scripts em ordem
style.css            → tema visual medieval (pergaminho, fontes góticas)
js/
  archetypes.js      → definição dos 12 arquétipos e análise técnica
  questions.js        → banco de 108 afirmações Likert
  scoring.js          → cálculo de pontuação e dominante/secundário
  storage.js          → persistência via localStorage
  icons.js            → ícones SVG originais (estilo xilogravura)
  ui-intro.js          → tela inicial
  ui-quiz.js           → tela do questionário
  ui-result.js         → tela de resultado
  main.js              → orquestrador das telas (carregar por último)
```

Nenhum arquivo usa `import`/`export` — tudo é carregado via `<script>`
normal no `index.html`, na ordem certa, e as funções ficam disponíveis
globalmente no navegador.

## Testar localmente

Não precisa de servidor, mas alguns navegadores bloqueiam `fetch` local —
para evitar qualquer problema, sirva com um servidor simples:

```bash
python3 -m http.server 8000
```

Depois abra `http://localhost:8000` no navegador.

Ou simplesmente abra o `index.html` direto (duplo clique) — como não há
`fetch` nem módulos ES, funciona também abrindo o arquivo diretamente
(`file://`).

## Publicar no GitHub Pages (sem terminal)

1. Crie um repositório novo no GitHub, ex: `ArcheTypos` (público)
2. Na página do repositório, clique em **"uploading an existing file"**
3. Arraste todo o **conteúdo** desta pasta (o `index.html`, o `style.css`
   e a pasta `js/`) para a área de upload
4. Escreva uma mensagem de commit e clique em **Commit changes**
5. Vá em **Settings → Pages** → em "Build and deployment", escolha
   **Source: Deploy from a branch** → branch `main`, pasta `/ (root)`
6. Em alguns minutos o site estará em:
   `https://SEU_USUARIO.github.io/ArcheTypos/`

Como agora é só HTML/CSS/JS estático puro, **não precisa de GitHub
Actions nem de build** — o Pages serve os arquivos diretamente.

## Aviso

Este exame é uma ferramenta de autorreflexão baseada em tipologia
junguiana e não constitui diagnóstico psiquiátrico ou psicológico.
