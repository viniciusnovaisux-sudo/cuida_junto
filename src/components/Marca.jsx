import { Link } from "react-router-dom";
import simbolo from "../assets/simbolo-cuida-junto.png";

// Marca do Cuida Junto: símbolo do logo e nome.
// Nas barras de navegação, o nome some no celular para dar espaço aos botões.
export default function Marca({
  comLink = true,
  nomeSoEmTelasMaiores = false,
}) {
  const conteudo = (
    <>
      <img
        src={simbolo}
        alt=""
        width="219"
        height="192"
        className="h-10 w-auto"
      />
      <span
        className={`font-display text-heading font-extrabold whitespace-nowrap text-brand-teal-strong ${
          nomeSoEmTelasMaiores ? "hidden sm:inline" : ""
        }`}
      >
        Cuida Junto
      </span>
    </>
  );

  if (!comLink)
    return <div className="flex items-center gap-2">{conteudo}</div>;

  return (
    <Link
      to="/"
      className="flex items-center gap-2 rounded-md"
      aria-label="Cuida Junto, página inicial"
    >
      {conteudo}
    </Link>
  );
}
