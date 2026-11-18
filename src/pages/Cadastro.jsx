import { CalendarDays, Check, ClipboardList, Clock, Droplet, Pill, Plus, Users, Utensils } from 'lucide-react'
import { useEffect } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import Botao from '../components/Botao.jsx'
import Campo from '../components/Campo.jsx'
import Opcao from '../components/Opcao.jsx'
import Progresso from '../components/Progresso.jsx'
import useEstadoSalvo from '../hooks/useEstadoSalvo.js'
import useSessao from '../hooks/useSessao.js'

const passos = ['pessoa', 'rotina', 'ajuda', 'pronto']

const tiposDeRotina = [
  { id: 'remedios', rotulo: 'Remédios', icone: Pill },
  { id: 'refeicoes', rotulo: 'Refeições', icone: Utensils },
  { id: 'higiene', rotulo: 'Higiene e banho', icone: Droplet },
  { id: 'consultas', rotulo: 'Consultas', icone: CalendarDays },
]

const cadastroInicial = {
  pessoa: { nome: '', idade: '', parentesco: '' },
  rotina: ['remedios', 'refeicoes', 'higiene'],
  convites: [{ nome: '', contato: '' }],
}

const linkDeApoio = 'text-label font-semibold text-brand-teal-strong underline'

function Titulo({ children, apoio }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-display font-extrabold">{children}</h1>
      {apoio ? <p className="text-text-secondary">{apoio}</p> : null}
    </div>
  )
}

function Acoes({ children }) {
  return <div className="mt-auto flex flex-col items-center gap-4 pt-6">{children}</div>
}

