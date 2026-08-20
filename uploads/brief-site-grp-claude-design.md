# Brief de construção — Site GRP
### Documento definitivo para o Claude Design

> **Como usar:** cole este documento inteiro no Claude Design. Ele contém a arquitetura, a direção visual, os componentes e **todo o texto final já escrito**. Não invente copy, não invente números, não invente depoimentos. Se algo estiver marcado `[A DEFINIR]`, deixe o espaço reservado visível no design, não preencha com texto fictício.

---

## PARTE 0 — Reconciliação dos dois planejamentos

Este brief funde dois documentos anteriores. O que foi mantido de cada um:

| Tema | Documento estratégico (PGRPS) | Documento operacional (GRP) | **Decisão final** |
|---|---|---|---|
| Nome público | PGRPS | GRP | **GRP** como marca pública (ver decisão D1) |
| Escopo | 9 páginas | 1 página institucional | **Home longa + 3 páginas na Entrega 1**, 4 na Entrega 2 |
| Arquitetura técnica | não tratada | 3 domínios separados | **Mantida integralmente** — é a melhor contribuição do doc operacional |
| Público | empresas + consultorias de SST (canal prioritário) | empresas, RH, SST | **Os dois, com página separada para consultoria** |
| Anonimato | seção técnica extensa | seção importante, mas ainda indefinida tecnicamente | **Página própria, com linguagem calibrada** ao que já está definido |
| Promessas | lista de frases proibidas | "evitar promessas absolutas" | **Convergem — regra mantida e reforçada** |
| Como funciona | 9 etapas | 6 etapas | **4 passos na home, 6 etapas na página interna** |
| Imagens | screenshots reais do produto | fotos de pessoas e ambiente de trabalho | **Screenshots reais.** Foto de banco de imagens está proibida (ver regra R4) |
| Contato | formulário de 7 campos qualificadores | formulário de 7 campos + WhatsApp | **Fundidos** — campos do estratégico + WhatsApp do operacional |
| Ordem de execução | por prioridade de funil | conteúdo → protótipo → aprovação → dev | **Fluxo do operacional, prioridade do estratégico** |

---

## PARTE 1 — Decisões que precisam de aprovação humana

Não são tarefas do Claude Design. São aprovações da equipe. O design pode avançar assumindo as recomendações abaixo.

**D1 — Nome público: GRP.**
Recomendação: adotar **GRP** no site público e manter *PGRPS* como nome interno do sistema. Motivo: GRP é mais curto, pronunciável e cabe em logo — e a logo já existe.
⚠️ **Risco a considerar antes de fechar:** no vocabulário de SST já existem **GRO** e **PGR**. "GRP" fica a uma letra de distância dos dois e será lido por muita gente como erro de digitação. Se a equipe quiser eliminar o risco, a alternativa é usar a sigla sempre acompanhada: **"GRP — Gestão de Riscos Psicossociais"** no logotipo e na primeira menção de cada página. **É esta a forma adotada neste brief.**

**D2 — Faixa de preço.** Sem preço nenhum o site perde para concorrentes que publicam valor por licença. Até a equipe decidir, a página de Planos **não entra** e o site vai ao ar sem ela. Não criar página de preço vazia.

**D3 — Marca própria para consultorias (white label).** Existe? Em que prazo? A página de consultorias tem um bloco reservado para isso.

**D4 — Funcionamento técnico do anonimato.** Enquanto a equipe não fechar (valor do N mínimo, separação código/resposta, retenção), a página de Confidencialidade usa a redação calibrada da Parte 5.3 — que descreve mecanismos sem prometer garantia absoluta.

**D5 — Instrumentos.** Não citar nome de questionário (COPSOQ, HSE, etc.) em nenhum lugar do site até parecer jurídico sobre licenciamento. O texto deste brief já evita todos.

---

## PARTE 2 — Arquitetura

Três frentes com endereços separados:

```
www.[dominio].com.br        Site institucional      ← ESTE BRIEF
app.[dominio].com.br        Plataforma (login)      ← fora de escopo
responder.[dominio].com.br  Questionário anônimo    ← fora de escopo, mas ver regra R6
```

