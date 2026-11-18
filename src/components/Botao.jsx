import { Link } from "react-router-dom";

const estilos = {
  primario:
    "bg-brand-teal-strong text-text-on-brand hover:bg-[#095a60] border border-transparent",
  secundario:
    "bg-transparent text-brand-teal-strong border border-brand-teal-strong hover:bg-brand-teal-soft",
  inverso:
    "bg-bg-surface text-brand-teal-strong border border-transparent hover:bg-brand-teal-soft",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-label font-semibold whitespace-nowrap transition duration-200 ease-out hover:shadow-md motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98]";

// Botão do design system. Vira link quando recebe "para" ou "href".
export default function Botao({
  variante = "primario",
  icone: Icone,
  larguraTotal = false,
  para,
  href,
  className = "",
  children,
  ...resto
}) {
  const classes = `${base} ${estilos[variante]} ${larguraTotal ? "w-full" : ""} ${className}`;
  const conteudo = (
    <>
      {Icone ? <Icone size={20} aria-hidden="true" /> : null}
      <span>{children}</span>
    </>
  );

  if (para) {
    return (
      <Link to={para} className={classes} {...resto}>
        {conteudo}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...resto}>
        {conteudo}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...resto}>
      {conteudo}
    </button>
  );
}
