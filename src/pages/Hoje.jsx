import { Check, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import Botao from '../components/Botao.jsx'
import CabecalhoDaPagina from '../components/CabecalhoDaPagina.jsx'
import Etiqueta from '../components/Etiqueta.jsx'
import ItemDaRotina from '../components/ItemDaRotina.jsx'
import { pessoaCuidada, usuarioAtual } from '../data/pessoa.js'
import { dataDeHoje, rotinaDeHoje } from '../data/rotina.js'
import useEstadoSalvo from '../hooks/useEstadoSalvo.js'

function horaAgora() {
  return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}

function Grupo({ titulo, itens, onMarcar }) {
  if (itens.length === 0) return null
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-heading font-bold">{titulo}</h2>
      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        {itens.map((item) => (
          <ItemDaRotina key={item.id} item={item} onMarcar={onMarcar} />
        ))}
      </ul>
    </section>
  )
}

export default function Hoje() {
  const [rotina, setRotina] = useEstadoSalvo('cuida-junto:rotina', rotinaDeHoje)
  const [aviso, setAviso] = useState('')

  const proximo = rotina.find((item) => item.estado === 'a-fazer')
  const atrasados = rotina.filter((item) => item.estado === 'atrasado')
  const maisTarde = rotina.filter((item) => item.estado === 'a-fazer' && item.id !== proximo?.id)
  const feitos = rotina.filter((item) => item.estado === 'feito')

  function marcarComoFeito(id) {
    const item = rotina.find((i) => i.id === id)
    setRotina(
      rotina.map((i) =>
        i.id === id ? { ...i, estado: 'feito', feitoPor: usuarioAtual, feitoAs: horaAgora() } : i,
      ),
    )
    setAviso(`${item.titulo} marcado como feito.`)
  }

  function reiniciar() {
    setRotina(rotinaDeHoje)
    setAviso('Exemplo reiniciado.')
  }

  return (
    <>
      <CabecalhoDaPagina apoio={dataDeHoje} titulo={`Rotina da ${pessoaCuidada.nome}`} />

      <p role="status" aria-live="polite" className={aviso ? 'rounded-md bg-status-success-soft px-4 py-2 text-label font-semibold text-status-success' : 'sr-only'}>
        {aviso}
      </p>

      {proximo ? (
        <section
          aria-labelledby="titulo-proximo"
          className="flex flex-col gap-3 rounded-lg bg-brand-teal-strong p-5 text-text-on-brand"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-caption font-medium">Lembrete: próximo horário</p>
            {proximo.naoPodeAtrasar ? <Etiqueta tom="laranja">Não pode atrasar</Etiqueta> : null}
          </div>
          <h2 id="titulo-proximo" className="text-heading font-bold">
            <time dateTime={proximo.hora}>{proximo.hora}</time> {proximo.titulo}
          </h2>
          <p>{proximo.detalhe}</p>
          <Botao variante="inverso" icone={Check} larguraTotal onClick={() => marcarComoFeito(proximo.id)}>
            Marcar como feito
          </Botao>
        </section>
      ) : (
        <section className="rounded-lg bg-status-success-soft p-5">
          <h2 className="text-heading font-bold text-status-success">Tudo feito por hoje</h2>
          <p>Não há mais horários na rotina de hoje.</p>
        </section>
      )}

      <Grupo titulo="Atrasado" itens={atrasados} onMarcar={marcarComoFeito} />
      <Grupo titulo="Mais tarde" itens={maisTarde} onMarcar={marcarComoFeito} />
      <Grupo titulo="Feito hoje" itens={feitos} />

      <button
        type="button"
        onClick={reiniciar}
        className="mx-auto flex min-h-12 items-center gap-2 rounded-md px-3 text-caption font-medium text-text-secondary underline"
      >
        <RotateCcw size={16} aria-hidden="true" />
        Reiniciar o exemplo
      </button>
    </>
  )
}