**Escopo desta entrega: apenas o site institucional.**

### Sitemap

**Entrega 1 — o que o Claude Design constrói agora**
```
/                        Home (página longa e completa)
/confidencialidade       Confidencialidade e anonimato
/demonstracao            Solicitar demonstração
/legal/privacidade       Política de Privacidade      [estrutura vazia, texto jurídico depois]
/legal/termos            Termos de Uso                [estrutura vazia]
```

**Entrega 2 — depois da aprovação da Entrega 1**
```
/como-funciona           As 6 etapas em detalhe
/para-consultorias       Consultorias e clínicas de SST
/para-empresas           Empresas
/quem-somos              Quem está por trás do GRP
```

### Menu (desktop)
`O GRP` (âncora na home) · `Como funciona` · `Para empresas` · `Para consultorias` · `Confidencialidade` · `Dúvidas` (âncora) · **[Solicitar demonstração]** (botão) · `Entrar` (texto discreto, link para o app)

Na Entrega 1, os itens que ainda não têm página viram âncoras para as seções correspondentes da home.

### Menu (mobile)
Ícone hambúrguer → painel lateral deslizante da direita. Lista vertical com os mesmos itens, botão de demonstração fixo no rodapé do painel, largura total. `Entrar` por último, com peso visual menor.

---

## PARTE 3 — Direção visual

### Princípio
Este é um produto que lida com saúde mental no trabalho e com dado sensível. O design precisa transmitir **discrição institucional**, não entusiasmo. Referência de tom: relatório técnico bem diagramado. Referência que **não** deve ser seguida: plataforma de bem-estar corporativo, com ilustrações coloridas de pessoas sorrindo.

### Tokens

```css
/* Cores — substituir por extração da logo real quando ela estiver disponível.
   Defaults sugeridos: base fria e sóbria, um único acento. */
--cor-fundo:            #FBFBFA;   /* off-white levemente quente */
--cor-fundo-alt:        #F2F4F5;   /* faixas alternadas de seção */
--cor-superficie:       #FFFFFF;   /* cards */
--cor-tinta:            #16232B;   /* texto principal, quase preto azulado */
--cor-tinta-suave:      #5A6B74;   /* texto secundário */
--cor-marca:            #16505C;   /* petróleo escuro — cor institucional */
--cor-marca-clara:      #E4EDEE;   /* fundo de destaque, badges */
--cor-acento:           #C2703D;   /* terracota — usar SÓ em CTA e detalhes */
--cor-borda:            #DFE4E6;

/* Tipografia */
--fonte-titulo:  'Instrument Serif', Georgia, serif;   /* apenas H1 e H2 */
--fonte-texto:   'Inter', system-ui, sans-serif;        /* todo o resto */

--t-h1: clamp(2.2rem, 5vw, 3.4rem);   line-height: 1.1;
--t-h2: clamp(1.7rem, 3.5vw, 2.4rem); line-height: 1.15;
--t-h3: 1.25rem;  font-weight: 600;
--t-corpo: 1.0625rem;  line-height: 1.65;   /* 17px — o doc operacional pediu texto grande */
--t-apoio: 0.9375rem;  line-height: 1.55;

/* Espaço */
--largura-max: 1180px;
--largura-texto: 68ch;     /* nenhum parágrafo mais largo que isso */
--pad-secao: clamp(4rem, 9vw, 7rem);
--raio: 10px;
--sombra-card: 0 1px 2px rgba(22,35,43,.05), 0 8px 24px rgba(22,35,43,.06);
```

### Regras rígidas

