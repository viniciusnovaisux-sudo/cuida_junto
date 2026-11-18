// Título de cada página: linha de apoio e h1.
export default function CabecalhoDaPagina({ apoio, titulo, descricao }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-caption font-medium text-text-secondary">{apoio}</p>
      <h1 className="text-title font-extrabold">{titulo}</h1>
      {descricao ? (
        <p className="mt-2 text-body text-text-secondary">{descricao}</p>
      ) : null}
    </div>
  );
}
