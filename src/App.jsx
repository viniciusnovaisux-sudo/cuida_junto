import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import LayoutSimples from './components/LayoutSimples.jsx'
import Cadastro from './pages/Cadastro.jsx'
import CriarConta from './pages/CriarConta.jsx'
import Direitos from './pages/Direitos.jsx'
import Entrar from './pages/Entrar.jsx'
import EsqueciSenha from './pages/EsqueciSenha.jsx'
import Hoje from './pages/Hoje.jsx'
import LandingPage from './pages/LandingPage.jsx'
import NaoEncontrada from './pages/NaoEncontrada.jsx'
import PlanoDeHoje from './pages/PlanoDeHoje.jsx'
import Semana from './pages/Semana.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<LayoutSimples />}>
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/criar-conta" element={<CriarConta />} />
        <Route path="/esqueci-senha" element={<EsqueciSenha />} />
        <Route path="/comecar/:passo" element={<Cadastro />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/hoje" element={<Hoje />} />
        <Route path="/semana" element={<Semana />} />
        <Route path="/plano" element={<PlanoDeHoje />} />
        <Route path="/direitos" element={<Direitos />} />
      </Route>
      <Route path="*" element={<NaoEncontrada />} />
    </Routes>
  )
}
