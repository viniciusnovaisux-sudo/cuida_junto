import { useEffect, useState } from 'react'

// Guarda o estado no navegador para a demonstração não se perder ao trocar de página.
// O acesso ao localStorage fica em try/catch porque ele pode estar bloqueado.
export default function useEstadoSalvo(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const salvo = window.localStorage.getItem(chave)
      return salvo ? JSON.parse(salvo) : valorInicial
    } catch {
      return valorInicial
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(chave, JSON.stringify(valor))
    } catch {
      // Sem armazenamento disponível: o estado vale só enquanto a página estiver aberta.
    }
  }, [chave, valor])

  return [valor, setValor]
}