// Cadastro inicial em três passos, uma pergunta por tela.
export default function Cadastro() {
  const { passo } = useParams()
  const navegar = useNavigate()
  const { sessao } = useSessao()
  const [cadastro, setCadastro] = useEstadoSalvo('cuida-junto:cadastro', cadastroInicial)

  // A cada passo, o foco volta para o início do conteúdo.
  useEffect(() => {
    document.getElementById('conteudo')?.focus()
  }, [passo])

  if (!passos.includes(passo)) return <Navigate to="/comecar/pessoa" replace />

  const irPara = (proximo) => (evento) => {
    evento.preventDefault()
    navegar(`/comecar/${proximo}`)
  }

  if (passo === 'pessoa') {
    const mudar = (campo) => (e) =>
      setCadastro({ ...cadastro, pessoa: { ...cadastro.pessoa, [campo]: e.target.value } })
    return (
      <form onSubmit={irPara('rotina')} className="flex flex-1 flex-col gap-6">
        <Progresso passo={1} />
        <Titulo apoio="Essas informações aparecem no plano de quem for ajudar.">Quem você cuida?</Titulo>
        <div className="flex flex-col gap-4">
          <Campo
            rotulo="Como a pessoa gosta de ser chamada"
            name="nome"
            value={cadastro.pessoa.nome}
            onChange={mudar('nome')}
            ajuda="Por exemplo: Dona Lourdes."
          />
          <Campo
            rotulo="Idade"
            name="idade"
            inputMode="numeric"
            value={cadastro.pessoa.idade}
            onChange={mudar('idade')}
          />
          <Campo
            rotulo="O que ela é sua"
            name="parentesco"
            value={cadastro.pessoa.parentesco}
            onChange={mudar('parentesco')}
            ajuda="Por exemplo: mãe, pai, avó, marido."
          />
        </div>
        <Acoes>
          <Botao type="submit" larguraTotal>
            Continuar
          </Botao>
          <Link to="/comecar/rotina" className={linkDeApoio}>
            Pular por enquanto
          </Link>
        </Acoes>
      </form>
    )
  }

  if (passo === 'rotina') {
    const alternar = (id) =>
      setCadastro({
        ...cadastro,
        rotina: cadastro.rotina.includes(id)
          ? cadastro.rotina.filter((item) => item !== id)
          : [...cadastro.rotina, id],
      })
    return (
      <form onSubmit={irPara('ajuda')} className="flex flex-1 flex-col gap-6">
        <Progresso passo={2} />
        <Titulo apoio="Marque o que precisa de horário. Você ajusta os detalhes depois.">
          O que faz parte da rotina?
        </Titulo>
        <fieldset className="m-0 flex flex-col gap-3 border-0 p-0">
          <legend className="sr-only">O que faz parte da rotina</legend>
          {tiposDeRotina.map(({ id, rotulo, icone }) => (
            <Opcao
              key={id}
              icone={icone}
              name="rotina"
              value={id}
              checked={cadastro.rotina.includes(id)}
              onChange={() => alternar(id)}
            >
              {rotulo}
            </Opcao>
          ))}
        </fieldset>
        <Acoes>
          <Botao type="submit" larguraTotal>
            Continuar
          </Botao>
          <Link to="/comecar/pessoa" className={linkDeApoio}>
            Voltar
          </Link>
        </Acoes>
      </form>
    )
  }

  if (passo === 'ajuda') {
    const mudar = (indice, campo) => (e) =>
      setCadastro({
        ...cadastro,
        convites: cadastro.convites.map((c, i) => (i === indice ? { ...c, [campo]: e.target.value } : c)),
      })
    const adicionar = () =>
      setCadastro({ ...cadastro, convites: [...cadastro.convites, { nome: '', contato: '' }] })
    return (
      <form onSubmit={irPara('pronto')} className="flex flex-1 flex-col gap-6">
        <Progresso passo={3} />
        <Titulo apoio="Convide alguém da família agora ou faça isso depois.">Quem pode ajudar?</Titulo>
        <div className="flex flex-col gap-4">
          {cadastro.convites.map((convite, indice) => (
            <fieldset key={indice} className="m-0 flex flex-col gap-4 border-0 p-0">
              <legend className="sr-only">Pessoa {indice + 1}</legend>
              <Campo rotulo="Nome" name={`nome-${indice}`} value={convite.nome} onChange={mudar(indice, 'nome')} />
              <Campo
                rotulo="E-mail ou celular"
                name={`contato-${indice}`}
                value={convite.contato}
                onChange={mudar(indice, 'contato')}
                ajuda="E-mail ou número com DDD."
              />
            </fieldset>
          ))}
          <Botao variante="secundario" icone={Plus} larguraTotal onClick={adicionar}>
            Adicionar outra pessoa
          </Botao>
        </div>
        <Acoes>
          <Botao type="submit" larguraTotal>
            Enviar convite e continuar
          </Botao>
          <Link to="/comecar/pronto" className={linkDeApoio}>
            Fazer isso depois
          </Link>
        </Acoes>
      </form>
    )
  }

  const convidados = cadastro.convites.map((c) => c.nome.trim()).filter(Boolean)
  const rotulos = tiposDeRotina.filter((t) => cadastro.rotina.includes(t.id)).map((t) => t.rotulo.toLowerCase())
  const resumo = [
    {
      icone: Clock,
      texto: rotulos.length ? `Lembretes de ${rotulos.join(', ')}` : 'Rotina pronta para receber horários',
    },
    {
      icone: Users,
      texto: convidados.length ? `Convite preparado para ${convidados.join(', ')}` : 'Você pode convidar a família quando quiser',
    },
    { icone: ClipboardList, texto: 'Plano de hoje pronto para compartilhar' },
  ]

  return (
    <div className="flex flex-1 flex-col gap-6">
      <span
        aria-hidden="true"
        className="surgir flex size-22 items-center justify-center rounded-full bg-status-success-soft text-status-success"
      >
        <Check size={44} strokeWidth={2.5} />
      </span>
      <Titulo apoio="Você pode mudar tudo depois.">
        Tudo pronto{sessao?.nome ? `, ${sessao.nome}` : ''}
      </Titulo>
      <ul className="m-0 flex list-none flex-col gap-3 rounded-lg border border-border-default bg-bg-surface p-5">
        {resumo.map(({ icone: Icone, texto }) => (
          <li key={texto} className="flex items-center gap-3">
            <Icone size={24} aria-hidden="true" className="shrink-0 text-brand-teal-strong" />
            <span>{texto}</span>
          </li>
        ))}
      </ul>
      <p className="text-caption text-text-secondary">
        Nesta demonstração, o app mostra a rotina de exemplo da Dona Lourdes.
      </p>
      <Acoes>
        <Botao para="/hoje" larguraTotal>
          Ver a rotina de hoje
        </Botao>
      </Acoes>
    </div>
  )
}
