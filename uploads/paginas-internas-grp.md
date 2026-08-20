# Instruções para o Claude Design — Páginas internas do GRP (Entrega 2)

## PARTE 0 — Correções da reunião de 21/07/2026 (aplicar antes do resto)

A equipe fechou decisões que corrigem trechos já escritos neste documento e no site já publicado. Aplique estas correções primeiro.

### 0.1 — Correção: anonimato tem dois modos, não um

Em todo lugar do site (Confidencialidade, e a etapa 3 de "Como funciona" mais abaixo) o texto descrevia só a coleta física por urna. **Isso está incompleto.** A decisão oficial é: o sistema oferece **anonimato digital** e **anonimato analógico**, a escolha é feita por campanha e fica registrada nela. Os dois processos precisam estar explicados no site.

**Na página `Confidencialidade.dc.html` já publicada**, localize a seção "Coleta sem rastro digital" e substitua por duas subseções lado a lado ou empilhadas:

> ## Dois modos de coleta, a critério de cada campanha
> A empresa escolhe, campanha a campanha, como o acesso é distribuído. Os dois modos seguem o mesmo princípio: nenhum vínculo entre a pessoa e a resposta.
>
> **Anonimato analógico.** A campanha usa documentos impressos, cada um com um código único e um QR Code. Os documentos são distribuídos de forma aleatória, em urna ou caixa, sob supervisão da representação prevista na NR-5. O trabalhador responde sem login e sem identificação.
>
> **Anonimato digital.** O acesso é distribuído por link ou código individual, sem cadastro nem e-mail vinculado à resposta. O trabalhador acessa pelo navegador do próprio celular ou computador, sem instalar nada.
>
> Nos dois casos, o código diz ao sistema apenas a qual campanha e a qual grupo aquela resposta pertence — nunca quem a enviou.

### 0.2 — Correção: precisão do GHE-PS

O texto sobre GHE-PS usado neste documento (etapa 1 de "Como funciona") era genérico. A definição oficial, mais forte para o site porque mostra um controle automático e duplo:

> O sistema cria o GHE-PS **automaticamente antes da campanha**, agrupando por cargo, setor e unidade, sempre com o mínimo de 10 pessoas — essa definição é submetida à aprovação do Responsável Técnico. Depois da coleta, o sistema **atualiza o GHE-PS automaticamente** com base nas respostas realmente recebidas, mantendo o mínimo de 10 e submetendo a nova definição a uma segunda aprovação do Responsável Técnico. É esse recorte, já aprovado duas vezes, que sustenta o acompanhamento da taxa de resposta durante a campanha e a emissão do Inventário de Risco Psicossocial ao final.

Use este texto para **substituir** o parágrafo da etapa 1 em "Como funciona" (Parte 1 deste documento, mais abaixo).

### 0.3 — Correção: os questionários podem ser nomeados

Este documento e o brief anterior recomendavam **não citar nomes de instrumento** até haver parecer jurídico sobre licenciamento (o caso do COPSOQ é CC BY-NC-ND). A reunião de 21/07 decidiu diferente: **o site deve apresentar os tipos de questionário oferecidos aos clientes**, explicitamente:

> COPSOQ II ou III (versões Short, Middle ou Long) · FPSICO · JSS · HSE · questionário próprio do GRP · questionário do cliente

Siga esta decisão — ela substitui a cautela anterior. Adicione esta lista na nova página de Produtos (Parte 4 deste documento) e, se fizer sentido, também como uma linha curta na etapa 2 de "Como funciona".

> **Um ponto de atenção que continua valendo, mas não bloqueia mais a publicação:** o COPSOQ II-Br tem licença de uso não comercial (CC BY-NC-ND). Vale confirmar com o jurídico se citar o nome do instrumento como opção dentro do produto está coberto por essa licença ou se precisa de autorização adicional — isso é atividade paralela, não trava a publicação desta lista no site.

### 0.4 — Novidade: 4 modalidades de contratação (não é a página de Planos)