- **R1 — Um acento só.** Terracota aparece no botão primário, em ícones pontuais e em nada mais. Sem gradiente, sem seção colorida inteira.
- **R2 — Ritmo de fundo.** Alternar `--cor-fundo` e `--cor-fundo-alt` entre seções. Nunca duas seções escuras seguidas. Uma única seção pode usar `--cor-marca` como fundo escuro: a do CTA final.
- **R3 — Sem ícone genérico decorativo.** Ícone só quando substitui informação (etapa numerada, item de lista técnica). Traço fino, monocromático, nunca colorido nem em cartelinha arredondada.
- **R4 — Proibido banco de imagens.** Nada de foto de equipe em reunião, aperto de mão, pessoa pensativa na janela. As únicas imagens permitidas são **screenshots reais do produto** e, na Entrega 2, foto real da equipe. Onde o screenshot ainda não existe, usar um **placeholder claramente marcado** — retângulo com borda tracejada e o texto do que vai ali. Não desenhar mockups falsos de interface.
- **R5 — Nenhum número inventado.** Nada de "500 empresas", "98% de satisfação", "+10.000 avaliações". Nenhum depoimento fictício. Onde houver espaço para prova, usar o bloco Programa Piloto (Parte 5.1, seção 8).
- **R6 — Sem barreira no `responder`.** Se o design mostrar em algum lugar como o trabalhador acessa, deixar claro que não há login, cadastro nem instalação de aplicativo.
- **R7 — Acessibilidade não é opcional.** Contraste mínimo 4.5:1 em texto; foco visível em todos os interativos; área de toque mínima de 44×44px; formulário com `label` real (não placeholder como rótulo); hierarquia de heading sem pular nível. O público inclui trabalhadores de todos os níveis de escolaridade e faixas etárias.
- **R8 — Mobile primeiro.** Boa parte dos gestores vai abrir isso no celular. Nenhuma tabela horizontal em mobile — vira lista de cartões empilhados.

---

## PARTE 4 — Componentes a construir

1. **Cabeçalho** — fixo no topo com fundo sólido após 40px de rolagem; logo à esquerda, menu ao centro, botão + Entrar à direita.
2. **Botão** — `primário` (fundo acento, texto claro), `secundário` (borda `--cor-marca`, fundo transparente), `texto` (só sublinhado no hover).
3. **Cartão de etapa** — número grande em `--cor-marca-clara`, título, uma linha de descrição.
4. **Cartão de pilar** — título, parágrafo curto, slot para screenshot.
5. **Bifurcação de perfil** — dois cartões grandes lado a lado (empilham em mobile), cada um com título, uma linha e link.
6. **Acordeão de FAQ** — fechado por padrão, um aberto por vez, `<details>` nativo ou equivalente acessível.
7. **Faixa de garantias** — linha horizontal de 4 itens curtos separados por ponto médio; em mobile vira grade 2×2.
8. **Formulário de demonstração** — ver Parte 5.4.
9. **Bloco CTA final** — fundo `--cor-marca`, texto claro, botão acento.
10. **Rodapé** — 4 colunas (Produto / Empresa / Legal / Contato), CNPJ e endereço reais `[A DEFINIR]`, sem newsletter.
11. **Placeholder de screenshot** — componente reutilizável: retângulo `--raio`, borda tracejada `--cor-borda`, fundo `--cor-fundo-alt`, texto centralizado em `--cor-tinta-suave` descrevendo a tela que entra ali.

---

## PARTE 5 — Páginas, com texto final

### 5.1 — Home

Seções na ordem exata abaixo.

---

**SEÇÃO 1 — Abertura**

> # O questionário é o começo. A evidência é o que fica.
>
> O GRP — Gestão de Riscos Psicossociais — organiza campanhas de avaliação, análise dos resultados, planos de ação e acompanhamento das medidas em um processo documentado, para empresas e consultorias de saúde e segurança do trabalho.
>
> **[Solicitar demonstração]** · [Ver como funciona]

Faixa de garantias logo abaixo:
> Sem cadastro nominal dos respondentes · Resultados apresentados de forma coletiva · Ambientes separados por empresa · Decisão técnica registrada

À direita (ou abaixo, em mobile): placeholder de screenshot — *"Painel de resultados coletivos da campanha"*.

---

**SEÇÃO 2 — Bifurcação de perfil**

Dois cartões:

