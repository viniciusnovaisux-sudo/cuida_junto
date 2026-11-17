import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/logo-cuida-junto.png'
import BarraDeNavegacao from './BarraDeNavegacao.jsx'
import PularParaConteudo from './PularParaConteudo.jsx'

// Estrutura das páginas internas: header, nav, main e footer.
export default function Layout() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg-page">
      <PularParaConteudo />
      <header className="nao-imprimir border-b border-border-default bg-bg-surface">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-5 py-2">
          <Link to="/" className="flex items-center gap-2 rounded-md" aria-label="Cuida Junto, página inicial">
            <img src={logo} alt="" width="40" height="40" className="size-10 mix-blend-multiply" />
            <span className="font-display text-heading font-extrabold text-brand-teal-strong">
              Cuida Junto
            </span>
          </Link>
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col md:flex-row">
        <BarraDeNavegacao />
        <main id="conteudo" tabIndex={-1} className="flex-1 px-5 pt-6 pb-28 md:px-8 md:pb-10">
          <div className="mx-auto flex max-w-xl flex-col gap-5">
            <Outlet />
          </div>
        </main>
      </div>
      <footer className="nao-imprimir hidden border-t border-border-default px-5 py-4 text-center text-caption text-text-secondary md:block">
        <p>Cuida Junto é um protótipo acadêmico com dados simulados. Global Solution FIAP 2026.</p>
      </footer>
    </div>
  )
}
