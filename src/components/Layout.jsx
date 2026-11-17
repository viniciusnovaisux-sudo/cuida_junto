import { Link, Outlet, useNavigate } from 'react-router-dom'
import BarraDeNavegacao from './BarraDeNavegacao.jsx'
import Marca from './Marca.jsx'
import PularParaConteudo from './PularParaConteudo.jsx'
import useSessao from '../hooks/useSessao.js'

// Estrutura das páginas internas: header, nav, main e footer.
export default function Layout() {
  const navegar = useNavigate()
  const { sessao, sair } = useSessao()

  function encerrar() {
    sair()
    navegar('/')
  }

  return (
    <div className="flex min-h-dvh flex-col bg-bg-page">
      <PularParaConteudo />
      <header className="nao-imprimir border-b border-border-default bg-bg-surface">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-5 py-2">
          <Marca />
          {sessao ? (
            <button
              type="button"
              onClick={encerrar}
              className="ml-auto min-h-12 rounded-full px-4 text-label font-semibold text-brand-teal-strong underline"
            >
              Sair
            </button>
          ) : (
            <Link
              to="/entrar"
              className="ml-auto inline-flex min-h-12 items-center rounded-full px-4 text-label font-semibold text-brand-teal-strong underline"
            >
              Entrar
            </Link>
          )}
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
