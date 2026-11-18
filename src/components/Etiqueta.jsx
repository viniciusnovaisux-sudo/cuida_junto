const tons = {
  laranja: "bg-brand-orange-soft text-brand-orange-strong",
  alerta: "bg-status-danger-soft text-status-danger",
  feito: "bg-status-success-soft text-status-success",
  teal: "bg-brand-teal-soft text-brand-teal-strong",
};

// Etiqueta de estado. O estado sempre aparece em texto, nunca só pela cor.
export default function Etiqueta({ tom = "laranja", children }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-caption font-medium ${tons[tom]}`}
    >
      {children}
    </span>
  );
}
