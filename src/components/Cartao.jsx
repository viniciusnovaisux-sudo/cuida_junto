// Cartão branco com borda, usado para agrupar conteúdo.
export default function Cartao({ titulo, children, className = '' }) {
  return (
    <section
      className={`flex flex-col gap-2 rounded-lg border border-border-default bg-bg-surface p-4 ${className}`}
    >
      {titulo ? <h2 className="text-heading font-bold">{titulo}</h2> : null}
      {children}
    </section>
  )
}
