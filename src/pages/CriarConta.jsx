import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Botao from '../components/Botao.jsx'
import Campo from '../components/Campo.jsx'
import useSessao from '../hooks/useSessao.js'
import { emailValido } from '../utils/validacao.js'

export default function CriarConta() {
  const navegar = useNavigate()
  const { entrar } = useSessao()
  const [erros, setErros] = useState({})
  const formulario = useRef(null)

  function enviar(evento) {
    evento.preventDefault()
    const dados = new FormData(evento.currentTarget)
    const nome = String(dados.get('nome') || '').trim()
    const email = String(dados.get('email') || '').trim()
    const senha = String(dados.get('senha') || '')
    const novos = {}
    if (!nome) novos.nome = 'Digite o seu nome.'
    if (!emailValido(email)) novos.email = 'Digite um e-mail válido, como nome@email.com.'
    if (senha.length < 8) novos.senha = 'A senha precisa ter pelo menos 8 caracteres.'
    setErros(novos)

    const primeiro = Object.keys(novos)[0]
    if (primeiro) {
      formulario.current?.elements[primeiro]?.focus()
      return
    }
    entrar({ nome, email })
    navegar('/comecar/pessoa')
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-display font-extrabold">Criar conta</h1>
        <p className="text-text-secondary">Leva menos de um minuto.</p>
      </div>
      <form ref={formulario} onSubmit={enviar} noValidate className="flex flex-1 flex-col gap-4">
        <Campo rotulo="Seu nome" name="nome" autoComplete="given-name" erro={erros.nome} />
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
          autoComplete="new-password"
          ajuda="Use pelo menos 8 caracteres."
          erro={erros.senha}
        />
        <div className="mt-auto flex flex-col items-center gap-4 pt-6">
          <Botao type="submit" larguraTotal>
            Criar conta
          </Botao>
          <p className="text-text-secondary">
            Já tem conta?{' '}
            <Link to="/entrar" className="text-label font-semibold text-brand-teal-strong underline">
              Entrar
            </Link>
          </p>
        </div>
      </form>
    </>
  )
}
