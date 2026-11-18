// Progresso do cadastro inicial. O texto diz o passo; as barras são só reforço visual.
export default function Progresso({ passo, total = 3 }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-label font-semibold text-text-secondary">
        Passo {passo} de {total}
      </p>
      <div className="flex gap-2" aria-hidden="true">
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors duration-500 ${i < passo ? "bg-brand-teal-strong" : "bg-border-default"}`}
          />
        ))}
      </div>
    </div>
  );
}
