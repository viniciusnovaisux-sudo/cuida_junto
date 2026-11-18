import { ClipboardList, House, Shield, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

const abas = [
  { para: "/hoje", rotulo: "Hoje", icone: House },
  { para: "/semana", rotulo: "Semana", icone: Users },
  { para: "/plano", rotulo: "Plano", icone: ClipboardList },
  { para: "/direitos", rotulo: "Direitos", icone: Shield },
];

// Barra inferior no celular; lista lateral em telas largas.
export default function BarraDeNavegacao() {
  return (
    <nav
      aria-label="Principal"
      className="nao-imprimir fixed inset-x-0 bottom-0 z-10 border-t border-border-default bg-bg-surface md:static md:w-56 md:shrink-0 md:border-t-0 md:border-r"
    >
      <ul className="m-0 flex list-none gap-0 p-2 md:flex-col md:gap-1 md:p-4">
        {abas.map(({ para, rotulo, icone: Icone }) => (
          <li key={para} className="flex-1 md:flex-none">
            <NavLink
              to={para}
              className={({ isActive }) =>
                `flex min-h-12 flex-col items-center gap-1 rounded-md px-1 py-2 text-caption font-medium md:flex-row md:gap-3 md:px-3 md:text-label ${
                  isActive
                    ? "bg-brand-teal-soft text-brand-teal-strong"
                    : "text-text-secondary hover:bg-bg-page"
                }`
              }
            >
              <Icone size={24} aria-hidden="true" />
              <span>{rotulo}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
