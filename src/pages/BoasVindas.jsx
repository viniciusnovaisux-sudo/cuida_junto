import { ClipboardList, Clock, Users } from "lucide-react";
import logo from "../assets/logo-cuida-junto.png";
import Botao from "../components/Botao.jsx";
import PularParaConteudo from "../components/PularParaConteudo.jsx";

const beneficios = [
  { icone: Clock, texto: "Lembretes de remédios, refeições e higiene" },
  { icone: Users, texto: "Tarefas divididas entre quem pode ajudar" },
  { icone: ClipboardList, texto: "Um plano pronto para quem cobrir o dia" },
];

export default function BoasVindas() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg-page">
      <PularParaConteudo />
      <div className="flex flex-1 flex-col md:flex-row md:items-center md:justify-center md:gap-16 md:px-10">
        <header className="flex justify-center px-6 pt-8 md:p-0">
          <img
            src={logo}
            alt="Cuida Junto"
            width="210"
            height="210"
            className="size-52 md:size-80"
          />
        </header>
        <main
          id="conteudo"
          tabIndex={-1}
          className="mx-auto flex w-full max-w-md flex-1 flex-col gap-5 px-6 py-5 md:mx-0 md:flex-none md:px-0"
        >
          <h1 className="text-center text-title font-extrabold md:text-left md:text-display">
            Cuidar fica mais leve quando é dividido
          </h1>
          <p className="text-center text-text-secondary md:text-left">
            Organize a rotina de quem você cuida e divida as tarefas com a
            família.
          </p>
          <ul className="m-0 flex list-none flex-col gap-3 rounded-lg border border-border-default bg-bg-surface p-4">
            {beneficios.map(({ icone: Icone, texto }) => (
              <li key={texto} className="flex items-center gap-3">
                <Icone
                  size={24}
                  aria-hidden="true"
                  className="shrink-0 text-brand-teal-strong"
                />
                <span>{texto}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-4">
            <Botao para="/hoje" larguraTotal>
              Começar
            </Botao>
            <Botao para="/plano" variante="secundario" larguraTotal>
              Recebi um convite
            </Botao>
          </div>
        </main>
      </div>
      <footer className="px-6 pb-6 text-center text-caption text-text-secondary">
        <p>
          Protótipo acadêmico com dados simulados. Global Solution FIAP 2026.
        </p>
      </footer>
    </div>
  );
}
