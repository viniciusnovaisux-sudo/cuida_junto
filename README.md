# Cuida Junto

Protótipo navegável para a Global Solution FIAP 2026, tema CitizenTech.

**Protótipo publicado:** https://cuida-junto-rosy.vercel.app

O Cuida Junto ajuda famílias que cuidam de uma pessoa com Alzheimer ou outra demência. Ele organiza a rotina diária, divide as tarefas entre quem pode ajudar e mostra os direitos de quem cuida. Quem chega para ajudar abre o app e sabe o que fazer.

## Integrantes

| Nome | RM |
| --- | --- |
| Pamella | RM574747 |
| Thais Gomes Viana | RM575002 |
| Thalita Vidal Molina | RM575661 |
| Vinicius Novais | RM574576 |

## O problema

Quem cuida de um familiar com demência costuma concentrar todas as tarefas e todo o conhecimento da rotina. Por isso, passar o cuidado para outra pessoa quase nunca acontece. Na entrevista feita pelo grupo, a troca de turno aconteceu no máximo duas vezes, e nas duas houve remédio atrasado e banho fora de hora.

## A solução

| Página | Rota | O que a pessoa faz |
| --- | --- | --- |
| Boas-vindas | `/` | Entende a proposta e começa |
| Hoje | `/hoje` | Vê a rotina do dia e marca o que foi feito |
| Semana | `/semana` | Vê o que falta cobrir e assume tarefas |
| Plano de hoje | `/plano` | Recebe tudo o que precisa para cobrir um dia, com versão para impressão |
| Direitos e apoios | `/direitos` | Descobre benefícios e serviços e como buscar cada um |

Os dados são simulados e ficam em `src/data`. Não há backend. O que a pessoa marca fica salvo só no navegador dela.

## Acessibilidade

- HTML semântico: `header`, `nav`, `main`, `footer` e títulos em ordem.
- Link "Pular para o conteúdo" como primeiro item de cada página.
- Navegação completa pelo teclado, com foco visível.
- Texto alternativo nas imagens e ícones decorativos ocultos de leitores de tela.
- Estados sempre em texto, nunca só por cor ("Atrasado", "Não pode atrasar", "Feito").
- Avisos de ação anunciados para leitores de tela.
- Texto base de 18 px e áreas de toque de pelo menos 48 px.
- Respeito à preferência do sistema por menos animação.

## Design

As cores, os espaços e os estilos de texto vêm do design system no Figma. Os tokens estão em `src/index.css`, com os mesmos nomes das variáveis do Figma.

- Títulos em Nunito e textos em Atkinson Hyperlegible Next, fonte criada para leitura fácil.
- Teal e laranja do logo aparecem em áreas grandes. Textos e botões usam versões mais escuras, para ter contraste suficiente.

## Tecnologias

- React 19 com Vite
- React Router
- Tailwind CSS v4
- Lucide (ícones)

## Como rodar

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Estrutura

```
src/
  assets/       logo
  components/   componentes do design system
  data/         dados simulados
  hooks/        estado salvo no navegador
  pages/        uma página por etapa da jornada
```

## ODS

O projeto se liga ao ODS 5, meta 5.4, que trata de reconhecer o trabalho de cuidado não remunerado e promover a responsabilidade compartilhada dentro da família.