A reunião definiu os produtos que o GRP vende, em formato de **modalidade de serviço**, não de preço. Isso é diferente do Bloco 1 (faixa de valor), que segue em aberto — mas o *modelo* já pode ir para o site. Construa a nova página **Produtos** (Parte 4, abaixo) com isso, e referencie-a a partir de "Para empresas" e "Para consultorias".

### 0.5 — Tarefa futura, não construir agora

A ata registra que, depois do site estruturado, alguém da equipe deve comparar o site do GRP com o de cada concorrente, item a item, para achar lacunas e diferenças de apresentação. **Isso é tarefa de revisão humana, não do Claude Design** — anotar como próximo passo depois que as páginas desta entrega estiverem no ar.

---

Você já tem o site do GRP montado (Home, Confidencialidade, Demonstração, páginas legais). Agora construa **três páginas novas** que hoje só existem como âncoras no menu: **Como funciona**, **Para empresas** e **Para consultorias**.

**Regras que valem para as três páginas (idênticas ao resto do site):**
- Cabeçalho: importe o mesmo componente `Header` já existente.
- Fontes: títulos em `Instrument Serif` (peso 400); todo o resto em `Inter`.
- Cores: fundo `#FBFBFA`; fundo alternado de seção `#F2F4F5`; cards `#FFFFFF`; texto principal `#16232B`; texto secundário `#5A6B74`; marca `#16505C`; destaque/fundo suave `#E4EDEE`; acento (só em CTA) `#C2703D`; borda `#DFE4E6`.
- Largura máxima do conteúdo 1180px; largura de texto no máximo 68ch; corpo 1.0625rem com entrelinha 1.65.
- Alternar fundo claro e `#F2F4F5` entre seções; nunca duas seções escuras seguidas.
- Onde pedir imagem do sistema, usar o componente `PlaceholderScreenshot` já existente, com a legenda indicada — **não** desenhar telas falsas.
- Toda página termina no mesmo bloco de CTA final da home (fundo `#16505C`), com os botões "Solicitar demonstração" e "Falar no WhatsApp".
- Nenhum número, depoimento ou logo de cliente inventado. Nenhuma frase de promessa proibida ("conformidade garantida", "anonimato absoluto", "laudo automático", "substitui o responsável técnico").
- Atualizar o menu do `Header`: os itens "Como funciona", "Para empresas" e "Para consultorias" devem apontar para as novas páginas (`ComoFunciona.dc.html`, `ParaEmpresas.dc.html`, `ParaConsultorias.dc.html`), não mais para as âncoras `Home.dc.html#...`.

---

# PÁGINA 1 — Como funciona
`ComoFunciona.dc.html` · `<title>Como funciona o GRP — do levantamento ao acompanhamento</title>`

Layout: hero curto + as 6 etapas em blocos alternados (texto de um lado, PlaceholderScreenshot do outro, invertendo o lado a cada etapa) + bloco de entregáveis + bloco "o que o GRP não faz" + CTA final.

## Hero
> **Eyebrow:** COMO FUNCIONA
> # Do levantamento ao acompanhamento, em um processo só.
> O GRP conduz as seis etapas do gerenciamento de riscos psicossociais — da estrutura organizacional à reavaliação de eficácia — mantendo cada decisão registrada e cada resultado protegido.

## As 6 etapas
Cada etapa é um bloco com: número grande em `#16505C`, título, o parágrafo, uma linha "**O que sai daqui:**" em destaque, e um PlaceholderScreenshot ao lado.

**1. Estrutura organizacional**
Importe as unidades, os setores e os quantitativos de trabalhadores — sem base nominal. O sistema cria o GHE-PS automaticamente antes da campanha, agrupando por cargo, setor e unidade, sempre com o mínimo de 10 pessoas — submetido à aprovação do Responsável Técnico.
*O que sai daqui:* a estrutura de grupos pronta para a campanha, já aprovada e validada contra grupos pequenos demais.
*Placeholder:* "Estrutura organizacional e grupos de análise (GHE-PS)"

**2. Planejamento da campanha**
Defina o instrumento, o período e os grupos que participam. O GRP trabalha com questionários validados — COPSOQ II/III, FPSICO, JSS, HSE — com o instrumento próprio do GRP ou com um questionário do cliente. O responsável técnico parametriza as regras de cálculo, que ficam versionadas — cada campanha guarda exatamente com que critério foi avaliada.
*O que sai daqui:* uma campanha configurada, com método e período definidos.
*Placeholder:* "Tela de criação de campanha"

