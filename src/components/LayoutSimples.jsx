import { Outlet, useLocation } from "react-router-dom";
import Marca from "./Marca.jsx";
import PularParaConteudo from "./PularParaConteudo.jsx";

// Estrutura das páginas de entrada e de cadastro: uma coluna, sem navegação do app.
export default function LayoutSimples() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-dvh flex-col bg-bg-page">
      <PularParaConteudo />
      <header className="px-6 pt-6">
        <div className="mx-auto w-full max-w-md">
          <Marca />
        </div>
      </header>
      <main
        id="conteudo"
        tabIndex={-1}
        className="mx-auto flex w-full max-w-md flex-1 flex-col gap-6 px-6 py-6"
      >
        <div key={pathname} className="entrada flex flex-1 flex-col gap-6">
          <Outlet />
        </div>
      </main>
      <footer className="px-6 pb-6 text-center text-caption text-text-secondary">
        <p>
          Protótipo acadêmico. Nenhum dado é enviado: tudo fica só neste
          navegador.
        </p>
      </footer>
    </div>
  );
}
