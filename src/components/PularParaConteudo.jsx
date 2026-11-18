// Primeiro item focável da página, para quem navega pelo teclado.
export default function PularParaConteudo() {
  return (
    <a
      href="#conteudo"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-20 focus:rounded-md focus:bg-brand-teal-strong focus:px-4 focus:py-3 focus:text-text-on-brand"
    >
      Pular para o conteúdo
    </a>
  );
}