**3. Distribuição do acesso**
A campanha escolhe entre dois modos, sempre sem identificação do respondente. No **analógico**, o sistema gera documentos impressos com código único e QR Code, distribuídos de forma aleatória em urna sob supervisão da representação prevista na NR-5. No **digital**, o acesso é distribuído por link ou código individual, sem cadastro, direto para o navegador do trabalhador.
*O que sai daqui:* os códigos de acesso prontos para entregar aos trabalhadores, no formato escolhido para a campanha.
*Placeholder:* "Geração de códigos e QR Code"

**4. Respostas anônimas**
O trabalhador acessa pelo código, responde no navegador do próprio celular e confirma o envio. O código diz ao sistema a qual campanha e grupo a resposta pertence — nunca quem respondeu.
*O que sai daqui:* respostas coletadas sem vínculo com a identidade de ninguém.
*Placeholder:* "Tela do respondente"

**5. Consolidação e análise**
Os resultados são consolidados de forma coletiva, com medidas de dispersão por perigo. Grupos abaixo do mínimo não geram resultado isolado, e combinações de filtros que permitiriam reidentificação são bloqueadas. Aqui também entram as evidências qualitativas — entrevistas, observações de campo e documentos — ligadas a cada risco.
*O que sai daqui:* o retrato coletivo dos riscos, pronto para avaliação técnica.
*Placeholder:* "Painel de resultados coletivos"

**6. Plano de ação e acompanhamento**
Com as respostas recebidas, o sistema atualiza o GHE-PS automaticamente — sempre com o mínimo de 10 por grupo — e submete a nova definição a uma segunda aprovação do Responsável Técnico. É esse recorte, já aprovado duas vezes, que sustenta a emissão do inventário de riscos psicossociais, com severidade, probabilidade e grupos expostos. Cada risco recebe um plano de ação com responsável, prazo e evidência. Inventário e plano são assinados eletronicamente pelo responsável técnico, e a base aprovada fica bloqueada. No ciclo seguinte, o GRP compara os resultados e mostra se a medida funcionou.
*O que sai daqui:* inventário e plano de ação assinados, mais o registro de eficácia para o próximo ciclo.
*Placeholder:* "Inventário e plano de ação com responsáveis e prazos"

## Bloco — O que você tem ao final do ciclo
Fundo `#F2F4F5`. Título "Ao final de um ciclo, você tem:" e uma lista em duas colunas:
- Relatório coletivo da campanha
- Mapa de riscos psicossociais
- Inventário de riscos estruturado para o AEP, o GRO e o PGR
- Plano de ação com responsáveis, prazos e evidências
- Documentos assinados eletronicamente pelo responsável técnico
- Histórico completo da campanha e trilha de auditoria
- Base para a reavaliação de eficácia no ciclo seguinte

## Bloco — O que o GRP não faz
Card com borda `#DFE4E6`, sem alarde. Título "Onde o GRP para — de propósito." e lista:
- Não emite laudo automático nem garante, por si só, conformidade com a NR-1.
- Não faz diagnóstico clínico, médico ou psicológico de indivíduos.
- Não gera ranking nem perfil de trabalhador.
- Não guarda cadastro nominal dos respondentes.
- Não substitui o responsável técnico: a classificação e a aprovação são dele.

Abaixo, uma linha: *Num mercado que promete automação total, dizer onde a máquina para é o que dá segurança ao profissional que assina.*

## CTA final (padrão do site)

---

# PÁGINA 2 — Para empresas
`ParaEmpresas.dc.html` · `<title>GRP para empresas — riscos psicossociais no seu GRO/PGR</title>`

Layout: hero + "o que a NR-1 pede" + 4 passos resumidos + bloco de anonimato e taxa de resposta + o que fica documentado + múltiplas unidades + "já aplicamos um questionário" + quem faz a avaliação técnica + FAQ curto + CTA.