> **Sou consultoria ou clínica de SST**
> Preciso entregar avaliação psicossocial para vários clientes sem refazer o processo em cada um.
> [Ver como funciona para consultorias →]

> **Sou a empresa**
> Preciso organizar, documentar e acompanhar o processo psicossocial na minha operação.
> [Ver como funciona para empresas →]

Na Entrega 1 os dois links levam a âncoras da própria home.

---

**SEÇÃO 3 — O problema**

> ## Diagnóstico feito. E a evidência?
>
> Desde 26 de maio de 2026 a fiscalização da NR-1 deixou de ser orientativa. O que se cobra não é o questionário — é o processo que veio depois dele.

Quatro itens, cada um com ícone de traço fino:
> **O relatório parou no PDF.** A avaliação foi feita, o arquivo foi arquivado e nada foi para o inventário de riscos.
> **A medida foi tomada, mas não registrada.** Não há quem decidiu, quando, com que prazo, nem comprovação de que foi executada.
> **Não há como comparar.** Sem o ciclo anterior estruturado, não se demonstra se a medida funcionou.
> **A informação está espalhada.** Planilha, e-mail, formulário e documento solto, cada um com uma versão diferente.

---

**SEÇÃO 4 — Como funciona, em 4 passos**

> ## Do levantamento ao acompanhamento, em um só lugar.

Quatro cartões de etapa, cada um com placeholder de screenshot:

> **1. Estruturar** — Cadastre a empresa, as unidades, os setores e os grupos de análise. É a base que garante resultado útil e proteção dos participantes.
> **2. Coletar** — Distribua o acesso por QR Code, link ou código. O trabalhador responde sem login, sem cadastro e sem instalar nada.
> **3. Analisar** — Os resultados são consolidados de forma coletiva e submetidos à avaliação do profissional responsável.
> **4. Agir e acompanhar** — Inventário, plano de ação com responsável e prazo, evidências anexadas e comparação com o ciclo seguinte.

Link ao final: `Ver as 6 etapas completas →`

---

**SEÇÃO 5 — Os três pilares**

> ## Três coisas que decidem se a avaliação vale alguma coisa.

Três cartões de pilar, um por linha em desktop, alternando o lado do screenshot:

> ### Processo, não pesquisa
> Aplicar o questionário é uma etapa. O que sustenta o gerenciamento é o que vem depois: inventário de riscos, plano de ação com responsável e prazo, evidência do que foi executado e reavaliação no ciclo seguinte. O GRP foi construído em torno dessa sequência inteira.
> *Placeholder: "Inventário de riscos e plano de ação com responsáveis e prazos"*

> ### Confidencialidade construída no sistema
> Não há cadastro nominal dos respondentes. O acesso é feito por código, e os resultados são apresentados de forma coletiva. Grupos pequenos demais não geram resultado separado, justamente para que ninguém seja identificado por eliminação.
> *Placeholder: "Tela do respondente — acesso por código, sem login"*

> ### A decisão continua sendo do profissional
> O sistema organiza os dados, calcula os indicadores e monta os documentos. A classificação do risco e a aprovação final passam por profissional habilitado, com registro de quem aprovou, o que aprovou e quando.
> *Placeholder: "Fluxo de aprovação com histórico de alterações"*

---

**SEÇÃO 6 — Comparativo**

> ## Planilha resolve uma vez. Processo resolve todo ano.

Tabela de 4 linhas (em mobile, dois cartões empilhados):

| | Planilha e PDF avulso | Com o GRP |
|---|---|---|
| A cada novo ciclo | Refaz tudo do zero | Reaproveita a estrutura e compara com o anterior |
| Quem aprovou o quê | Depende da memória de alguém | Registrado com autor e data |
| Evidência da ação | Solta em e-mail e pasta de rede | Anexada à ação correspondente |
| Vários clientes ou unidades | Uma pasta por cliente | Ambientes separados no mesmo painel |

---

**SEÇÃO 7 — Para quem é**

