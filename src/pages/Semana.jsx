import { Plus } from 'lucide-react'
import { useState } from 'react'
import Botao from '../components/Botao.jsx'
import CabecalhoDaPagina from '../components/CabecalhoDaPagina.jsx'
import Etiqueta from '../components/Etiqueta.jsx'
import { diasDaSemana, periodoDaSemana, tarefasSemResponsavel } from '../data/semana.js'
import useEstadoSalvo from '../hooks/useEstadoSalvo.js'

export default function Semana() {
  // Guarda os ids das tarefas que a pessoa assumiu
  const [assumidas, setAssumidas] = useEstadoSalvo('cuida-junto:assumidas', [])
  const [aviso, setAviso] = useState('')

  const pendentes = tarefasSemResponsavel.filter((t) => !assumidas.includes(t.id))

  function assumir(tarefa) {
    setAssumidas([...assumidas, tarefa.id])
    setAviso(`Você assumiu: ${tarefa.titulo}, ${tarefa.quando}.`)
  }

  async function convidar() {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/semana`)
      setAviso('Link de convite copiado. Envie para quem pode ajudar.')
    } catch {
      setAviso('Não foi possível copiar. Copie o endereço desta página.')
    }
  }

  const resumo =
    pendentes.length === 0
      ? 'Todas as tarefas da semana têm responsável.'
      : pendentes.length === 1
        ? '1 tarefa ainda sem responsável nesta semana.'
        : `${pendentes.length} tarefas ainda sem responsável nesta semana.`

  return (
    <>
      <CabecalhoDaPagina apoio={periodoDaSemana} titulo="Semana da família" />

      <p role="status" aria-live="polite" className={aviso ? 'rounded-md bg-status-success-soft px-4 py-2 text-label font-semibold text-status-success' : 'sr-only'}>
        {aviso}
      </p>

      <section
        aria-labelledby="titulo-falta"
        className={`flex flex-col gap-3 rounded-lg p-4 ${pendentes.length ? 'bg-brand-orange-soft' : 'bg-status-success-soft'}`}
      >
        <h2 id="titulo-falta" className="text-heading font-bold">
          {pendentes.length ? 'Falta cobrir' : 'Semana coberta'}
        </h2>
        <p className="text-caption font-medium text-text-secondary">{resumo}</p>
        <ul className="em-sequencia m-0 flex list-none flex-col gap-3 p-0">
          {pendentes.map((tarefa) => (
            <li key={tarefa.id} className="flex items-center gap-3 rounded-md bg-bg-surface p-3">
              <div className="flex min-w-0 flex-1 flex-col">
                <h3 className="font-body text-body font-semibold">{tarefa.titulo}</h3>
                <p className="text-caption font-medium text-text-secondary">{tarefa.quando}</p>
              </div>
              <Botao
                variante="secundario"
                className="shrink-0"
                onClick={() => assumir(tarefa)}
                aria-label={`Eu assumo: ${tarefa.titulo}, ${tarefa.quando}`}
              >
                Eu assumo
              </Botao>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-heading font-bold">Quem cuida em cada dia</h2>
        <ul className="em-sequencia m-0 flex list-none flex-col gap-2 p-0">
          {diasDaSemana.map((d) => {
            const faltam = d.tarefas.filter((id) => !assumidas.includes(id))
            const suas = d.tarefas.filter((id) => assumidas.includes(id))
            return (
              <li
                key={d.dia}
                className="flex items-center gap-3 rounded-md border border-border-default bg-bg-surface px-4 py-3"
              >
                <span className="w-16 shrink-0 text-label font-semibold text-brand-teal-strong">
                  {d.dia}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <p>{d.quem}</p>
                  {faltam.length ? <Etiqueta tom="laranja">Falta cobrir</Etiqueta> : null}
                  {suas.length ? <Etiqueta tom="feito">Você assumiu uma tarefa</Etiqueta> : null}
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <Botao icone={Plus} larguraTotal onClick={convidar}>
        Convidar alguém para ajudar
      </Botao>
    </>
  )
}