## Hero
> **Eyebrow:** PARA EMPRESAS
> # O que você mostra quando pedirem a evidência?
> Campanha anônima, análise coletiva, inventário de riscos e plano de ação com responsável, prazo e comprovação — organizados para entrar no seu GRO/PGR.
> **[Solicitar demonstração]** · [Ver como funciona]

## O que a NR-1 pede (sem alarmismo)
Parágrafo curto: desde 26 de maio de 2026 a fiscalização da NR-1 deixou de ser orientativa. A norma pede que os fatores psicossociais sejam identificados, avaliados, tratados e acompanhados como qualquer outro risco ocupacional — e que exista evidência do que foi feito. Não é um diagnóstico de saúde mental; é gestão organizacional documentada.

## Como funciona, em 4 passos
Reaproveite os 4 cartões da home (Estruturar → Coletar → Analisar → Agir e acompanhar), com link "Ver as 6 etapas completas →" para a página Como funciona.

## Anonimato e taxa de resposta
Fundo `#F2F4F5`. Título "Se ninguém responder com sinceridade, o resultado não serve para nada."
> A adesão é o maior risco operacional de uma avaliação psicossocial — e ela depende de o trabalhador acreditar que a resposta é protegida. No GRP não há cadastro nominal, o acesso é por código distribuído em urna, e a empresa não vê resposta individual porque a plataforma não tem como devolver isso. Para ajudar na comunicação interna, disponibilizamos um modelo de comunicado pronto para você adaptar e enviar.
> [Receber o modelo de comunicado] — link para a página de Confidencialidade.

## O que fica documentado
Lista curta com ícones de traço fino: inventário de riscos, plano de ação com responsável e prazo, evidências anexadas, histórico da campanha, documentos assinados pelo responsável técnico, comparação entre ciclos.

## Múltiplas unidades
Parágrafo: se a empresa tem mais de uma unidade ou CNPJ, cada uma opera com sua própria estrutura e seus próprios resultados, com visão consolidada para a matriz. Placeholder: "Visão consolidada de múltiplas unidades".

## Já aplicamos um questionário no ano passado
Parágrafo: um questionário aplicado e arquivado em PDF não é o fim do processo — é o começo dele. O GRP aproveita esse levantamento como ciclo anterior, estrutura o inventário e o plano de ação que faltavam, e passa a permitir comparação a cada nova campanha.

## Quem faz a avaliação técnica
Parágrafo: a classificação de risco e a aprovação dos documentos são feitas por profissional habilitado. Você pode usar o GRP com a sua própria equipe técnica ou com uma consultoria parceira — o sistema organiza os dados; a decisão e a assinatura são do responsável técnico.

## FAQ curto (4 perguntas, componente FAQAccordion)
- **Precisamos ter psicólogo na equipe?** Não necessariamente. A avaliação técnica pode ser feita por profissional habilitado da sua empresa ou por uma consultoria parceira. O GRP organiza os dados para esse profissional trabalhar.
- **Quantos trabalhadores são necessários?** O GRP funciona a partir de qualquer porte, mas grupos com menos de 10 pessoas têm os dados agregados em nível acima, para proteger o anonimato.
- **Os dados ficam com a gente?** Sim. Cada empresa opera em ambiente próprio e os critérios de retenção são definidos na contratação.
- **Isso garante que não seremos autuados?** Não — desconfie de quem garantir. O GRP organiza e documenta o processo e gera os insumos para o GRO/PGR; a conformidade depende das medidas adotadas e da avaliação do responsável técnico.

## CTA final (padrão do site)

---

# PÁGINA 3 — Para consultorias
`ParaConsultorias.dc.html` · `<title>GRP para consultorias de SST — psicossocial para toda a carteira</title>`

Esta é a página de maior valor comercial do site. Layout: hero + o gargalo da consultoria + multiempresa na prática + marca própria + a ART é sua + recorrência + empresas pequenas na carteira + coexistência + FAQ + CTA.

## Hero
> **Eyebrow:** PARA CONSULTORIAS E CLÍNICAS DE SST
> # Entregue psicossocial para toda a sua carteira sem refazer o processo em cada cliente.
> Campanhas simultâneas, ambientes separados por cliente, documentos padronizados e histórico completo — com a classificação e a assinatura permanecendo com você.
> **[Solicitar demonstração]** · [Falar no WhatsApp]

