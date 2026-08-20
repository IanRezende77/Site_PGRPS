# Instruções para o Claude Design — Site GRP (revisão)

Você tem dois protótipos deste site: o **Site A** (serifado, paleta petróleo/terracota, home de 10 seções) e o **Site B** (azul, sans-serif Plus Jakarta, home enxuta de 5 seções). 

**Parta do Site A como base** — ele tem a estrutura argumentativa completa. Aplique as mudanças abaixo. Não crie tela de login: este é o site de apresentação, não o sistema. O botão "Entrar" é apenas um link externo.

Mantenha todas as regras já seguidas: nenhum número, depoimento ou logo de cliente inventado; caixa de honestidade sobre anonimato preservada; placeholders de screenshot marcados; nenhuma frase de promessa proibida ("conformidade garantida", "anonimato absoluto", "laudo automático", "substitui o responsável técnico").

---

## 1. Absorver o acabamento visual do Site B no hero

No hero da home do Site A, aplique o tratamento do Site B, mantendo a tipografia e as cores do A:
- Adicione o selo/eyebrow acima do título: **"NR-1 · GRO / PGR"**, em caixa alta, com um ponto colorido antes.
- No título, destaque a segunda frase ("A evidência é o que fica.") na cor de marca, para criar contraste dentro do H1.
- Use o símbolo de logo real no cabeçalho (arquivo `grp-logo-symbol.png`), não apenas o texto "GRP".

## 2. Corrigir o link quebrado

Na seção "Como funciona", o link diz "Ver as 6 etapas completas →" mas a home mostra 4 passos. Troque o texto para **"Ver as 6 etapas completas →"** apontando para a futura página `/como-funciona`, OU, se essa página ainda não existe, para **"Ver o processo completo →"**. Não deixe o número do link divergir do que está na tela.

## 3. Fixar o N mínimo em 10 (página Confidencialidade)

Onde o texto fala em "tamanho mínimo" de forma genérica, substitua pelo número concreto:

> Os resultados são sempre apresentados de forma agregada. Quando um grupo tem menos de **10 participantes**, o sistema não exibe o resultado daquele grupo isoladamente — os dados são somados a um nível acima da estrutura organizacional. Esse mínimo pode ser elevado pela organização, nunca reduzido.

## 4. Adicionar supressão secundária e bloqueio de filtros (Confidencialidade)

Depois do parágrafo sobre tamanho mínimo, acrescente:

> **Proteção contra reidentificação por cruzamento.** Além do grupo mínimo, o GRP bloqueia combinações de filtros que, somadas, permitiriam deduzir quem respondeu. Um relatório que revelaria um respondente por eliminação não é publicado.

## 5. Adicionar a coleta física por urna (Confidencialidade e FAQ)

Acrescente uma subseção na página de Confidencialidade:

> **Coleta sem rastro digital.** A campanha usa documentos impressos, cada um com um código único e um QR Code. Os documentos são distribuídos de forma aleatória, em urna ou caixa, sob supervisão da representação prevista na NR-5. O trabalhador responde sem login e sem identificação — não existe vínculo entre a pessoa e a resposta.

## 6. Atualizar o pilar "a decisão é do responsável técnico" (home)

Substitua o texto do terceiro pilar por:

> ### A decisão continua sendo do profissional
> O sistema organiza os dados, calcula os indicadores e monta os documentos. A classificação do risco, o inventário e o plano de ação passam por **assinatura eletrônica do responsável técnico** — e, uma vez aprovada, a base fica bloqueada, com registro de quem assinou e quando.

## 7. Adicionar a seção "Mais que um questionário" (home)

Insira uma nova seção **entre "Os três pilares" e o "Comparativo"**. Três cartões, sem screenshot, ícone de traço fino em cada:

> ## Mais que um questionário
>
> **Camada qualitativa** — Registre entrevistas, observações de campo e documentos como evidência, ligados a cada risco. O que a NR-1 pede não cabe só num formulário.
>
> **Inventário estruturado** — Os achados viram perigos, grupos expostos, controles, severidade e probabilidade — prontos para o AEP, o GRO e o PGR.
>
> **Ciclo de eficácia** — Cada ação tem baseline, evidência, revisão e reavaliação. O próximo ciclo mostra, com número, se a medida funcionou.

## 8. Expandir o FAQ da home

O Site A tem 8 perguntas. Acrescente estas quatro:

> **Qual é o tamanho mínimo de grupo?**
> Dez participantes. Abaixo disso, os dados são agregados em um nível acima da estrutura, para que ninguém seja identificado por eliminação.

> **Como é feita a coleta?**
> Por documento impresso com código e QR Code, distribuído de forma aleatória em urna sob supervisão da representação da NR-5. Sem login e sem identificação pessoal.

> **O GRP garante conformidade com a NR-1?**
> Não — a utilização do sistema não garante, por si só, conformidade integral. O GRP organiza e documenta o processo e gera os insumos para o GRO/PGR; a conformidade depende das medidas adotadas e da avaliação do responsável técnico.

> **O que o GRP não faz?**
> Não faz diagnóstico clínico ou psicológico individual, não gera ranking ou perfil de trabalhador, não guarda cadastro nominal dos respondentes e não substitui o responsável técnico.

## 9. Botão "Entrar"

No cabeçalho, o link "Entrar" (ou "Acessar plataforma") deve apontar para `https://app.[dominio].com.br` como link externo. Se esse endereço ainda não existe, deixe o link como `#` com um `title="Em breve"` — não construa nenhuma tela de login dentro deste site.

---

**Não altere:** a página de demonstração (formulário de 7 campos está correto), a estrutura das páginas legais, os placeholders `[A DEFINIR]`, nem a caixa de honestidade sobre anonimato.
