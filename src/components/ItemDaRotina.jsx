import { Check, Droplet, Pill, Utensils } from 'lucide-react'
import Etiqueta from './Etiqueta.jsx'

const icones = { remedio: Pill, refeicao: Utensils, higiene: Droplet }
const nomesDoTipo = { remedio: 'Remédio', refeicao: 'Refeição', higiene: 'Higiene' }

// Um horário da rotina, nos estados "a-fazer", "atrasado" e "feito".
export default function ItemDaRotina({ item, onMarcar }) {
  const feito = item.estado === 'feito'
  const atrasado = item.estado === 'atrasado'
  const Icone = feito ? Check : icones[item.tipo]

  return (
    <li
      className={`flex items-center gap-3 rounded-lg border bg-bg-surface p-4 ${
        atrasado ? 'border-status-danger' : 'border-border-default'
      }`}
    >
      <time className="w-13 shrink-0 text-label font-semibold" dateTime={item.hora}>
        {item.hora}
      </time>
      <span
        className={`flex shrink-0 rounded-full p-2 ${
          feito
            ? 'bg-status-success-soft text-status-success'
            : 'bg-brand-teal-soft text-brand-teal-strong'
        }`}
      >
        <Icone size={20} aria-hidden="true" />
        <span className="sr-only">{feito ? 'Feito' : nomesDoTipo[item.tipo]}</span>
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3 className="font-body text-body font-semibold">{item.titulo}</h3>
        <p className="text-caption font-medium text-text-secondary">
          {feito ? `Feito por ${item.feitoPor} às ${item.feitoAs}` : item.detalhe}
        </p>
        {item.naoPodeAtrasar && !feito ? <Etiqueta tom="laranja">Não pode atrasar</Etiqueta> : null}
        {atrasado ? <Etiqueta tom="alerta">Atrasado</Etiqueta> : null}
      </div>
      {!feito && onMarcar ? (
        <button
          type="button"
          onClick={() => onMarcar(item.id)}
          aria-label={`Marcar ${item.titulo} como feito`}
          className="flex size-12 shrink-0 items-center justify-center rounded-full border border-brand-teal-strong text-brand-teal-strong hover:bg-brand-teal-soft"
        >
          <Check size={20} aria-hidden="true" />
        </button>
      ) : null}
    </li>
  )
}