> ## Para empresas
> Organizar a campanha, enxergar os riscos de forma consolidada, registrar as decisões e acompanhar as melhorias ao longo do tempo — com histórico de todas as avaliações.
> [Ver a página para empresas →]

> ## Para consultorias e clínicas de SST
> Conduzir campanhas de vários clientes em ambientes separados, com equipe, permissões e documentos padronizados — e transformar uma entrega pontual em acompanhamento contínuo.
> [Ver a página para consultorias →]

---

**SEÇÃO 8 — Programa Piloto**

> ## Programa Piloto
>
> O GRP está em fase de implantação assistida com um número limitado de organizações. Quem entra agora recebe acompanhamento direto da equipe de produto em todo o primeiro ciclo, condição especial de lançamento e influência sobre as prioridades do roadmap.
>
> **[Quero participar do piloto]**

Este bloco ocupa o lugar onde normalmente ficariam depoimentos e números de clientes. **É deliberado.** Não substituir por prova social inventada.

---

**SEÇÃO 9 — Dúvidas frequentes**

Acordeão, oito perguntas:

> **O que são riscos psicossociais?**
> São fatores ligados à organização do trabalho — carga, ritmo, autonomia, clareza de papéis, relações e condutas no ambiente — capazes de afetar a saúde do trabalhador. A NR-1 passou a exigir que sejam identificados, avaliados e gerenciados junto com os demais riscos ocupacionais.

> **O GRP garante conformidade com a NR-1?**
> Não, e desconfie de quem garantir. O que o GRP faz é organizar e documentar o processo, gerando os insumos para o GRO/PGR. A conformidade depende das medidas que a organização efetivamente adota e da avaliação do profissional responsável.

> **A empresa consegue ver quem respondeu o quê?**
> Não. Não existe cadastro nominal de respondentes e os resultados são apresentados de forma coletiva. A plataforma não foi construída para devolver resposta individual.

> **O que acontece quando o grupo é muito pequeno?**
> Grupos abaixo do tamanho mínimo definido não geram resultado separado — os dados são agregados em um nível acima da estrutura. É o que impede que alguém seja identificado por eliminação em uma equipe de poucas pessoas.

> **Como os trabalhadores acessam o questionário?**
> Por QR Code, link ou código de campanha. Não há login, não há cadastro e não é preciso instalar nenhum programa. Funciona no navegador do celular.

> **O sistema substitui o responsável técnico?**
> Não. O GRP organiza os dados e monta os documentos; a classificação do risco e a aprovação final permanecem com o profissional habilitado, que fica registrado no sistema.

> **O GRP gera relatórios e plano de ação?**
> Sim: relatório coletivo, inventário de riscos psicossociais, plano de ação com responsáveis e prazos, e o histórico de evidências e acompanhamento de cada campanha.

> **Como solicito uma demonstração?**
> Pelo formulário desta página. A equipe retorna em até um dia útil e a demonstração é feita em um ambiente com dados fictícios, sem compromisso.

---

**SEÇÃO 10 — CTA final** *(fundo `--cor-marca`)*

> ## Transforme informações dispersas em um processo organizado, documentado e tecnicamente validável.
>
> **[Solicitar demonstração]** · [Falar no WhatsApp]

---

### 5.2 — Metadados da home

**Title:** GRP — Gestão de Riscos Psicossociais para o GRO/PGR
**Meta description:** Campanhas de avaliação psicossocial, análise coletiva, inventário de riscos e plano de ação com evidências documentadas. Para empresas e consultorias de SST. Solicite uma demonstração.
**Open Graph:** mesma imagem do painel de resultados; sem texto sobreposto ilegível em miniatura.

---

### 5.3 — Página `/confidencialidade`

**Objetivo:** é a página que o RH vai encaminhar para o jurídico e para os próprios trabalhadores. Tom técnico, sem marketing. Layout de uma coluna, largura de texto reduzida, sumário lateral fixo em desktop.

> # Confidencialidade e anonimato
>
> A confiança dos participantes é a condição para que a avaliação represente a realidade da organização. Se o trabalhador não acredita que a resposta é protegida, o resultado não serve para decidir nada. Por isso, a proteção das respostas foi tratada como requisito de projeto, não como configuração.

