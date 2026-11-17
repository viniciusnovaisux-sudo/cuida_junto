import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/logo-cuida-junto.png'
import PularParaConteudo from './PularParaConteudo.jsx'

// Estrutura das páginas de entrada e de cadastro: uma coluna, sem navegação do app.
export default function LayoutSimples() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg-page">
      <PularParaConteudo />
      <header className="px-6 pt-6">
        <div className="mx-auto w-full max-w-md">
          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-md"
            aria-label="Cuida Junto, página inicial"
          >
            <img src={logo} alt="" width="48" height="48" className="size-12" />
            <span className="font-display text-heading font-extrabold text-brand-teal-strong">
              Cuida Junto
            </span>
          </Link>
        </div>
      </header>
      <main
        id="conteudo"
        tabIndex={-1}
        className="mx-auto flex w-full max-w-md flex-1 flex-col gap-6 px-6 py-6"
      >
        <Outlet />
      </main>
      <footer className="px-6 pb-6 text-center text-caption text-text-secondary">
        <p>Protótipo acadêmico. Nenhum dado é enviado: tudo fica só neste navegador.</p>
      </footer>
    </div>
  )
}