## O gargalo
Fundo `#F2F4F5`. Título "O trabalho não é avaliar. É repetir a avaliação trinta vezes."
Quatro linhas curtas: uma planilha por cliente; retrabalho de tabulação a cada campanha; PDF que não vira plano de ação; cliente que some entre um ciclo e outro. Fechamento: o GRP transforma esse processo manual e repetido em uma operação única, padronizada e recorrente.

## Multiempresa na prática
Bloco com PlaceholderScreenshot "Painel multiempresa com todos os clientes". Texto: um único painel com todos os clientes, campanhas em paralelo, permissões por integrante da equipe (RBAC) e segregação total de dados entre clientes. O que acontece em um cliente nunca aparece em outro.

## Sua marca
Card destacado com fundo `#E4EDEE`. Título "Sua marca na frente, não a nossa."
Texto: **[A DEFINIR pela equipe — depende da decisão sobre white label].** Enquanto a decisão não é tomada, usar: *Estamos desenvolvendo a personalização visual e o domínio próprio para consultorias parceiras. Fale com a gente para participar do programa piloto e ter acesso antecipado.*
> Nota para o Claude Design: manter este texto provisório e sinalizado, sem prometer prazo específico.

## A ART é sua
Título "A assinatura é sua. E fica registrada como sua."
Texto: o GRP organiza os dados e monta os documentos, mas a classificação do risco, o inventário e o plano de ação são assinados eletronicamente por você, com registro de quem assinou e quando. Sua responsabilidade técnica não fica dependendo de um botão automático — fica documentada.

## Recorrência
Fundo `#F2F4F5`. Título "De entrega anual para contrato contínuo."
Texto: um relatório entregue uma vez por ano é um projeto. Acompanhamento do plano de ação, evidências registradas e reavaliação comparável ao ciclo anterior são um serviço — e serviço se cobra todo mês. O GRP foi construído para sustentar essa recorrência.

## Empresas pequenas na carteira
Título "E o cliente de 15 pessoas?"
Texto: boa parte de uma carteira de SST é de empresas pequenas. Nesses casos, o GRP agrega os dados em nível acima da estrutura para proteger o anonimato e apoia a análise qualitativa complementar sob a responsabilidade do profissional. O produto serve à carteira inteira, não só às empresas grandes.

## Coexistência
Título "Funciona junto com o que você já usa."
Texto: os resultados saem em formato estruturado — inventário e plano de ação em PDF e planilha — para você levar ao PGR ou ao software de SST que já utiliza. Não é preciso trocar de sistema; o GRP entra como a camada psicossocial que faltava. (Integração por API no roadmap.)

## FAQ da consultoria (6 perguntas, componente FAQAccordion)
- **Consigo atender vários clientes no mesmo sistema?** Sim. Cada cliente opera em ambiente separado, com dados isolados, e você gerencia todos por um único painel.
- **Meu cliente vai ver a marca de vocês?** A personalização com a sua marca está em desenvolvimento para consultorias parceiras. [Ajustar conforme a decisão de white label.]
- **Quem assina os documentos?** Você. O sistema organiza e calcula; a classificação e a assinatura eletrônica são do responsável técnico.
- **Serve para os meus clientes pequenos?** Sim. Grupos abaixo de 10 pessoas têm os dados agregados em nível acima, e a análise qualitativa complementa o quantitativo.
- **Consigo levar o resultado para o PGR que já uso?** Sim, com exportação em PDF e planilha. Integração por API está no roadmap.
- **Como funciona a cobrança para consultoria?** [A DEFINIR — depende da decisão de preço. Enquanto isso: "Fale com a gente para conhecer o modelo para consultorias."]

## CTA final (padrão do site)

---

---

# PÁGINA 4 — Produtos
`Produtos.dc.html` · `<title>Produtos do GRP — modalidades de contratação</title>`

