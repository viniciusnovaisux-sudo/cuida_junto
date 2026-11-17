import { ChevronDown } from 'lucide-react'
import CabecalhoDaPagina from '../components/CabecalhoDaPagina.jsx'
import { direitos } from '../data/direitos.js'

export default function Direitos() {
  return (
    <>
      <CabecalhoDaPagina
        apoio="Para quem cuida"
        titulo="Direitos e apoios"
        descricao="Veja o que existe para ajudar você e a pessoa que você cuida. Toque em um item para saber como buscar."
      />

      <ul className="m-0 flex list-none flex-col gap-3 p-0">
        {direitos.map((d) => (
          <li key={d.id}>
            <details className="group rounded-lg border border-border-default bg-bg-surface">
              <summary className="flex cursor-pointer list-none items-center gap-3 rounded-lg p-4 [&::-webkit-details-marker]:hidden">
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <h2 className="font-body text-body font-semibold">{d.titulo}</h2>
                  <p className="text-caption font-medium text-text-secondary">{d.descricao}</p>
                  <p className="text-caption font-medium text-brand-teal-strong">Onde: {d.onde}</p>
                </div>
                <ChevronDown
                  size={24}
                  aria-hidden="true"
                  className="shrink-0 text-brand-teal-strong transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="flex flex-col gap-2 border-t border-border-default p-4">
                <h3 className="font-body text-label font-semibold">Como buscar</h3>
                <p>{d.comoBuscar}</p>
                <p className="text-caption font-medium">
                  Fonte:{' '}
                  <a
                    href={d.fonte.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-teal-strong underline"
                  >
                    {d.fonte.nome}
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </p>
              </div>
            </details>
          </li>
        ))}
      </ul>

      <p className="text-caption font-medium text-text-secondary">
        As regras podem mudar. Confirme o seu caso no CRAS ou na unidade de saúde.
      </p>
    </>
  )
}
