import { Check, Clock, Shield, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import telaHoje from '../assets/tela-hoje.webp'
import telaPlano from '../assets/tela-plano.webp'
import Botao from '../components/Botao.jsx'
import Etiqueta from '../components/Etiqueta.jsx'
import Marca from '../components/Marca.jsx'
import PularParaConteudo from '../components/PularParaConteudo.jsx'

const navegacao = [
  { href: '#como-funciona', rotulo: 'Como funciona' },
  { href: '#plano', rotulo: 'Plano de hoje' },
  { href: '#como-comecar', rotulo: 'Como começar' },
  { href: '#duvidas', rotulo: 'Dúvidas' },
]

const dados = [
  {
    numero: '10 h',
    texto: 'por dia é o tempo médio de cuidado e supervisão de uma pessoa com demência.',
    fonte: 'Relatório Nacional sobre a Demência',
  },
  {
    numero: '73%',
    texto: 'dos custos do cuidado, pelo menos, ficam com as famílias.',
    fonte: 'Relatório Nacional sobre a Demência',
  },
  {
    numero: '2 vezes',
    texto: 'foi o máximo que outra pessoa assumiu o cuidado, segundo a cuidadora que entrevistamos.',
    fonte: 'Entrevista feita pelo grupo, 2026',
  },
]

const recursos = [
  {
    icone: Clock,
    titulo: 'Rotina do dia, com lembretes',
    texto:
      'Remédios, refeições e higiene em ordem de horário. O próximo item aparece em destaque, e o que não pode atrasar vem marcado.',
  },
  {
    icone: Users,
    titulo: 'Cuidado dividido na família',
    texto: 'A semana mostra o que ainda falta cobrir. Qualquer pessoa pode assumir uma tarefa, sem cobrança.',
  },
  {
    icone: Shield,
    titulo: 'Direitos e apoios',
    texto: 'Benefícios e serviços para quem cuida, com onde ir e o passo a passo para buscar cada um.',
  },
]

const itensDoPlano = [
  'Pontos de atenção, como alergias e tipo de comida',
  'Horários do dia, com o que fazer em cada um',
  'O que acalma e o que evitar',
  'Para quem ligar se precisar de ajuda',
]

const passos = [
  { titulo: 'Crie sua conta', texto: 'Leva menos de um minuto. Só pedimos o seu nome e um e-mail.' },
  {
    titulo: 'Cadastre a rotina',
    texto: 'Informe os horários de remédios, refeições e higiene de quem você cuida.',
  },
  { titulo: 'Convide a família', texto: 'Envie um link para quem pode ajudar. Cada pessoa vê o que falta cobrir.' },
]

const duvidas = [
  {
    pergunta: 'Preciso instalar alguma coisa?',
    resposta: 'Não. O Cuida Junto abre no navegador do celular ou do computador.',
  },
  {
    pergunta: 'Quem vê as informações de quem eu cuido?',
    resposta: 'Só quem você convidar. Quem recebe o link do plano vê apenas o plano daquele dia.',
  },
  {
    pergunta: 'O Cuida Junto indica remédios ou doses?',
    resposta: 'Não. Ele registra o que a família informa e não substitui a orientação médica.',
  },
  {
    pergunta: 'Quem cobre o dia precisa criar conta?',
    resposta: 'Não. O plano do dia abre direto pelo link e também pode ser impresso.',
  },
]

const secao = 'px-6 py-12 md:py-24'
const miolo = 'mx-auto w-full max-w-6xl'

function TituloDaSecao({ rotulo, children, apoio, centralizado = true }) {
  return (
    <div className={`flex flex-col gap-3 ${centralizado ? 'md:items-center md:text-center' : ''}`}>
      <p className="text-label font-semibold tracking-wide text-brand-orange-strong uppercase">{rotulo}</p>
      <h2 className="max-w-3xl text-title font-extrabold md:text-display-l">{children}</h2>
      {apoio ? <p className="max-w-2xl text-text-secondary md:text-body-large">{apoio}</p> : null}
    </div>
  )
}

function Celular({ imagem, descricao, forma }) {
  return (
    <div className="relative mx-auto w-full max-w-sm py-4 md:max-w-md">
      <div aria-hidden="true" className={`absolute ${forma}`} />
      <div className="relative mx-auto w-60 overflow-hidden rounded-[2rem] border-[6px] border-text-primary bg-bg-page shadow-2xl md:w-72">
        <img src={imagem} alt={descricao} width="560" height="1211" className="block h-[26rem] w-full object-cover object-top md:h-[34rem]" />
      </div>
    </div>
  )
}

export default function LandingPage() {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-clip bg-bg-page">
      <PularParaConteudo />

      <header className="border-b border-border-default bg-bg-surface px-6 py-3">
        <div className={`${miolo} flex items-center justify-between gap-4`}>
          <Marca nomeSoEmTelasMaiores />
          <nav aria-label="Seções da página" className="hidden lg:block">
            <ul className="m-0 flex list-none gap-8 p-0">
              {navegacao.map(({ href, rotulo }) => (
                <li key={href}>
                  <a href={href} className="rounded-md py-3 text-label font-semibold hover:text-brand-teal-strong">
                    {rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <Botao para="/entrar" variante="secundario">
              Entrar
            </Botao>
            <span className="hidden min-[360px]:block">
              <Botao para="/criar-conta">Criar conta</Botao>
            </span>
          </div>
        </div>
      </header>

      <main id="conteudo" tabIndex={-1}>
        <section className="px-6 py-8 md:py-20">
          <div className={`${miolo} grid items-center gap-8 md:grid-cols-2 md:gap-16`}>
            <div className="flex flex-col gap-6">
              <Etiqueta tom="teal">Para quem cuida de um familiar</Etiqueta>
              <h1 className="text-display font-extrabold md:text-display-xl">
                Cuidar fica mais leve quando é dividido
              </h1>
              <p className="text-text-secondary md:text-body-large">
                Organize a rotina de quem você cuida, divida as tarefas com a família e deixe um plano pronto
                para quem cobrir o dia.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Botao para="/criar-conta">Começar agora</Botao>
                <Botao href="#como-funciona" variante="secundario">
                  Ver como funciona
                </Botao>
              </div>
              <p className="text-caption text-text-secondary">
                Funciona no celular e no computador, sem instalar nada.
              </p>
            </div>
            <Celular
              imagem={telaHoje}
              descricao="Tela Hoje do Cuida Junto: lembrete do remédio da pressão às 14 horas, marcado como não pode atrasar, e a lista de tarefas do dia."
              forma="top-10 left-1/2 size-72 -translate-x-1/2 rounded-full bg-brand-teal-soft md:size-96"
            />
          </div>
        </section>

        <section id="problema" className={`${secao} bg-bg-surface`}>
          <div className={`${miolo} flex flex-col gap-8 md:gap-12`}>
            <TituloDaSecao
              rotulo="O problema"
              apoio="Quem cuida de uma pessoa com demência costuma fazer quase tudo e ser a única que conhece os detalhes. Por isso é tão difícil aceitar ajuda."
            >
              A rotina de quem você cuida não pode morar só na sua cabeça
            </TituloDaSecao>
            <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-3 md:gap-6">
              {dados.map(({ numero, texto, fonte }) => (
                <li
                  key={numero}
                  className="flex flex-col gap-2 rounded-lg border border-border-default bg-bg-page p-5 md:p-8"
                >
                  <p className="font-display text-display font-extrabold text-brand-teal-strong md:text-display-xl">
                    {numero}
                  </p>
                  <p>{texto}</p>
                  <p className="text-caption text-text-secondary">Fonte: {fonte}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="como-funciona" className={secao}>
          <div className={`${miolo} flex flex-col gap-8 md:gap-12`}>
            <TituloDaSecao rotulo="Como funciona" apoio="Tudo em um só lugar, em linguagem simples.">
              Três coisas que tiram peso de quem cuida
            </TituloDaSecao>
            <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-3 md:gap-6">
              {recursos.map(({ icone: Icone, titulo, texto }) => (
                <li
                  key={titulo}
                  className="flex flex-col gap-3 rounded-lg border border-border-default bg-bg-surface p-5 md:p-8"
                >
                  <span
                    aria-hidden="true"
                    className="flex size-14 items-center justify-center rounded-full bg-brand-teal-soft text-brand-teal-strong"
                  >
                    <Icone size={28} />
                  </span>
                  <h3 className="text-heading font-bold md:text-title">{titulo}</h3>
                  <p className="text-text-secondary">{texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="plano" className={`${secao} bg-brand-teal-soft`}>
          <div className={`${miolo} grid items-center gap-8 md:grid-cols-2 md:gap-16`}>
            <div className="flex flex-col gap-6 md:order-2">
              <TituloDaSecao
                rotulo="O diferencial"
                centralizado={false}
                apoio="A rotina que você cadastra vira uma página única. Envie por link ou imprima."
              >
                Um plano pronto para quem cobrir o dia
              </TituloDaSecao>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {itensDoPlano.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-teal-strong text-text-on-brand"
                    >
                      <Check size={16} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Botao para="/plano" className="sm:w-fit">
                Ver um exemplo de plano
              </Botao>
            </div>
            <Celular
              imagem={telaPlano}
              descricao="Tela Plano de hoje: aviso de atenção com comida pastosa e alergia a dipirona, seguido dos horários do dia."
              forma="bottom-0 left-1/2 h-80 w-64 -translate-x-1/2 rounded-t-full rounded-b-3xl bg-brand-teal md:h-[28rem] md:w-80"
            />
          </div>
        </section>

        <section id="como-comecar" className={`${secao} bg-bg-surface`}>
          <div className={`${miolo} flex flex-col gap-8 md:gap-12`}>
            <TituloDaSecao rotulo="Como começar">Pronto em três passos</TituloDaSecao>
            <ol className="m-0 grid list-none gap-4 p-0 md:grid-cols-3 md:gap-6">
              {passos.map(({ titulo, texto }, indice) => (
                <li key={titulo} className="flex gap-4 rounded-lg bg-bg-page p-5 md:flex-col md:p-8">
                  <span
                    aria-hidden="true"
                    className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-orange-soft font-display text-heading font-bold text-brand-orange-strong"
                  >
                    {indice + 1}
                  </span>
                  <div className="flex flex-col gap-1 md:gap-3">
                    <h3 className="text-heading font-bold md:text-title">
                      <span className="sr-only">Passo {indice + 1}: </span>
                      {titulo}
                    </h3>
                    <p className="text-text-secondary">{texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={secao} aria-labelledby="titulo-pesquisa">
          <div className={miolo}>
            <div className="flex flex-col gap-4 rounded-lg bg-brand-orange-soft p-6 md:items-center md:gap-6 md:p-16 md:text-center">
              <p className="text-label font-semibold tracking-wide text-brand-orange-strong uppercase">
                O que ouvimos de quem cuida
              </p>
              <h2 id="titulo-pesquisa" className="max-w-4xl text-title font-extrabold md:text-display-l">
                Na nossa pesquisa, a cuidadora contou que tudo o que era dela ficou em segundo plano.
              </h2>
              <p className="max-w-2xl md:text-body-large">
                O Cuida Junto existe para que dividir o cuidado seja possível, e para que quem cuida volte a ter
                tempo para si.
              </p>
              <p className="text-caption text-text-secondary">Entrevista em profundidade feita pelo grupo, 2026</p>
            </div>
          </div>
        </section>

        <section id="duvidas" className={`${secao} bg-bg-surface`}>
          <div className={`${miolo} flex flex-col gap-8 md:items-center md:gap-12`}>
            <TituloDaSecao rotulo="Dúvidas">Perguntas frequentes</TituloDaSecao>
            <ul className="m-0 flex w-full max-w-3xl list-none flex-col gap-4 p-0">
              {duvidas.map(({ pergunta, resposta }) => (
                <li key={pergunta} className="flex flex-col gap-2 rounded-md border border-border-default bg-bg-page p-4 md:px-6 md:py-5">
                  <h3 className="text-heading font-bold">{pergunta}</h3>
                  <p className="text-text-secondary">{resposta}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={secao} aria-labelledby="titulo-final">
          <div className={miolo}>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-brand-teal-strong p-6 text-center text-text-on-brand md:gap-6 md:p-16">
              <h2 id="titulo-final" className="text-title font-extrabold md:text-display-l">
                Comece hoje a dividir o cuidado
              </h2>
              <p className="md:text-body-large">Crie sua conta, cadastre a rotina e convide quem pode ajudar.</p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                <Botao para="/criar-conta" variante="inverso">
                  Criar conta
                </Botao>
                <Link
                  to="/entrar"
                  className="rounded-md py-3 text-label font-semibold text-text-on-brand underline focus-visible:outline-text-on-brand"
                >
                  Já tenho conta
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-default bg-bg-surface px-6 py-8 md:py-12">
        <div className={`${miolo} flex flex-col gap-6`}>
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex max-w-sm flex-col gap-3">
              <Marca comLink={false} />
              <p className="text-text-secondary">
                Rotina, divisão do cuidado e direitos para quem cuida de um familiar com demência.
              </p>
            </div>
            <nav aria-label="Rodapé">
              <ul className="m-0 flex list-none flex-col gap-3 p-0 md:flex-row md:gap-8">
                <li>
                  <a href="#como-funciona" className="rounded-md text-text-secondary underline">
                    Como funciona
                  </a>
                </li>
                <li>
                  <Link to="/direitos" className="rounded-md text-text-secondary underline">
                    Direitos e apoios
                  </Link>
                </li>
                <li>
                  <Link to="/entrar" className="rounded-md text-text-secondary underline">
                    Entrar
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/viniciusnovaisux-sudo/cuida_junto"
                    className="rounded-md text-text-secondary underline"
                  >
                    Repositório no GitHub
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <p className="border-t border-border-default pt-6 text-caption text-text-secondary">
            Protótipo acadêmico com dados simulados. Global Solution FIAP 2026 · CitizenTech · ODS 5, meta 5.4.
          </p>
        </div>
      </footer>
    </div>
  )
}
