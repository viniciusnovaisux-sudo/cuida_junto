import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Botao from '../components/Botao.jsx'
import Campo from '../components/Campo.jsx'
import useSessao from '../hooks/useSessao.js'
import { emailValido } from '../utils/validacao.js'

export default function Entrar() {
  const navegar = useNavigate()
  const { entrar } = useSessao()
  const [erros, setErros] = useState({})
  const formulario = useRef(null)

  function enviar(evento) {
    evento.preventDefault()
    const dados = new FormData(evento.currentTarget)
    const email = String(dados.get('email') || '').trim()
    const senha = String(dados.get('senha') || '')
    const novos = {}
    if (!emailValido(email)) novos.email = 'Digite um e-mail válido, como nome@email.com.'
    if (!senha) novos.senha = 'Digite a sua senha.'
    setErros(novos)

    const primeiro = Object.keys(novos)[0]
    if (primeiro) {
      formulario.current?.elements[primeiro]?.focus()
      return
    }
    entrar({ nome: 'Márcia', email })
    navegar('/hoje')
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-display font-extrabold">Entrar</h1>
        <p className="text-text-secondary">Use o e-mail da sua conta.</p>
      </div>
      <form ref={formulario} onSubmit={enviar} noValidate className="flex flex-1 flex-col gap-4">
        <Campo
          rotulo="E-mail"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          erro={erros.email}
        />
        <Campo
          rotulo="Senha"
          name="senha"
          type="password"
          autoComplete="current-password"
          erro={erros.senha}
        />
        <Link to="/esqueci-senha" className="w-fit text-label font-semibold text-brand-teal-strong underline">
          Esqueci minha senha
        </Link>
        <div className="mt-auto flex flex-col items-center gap-4 pt-6">
          <Botao type="submit" larguraTotal>
            Entrar
          </Botao>
          <p className="text-text-secondary">
            Ainda não tem conta?{' '}
            <Link to="/criar-conta" className="text-label font-semibold text-brand-teal-strong underline">
              Criar conta
            </Link>
          </p>
          <p className="text-center text-caption text-text-secondary">
            Nesta demonstração, qualquer e-mail e senha funcionam.
          </p>
        </div>
      </form>
    </>
  )
}
