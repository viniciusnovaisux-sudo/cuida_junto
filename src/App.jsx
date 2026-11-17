import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import BoasVindas from './pages/BoasVindas.jsx'
import Direitos from './pages/Direitos.jsx'
import Hoje from './pages/Hoje.jsx'
import NaoEncontrada from './pages/NaoEncontrada.jsx'
import PlanoDeHoje from './pages/PlanoDeHoje.jsx'
import Semana from './pages/Semana.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BoasVindas />} />
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
