import Botao from '../components/Botao.jsx'

export default function NaoEncontrada() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col justify-center gap-4 px-6 text-center">
      <h1 className="text-title font-extrabold">Página não encontrada</h1>
      <p className="text-text-secondary">O endereço pode ter mudado ou não existe.</p>
      <Botao para="/" larguraTotal>
        Voltar ao início
      </Botao>
    </main>
  )
}
