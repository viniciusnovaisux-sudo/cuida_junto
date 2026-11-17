import { useState } from 'react'
import { Link } from 'react-router-dom'
import Botao from '../components/Botao.jsx'
import Campo from '../components/Campo.jsx'
import { emailValido } from '../utils/validacao.js'

export default function EsqueciSenha() {
  const [erro, setErro] = useState('')
  const [enviado, setEnviado] = useState(false)

  function enviar(evento) {
    evento.preventDefault()
    const email = String(new FormData(evento.currentTarget).get('email') || '').trim()
    if (!emailValido(email)) {
      setErro('Digite um e-mail válido, como nome@email.com.')
      setEnviado(false)
      evento.currentTarget.elements.email.focus()
      return
    }
    setErro('')
    setEnviado(true)
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-display font-extrabold">Esqueci minha senha</h1>
        <p className="text-text-secondary">
          Digite o e-mail da sua conta. Enviamos um link para você criar uma senha nova.
        </p>
      </div>
      <form onSubmit={enviar} noValidate className="flex flex-1 flex-col gap-4">
        <Campo
          rotulo="E-mail"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          erro={erro}
        />
        <p role="status" className="text-status-success">
          {enviado
            ? 'Pronto. Em um app real, o link chegaria ao seu e-mail. Nesta demonstração, nada é enviado.'
            : ''}
        </p>
        <div className="mt-auto flex flex-col items-center gap-4 pt-6">
          <Botao type="submit" larguraTotal>
            Enviar link
          </Botao>
          <Link to="/entrar" className="text-label font-semibold text-brand-teal-strong underline">
            Voltar para Entrar
          </Link>
        </div>
      </form>
    </>
  )
}
