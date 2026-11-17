import { CircleAlert, Phone, Printer, Send } from 'lucide-react'
import { useState } from 'react'
import Botao from '../components/Botao.jsx'
import CabecalhoDaPagina from '../components/CabecalhoDaPagina.jsx'
import Cartao from '../components/Cartao.jsx'
import Etiqueta from '../components/Etiqueta.jsx'
import { contatos, pessoaCuidada } from '../data/pessoa.js'
import { dataDoPlano, horariosDoPlano } from '../data/rotina.js'

export default function PlanoDeHoje() {
  const [aviso, setAviso] = useState('')

  async function enviarLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setAviso('Link do plano copiado. Cole na conversa com quem vai cuidar.')
    } catch {
      setAviso('Não foi possível copiar. Copie o endereço desta página.')
    }
  }

  return (
    <>
      <CabecalhoDaPagina
        apoio={dataDoPlano}
        titulo="Plano de hoje"
        descricao={`Tudo o que você precisa para cuidar da ${pessoaCuidada.nome} hoje.`}
      />

      <section
        aria-labelledby="titulo-atencao"
        className="flex flex-col gap-2 rounded-lg border border-status-danger bg-status-danger-soft p-4"
      >
        <h2 id="titulo-atencao" className="flex items-center gap-2 text-heading font-bold text-status-danger">
          <CircleAlert size={24} aria-hidden="true" />
          Atenção
        </h2>
        <ul className="m-0 flex list-none flex-col gap-1 p-0 font-semibold">
          {pessoaCuidada.atencao.map((linha) => (
            <li key={linha}>{linha}</li>
          ))}
        </ul>
      </section>

      <Cartao titulo="Horários do dia">
        <ol className="m-0 flex list-none flex-col gap-4 p-0 pt-1">
          {horariosDoPlano.map((h) => (
            <li key={h.hora} className="flex gap-3">
              <time dateTime={h.hora} className="w-13 shrink-0 text-label font-semibold text-brand-teal-strong">
                {h.hora}
              </time>
              <div className="flex flex-col gap-1">
                <h3 className="font-body text-body font-semibold">{h.titulo}</h3>
                <p className="text-caption font-medium text-text-secondary">{h.detalhe}</p>
                {h.naoPodeAtrasar ? <Etiqueta tom="laranja">Não pode atrasar</Etiqueta> : null}
              </div>
            </li>
          ))}
        </ol>
      </Cartao>

      <Cartao titulo="O que acalma">
        <p>{pessoaCuidada.oQueAcalma}</p>
      </Cartao>

      <Cartao titulo="O que evitar">
        <p>{pessoaCuidada.oQueEvitar}</p>
      </Cartao>

      <Cartao titulo="Se precisar de ajuda">
        <ul className="m-0 flex list-none flex-col gap-3 p-0">
          {contatos.map((c) => (
            <li key={c.id} className="flex items-center gap-3">
              <div className="flex min-w-0 flex-1 flex-col">
                <p className="font-semibold">{c.nome}</p>
                <p className="text-caption font-medium text-text-secondary">{c.papel}</p>
              </div>
              <Botao
                href={`tel:${c.telefone}`}
                variante={c.principal ? 'primario' : 'secundario'}
                icone={Phone}
                className="shrink-0"
                aria-label={`${c.rotulo}: ${c.nome}`}
              >
                {c.rotulo}
              </Botao>
            </li>
          ))}
        </ul>
      </Cartao>

      <p role="status" aria-live="polite" className={aviso ? 'nao-imprimir rounded-md bg-status-success-soft px-4 py-2 text-label font-semibold text-status-success' : 'sr-only'}>
        {aviso}
      </p>

      <div className="nao-imprimir flex flex-col gap-3">
        <Botao icone={Send} larguraTotal onClick={enviarLink}>
          Enviar o plano por link
        </Botao>
        <Botao variante="secundario" icone={Printer} larguraTotal onClick={() => window.print()}>
          Imprimir
        </Botao>
      </div>

      <p className="text-caption font-medium text-text-secondary">
        As informações foram dadas pela família e não substituem a orientação médica.
      </p>
    </>
  )
}
