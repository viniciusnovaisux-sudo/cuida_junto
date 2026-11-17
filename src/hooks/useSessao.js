import useEstadoSalvo from './useEstadoSalvo.js'

// Sessão de demonstração. Não há backend: a "conta" fica só no navegador.
export default function useSessao() {
  const [sessao, setSessao] = useEstadoSalvo('cuida-junto:sessao', null)

  return {
    sessao,
    entrar: (dados) => setSessao(dados),
    sair: () => setSessao(null),
  }
}