> ## O que a plataforma não faz
> — Não mantém cadastro nominal dos respondentes.
> — Não apresenta resposta individual a nenhum perfil de usuário, incluindo o administrador da empresa.
> — Não gera resultado separado para grupos abaixo do tamanho mínimo.
> — Não emite diagnóstico clínico e não avalia indivíduos.
> — Não compartilha dados entre empresas diferentes.

> ## Como o acesso funciona
> O participante recebe um código de campanha, por QR Code, link ou papel. Não há login, cadastro, e-mail ou qualquer identificação pessoal solicitada. O código serve para dizer ao sistema **a qual campanha e a qual grupo** aquela resposta pertence — não quem a enviou.

> ## Resultados coletivos e tamanho mínimo
> Os resultados são sempre apresentados de forma agregada. Quando um grupo tem menos participantes do que o mínimo definido para a campanha, o sistema não exibe o resultado daquele grupo isoladamente: os dados são somados a um nível acima da estrutura organizacional. É uma restrição intencional — em equipes pequenas, um recorte detalhado permitiria deduzir quem respondeu o quê.

> ## Separação entre empresas
> Cada organização opera em um ambiente próprio. Consultorias que atendem vários clientes acessam cada um separadamente, sem que dados de um apareçam no outro.

> ## Registro e auditoria
> As ações relevantes ficam registradas: quem acessou, quem classificou o risco, quem aprovou o documento e quando. Esse histórico existe para dar rastreabilidade ao processo — e nunca alcança o conteúdo de uma resposta individual.

> ## Proteção de dados
> `[A DEFINIR — a equipe precisa fechar antes da publicação: prazo de retenção, política de exclusão, papéis de controlador e operador, canal de atendimento ao titular. Deixar esta seção estruturada e vazia, com aviso visível no design de que o texto está pendente.]`

> ## Material para comunicar aos trabalhadores
> Uma campanha bem comunicada tem taxa de resposta maior e resultado mais confiável. Disponibilizamos um modelo de comunicado pronto para a organização adaptar e enviar.
> **[Receber o modelo de comunicado]** — formulário de um campo: e-mail.

> **Nota de honestidade que deve aparecer em destaque na página:**
> Nenhum sistema deve prometer anonimato absoluto. O que descrevemos aqui são os mecanismos concretos que o GRP adota para proteger as respostas e evitar a reidentificação dos participantes.

Essa última caixa é um dos ativos comerciais mais fortes do site. **Não removê-la para deixar o texto mais vendedor.**

---

### 5.4 — Página `/demonstracao`

Layout de duas colunas: formulário à esquerda, o que esperar à direita (empilha em mobile, formulário primeiro).

> # Solicitar demonstração
> Uma conversa de 30 minutos, com o sistema rodando em um ambiente de dados fictícios. Sem compromisso e sem apresentação genérica — mostramos o fluxo que faz sentido para o seu caso.

**Campos — sete, nenhum a mais:**
1. Nome *(texto)*
2. E-mail corporativo *(e-mail)*
3. WhatsApp *(telefone, com máscara)*
4. Empresa *(texto)*
5. **Perfil** *(seleção)* — Consultoria ou clínica de SST · Empresa · Profissional autônomo · Outro
6. **Porte** *(seleção)* — Até 50 trabalhadores · 51 a 200 · 201 a 500 · Mais de 500 · Sou consultoria: informar nº de clientes
7. **Situação atual** *(seleção)* — Ainda não avaliamos riscos psicossociais · Aplicamos um questionário e paramos por ali · Já temos um processo e queremos organizar · Estamos comparando fornecedores

Botão: **Solicitar demonstração**. Abaixo, em texto de apoio: *Seus dados são usados apenas para este contato comercial.*

