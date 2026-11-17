import { useId } from 'react'

// Campo de texto do design system.
// O rótulo fica sempre visível e o erro aparece em texto, ligado ao campo.
export default function Campo({ rotulo, ajuda, erro, className = '', ...resto }) {
  const id = useId()
  const idAjuda = `${id}-ajuda`
  const mensagem = erro || ajuda

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-label font-semibold">
        {rotulo}
      </label>
      <input
        id={id}
        aria-invalid={erro ? 'true' : undefined}
        aria-describedby={mensagem ? idAjuda : undefined}
        className={`min-h-14 w-full rounded-md bg-bg-surface px-4 py-3 text-body text-text-primary placeholder:text-text-secondary ${
          erro
            ? 'border-2 border-status-danger'
            : 'border border-border-default focus:border-brand-teal-strong'
        }`}
        {...resto}
      />
      {mensagem ? (
        <p
          id={idAjuda}
          className={`text-caption font-medium ${erro ? 'text-status-danger' : 'text-text-secondary'}`}
        >
          {erro ? <span className="sr-only">Erro: </span> : null}
          {mensagem}
        </p>
      ) : null}
    </div>
  )
}