Página nova, decidida na reunião de 21/07. **Não é a página de Planos/preço** — essa continua fora do escopo até a equipe decidir a faixa de valor (Bloco 1). Aqui o que se apresenta é o **modelo de serviço**: o quanto o GRP participa da entrega técnica em cada modalidade. Referencie esta página a partir de "Para empresas" e "Para consultorias", e adicione "Produtos" ao menu do `Header`, entre "Como funciona" e "Confidencialidade".

Layout: hero curto + 4 cartões em coluna única (não lado a lado — os textos são longos) + bloco de acompanhamento + FAQ curto + CTA.

## Hero
> **Eyebrow:** PRODUTOS
> # Quatro formas de usar o GRP — você escolhe quanto entregamos prontos.
> Do uso da plataforma por conta da sua própria equipe técnica até a entrega do inventário e do plano de ação assinados com ART, o GRP se ajusta ao papel que você quer que a gente cumpra.

## Os 4 cartões (numerados, com título, o que inclui e para quem é)

**1. Plataforma para aplicação**
Você usa o GRP para estruturar a campanha, distribuir o acesso e coletar as respostas de forma anônima. Os cálculos e os relatórios são feitos fora do sistema, pelo responsável técnico definido por você.
*Para quem é:* empresas e consultorias que já têm um processo de cálculo e análise próprio e querem só a camada de coleta protegida.

**2. Plataforma com cálculo e relatório**
Além da aplicação, o GRP calcula os resultados e gera os relatórios dentro do sistema — mas a análise, a classificação de risco e a aprovação continuam sendo do responsável técnico definido por você.
*Para quem é:* empresas e consultorias que querem reduzir o retrabalho de tabulação, mantendo a responsabilidade técnica com o profissional que já atende o cliente.

**3. Entrega completa com ART do GRP**
O GRP conduz o processo inteiro e entrega o PGR-PS — Inventário de Riscos Psicossociais e Plano de Ação — assinado pelo responsável técnico do GRP, com ART registrada no CREA.
*Para quem é:* empresas que não têm um profissional próprio para essa avaliação e querem o processo entregue de ponta a ponta, já com respaldo técnico e registro profissional.

**4. Acompanhamento do plano de ação**
Depois que o PGR-PS existe — emitido pelo seu responsável técnico ou pelo do GRP — o GRP acompanha a execução: prazos, responsáveis, evidências anexadas e a comparação de eficácia no ciclo seguinte.
*Para quem é:* quem já tem o inventário e o plano prontos (por qualquer uma das vias acima) e precisa de um lugar para provar que as ações foram executadas.

## Bloco de transição
Fundo `#F2F4F5`. Texto curto: *As quatro modalidades não são excludentes — muitas empresas começam na 1 ou na 2 e migram para a 3 quando precisam de ART, ou contratam a 4 isoladamente para dar continuidade a um PGR-PS que já têm.*

## FAQ curto (3 perguntas)
- **Preciso trocar de modalidade se eu crescer?** Não. Você pode migrar de uma modalidade para outra a qualquer momento, mantendo o histórico das campanhas anteriores.
- **A modalidade 3 substitui minha consultoria de SST atual?** Não necessariamente — várias consultorias usam a modalidade 1 ou 2 para continuar sendo a responsável técnica dos próprios clientes. A modalidade 3 é para quem não tem esse profissional disponível.
- **Como sei quanto custa cada modalidade?** Fale com a gente pelo formulário de demonstração — o valor depende do porte e da modalidade escolhida. `[A DEFINIR — depende da decisão de preço, Bloco 1]`

## CTA final (padrão do site)

---

## Depois de construir, me confirme:
- As correções da Parte 0 foram aplicadas na página `Confidencialidade.dc.html` já publicada (dois modos de anonimato) e nas etapas 1, 2, 3 e 6 de "Como funciona" (GHE-PS preciso, questionários nomeados, dois modos de coleta).
- As quatro páginas (Como funciona, Para empresas, Para consultorias, Produtos) usam o mesmo `Header`, com o menu atualizado apontando para todas — incluindo "Produtos" na posição indicada.
- Os placeholders de screenshot estão marcados, não são telas falsas.
- Os campos `[A DEFINIR]` (white label e preço, incluindo o novo item na FAQ de Produtos) estão visíveis, não preenchidos com invenção.
- Todas terminam no CTA final padrão.