Coluna da direita:
> **O que acontece depois**
> 1. Retornamos em até 1 dia útil.
> 2. Conversa de 30 minutos para entender o cenário.
> 3. Demonstração no ambiente com dados fictícios.
> 4. Proposta em até 2 dias úteis, se fizer sentido.
>
> **Prefere conversar direto?**
> [WhatsApp] · `[A DEFINIR: telefone]` · `[A DEFINIR: e-mail]`

**Estado de sucesso:** substituir o formulário por confirmação na mesma página (não redirecionar para página em branco). Texto: *Recebemos sua solicitação. Retornamos em até um dia útil no e-mail e no WhatsApp informados.*
**Estados de erro:** validação inline por campo, mensagem abaixo do campo, nunca alerta do navegador.

---

### 5.5 — Páginas legais (Entrega 1, só estrutura)

Layout de artigo, uma coluna, sumário lateral, data de última atualização no topo. Conteúdo jurídico entra depois — o design entrega o gabarito com títulos de seção e um aviso visível de conteúdo pendente.

---

## PARTE 6 — Entrega 2 (não construir agora)

Especificação resumida, para o design já nascer compatível:

- **`/como-funciona`** — as 6 etapas em detalhe (cadastro da empresa e estrutura → criação da campanha → distribuição do acesso → preenchimento → consolidação e análise → plano de ação e acompanhamento), cada uma com o que o usuário faz, o que o sistema faz, o que sai dali e um screenshot. Fecha com o bloco **"O que o GRP não faz"** — mesma função de credibilidade da caixa de honestidade da página de confidencialidade.
- **`/para-consultorias`** — página de maior valor comercial do site. Hero sobre atender a carteira inteira, painel multiempresa, bloco de marca própria (depende da decisão D3), responsabilidade técnica, recorrência, empresas pequenas na carteira, coexistência com o sistema de SST que ela já usa, FAQ próprio.
- **`/para-empresas`** — o que a NR-1 pede sem alarmismo, 4 passos, taxa de resposta e comunicação interna, o que fica documentado, múltiplas unidades, "já aplicamos questionário no ano passado", quem faz a avaliação técnica.
- **`/quem-somos`** — quem está por trás do produto, com dados institucionais reais, equipe com nomes e funções, e por que uma empresa de infraestrutura de TI construiu uma plataforma de dado sensível. Foto real ou nenhuma foto.

---

## PARTE 7 — Vocabulário

**Usar:** GRO, PGR, inventário de riscos, plano de ação, evidência, fiscalização, responsável técnico, campanha, ciclo, grupo de análise, resultado coletivo.

**Não usar em nenhuma hipótese:**
"conformidade garantida" · "segurança jurídica total" · "anonimato absoluto" ou "100% anônimo" · "laudo automático" · "diagnóstico da saúde mental dos funcionários" · "substitui o responsável técnico" · "basta aplicar o questionário" · "solução completa para a NR-1".

**Evitar por desalinhamento de público:** engajamento, wellbeing, jornada do colaborador, cultura organizacional, people analytics, felicidade no trabalho. São palavras de plataforma de bem-estar; o comprador de SST as lê como sinal de que o produto não é técnico.

---

## PARTE 8 — Checklist de aceite

O design está pronto quando:

- [ ] Nenhum número, depoimento, logo de cliente ou screenshot fictício aparece em lugar nenhum
- [ ] Todo placeholder de imagem está visivelmente marcado como pendente
- [ ] Nenhuma frase da lista proibida da Parte 7 aparece no site
- [ ] A caixa de honestidade sobre anonimato está presente e legível
- [ ] Todas as páginas terminam em chamada para ação
- [ ] O formulário tem exatamente sete campos e os três seletivos de qualificação
- [ ] O WhatsApp aparece na home e na página de demonstração
- [ ] Menu mobile funciona e o botão de demonstração é alcançável com o polegar
- [ ] Tabela do comparativo vira cartões em telas estreitas
- [ ] Contraste verificado; navegação por teclado completa; foco sempre visível
- [ ] Title e meta description da home preenchidos conforme 5.2
- [ ] Seções `[A DEFINIR]` continuam vazias e sinalizadas — não preenchidas com texto de exemplo
