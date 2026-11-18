import { Check } from "lucide-react";

// Opção de múltipla escolha. É uma caixa de seleção de verdade,
// então funciona com teclado e leitor de tela.
export default function Opcao({ icone: Icone, children, ...resto }) {
  return (
    <label className="relative flex min-h-14 transition-colors duration-200 cursor-pointer items-center gap-3 rounded-md border border-border-default bg-bg-surface p-4 has-[:checked]:border-2 has-[:checked]:border-brand-teal-strong has-[:checked]:bg-brand-teal-soft has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-orange-strong">
      <input type="checkbox" className="peer sr-only" {...resto} />
      {Icone ? (
        <Icone size={24} aria-hidden="true" className="shrink-0" />
      ) : null}
      <span className="flex-1 text-body font-semibold">{children}</span>
      <span
        aria-hidden="true"
        className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-text-secondary bg-bg-surface text-transparent transition duration-200 motion-safe:peer-checked:scale-110 peer-checked:border-brand-teal-strong peer-checked:bg-brand-teal-strong peer-checked:text-text-on-brand"
      >
        <Check size={14} strokeWidth={3} />
      </span>
    </label>
  );
}
