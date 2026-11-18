import { useEffect, useRef, useState } from "react";

// Faz o conteúdo aparecer com suavidade quando entra na tela.
// Sem suporte a IntersectionObserver, o conteúdo aparece direto.
export default function Revelar({
  como: Tag = "div",
  atraso = 0,
  className = "",
  children,
  ...resto
}) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const no = ref.current;
    if (!no || typeof IntersectionObserver === "undefined") {
      setVisivel(true);
      return undefined;
    }
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          observador.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    observador.observe(no);
    return () => observador.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`revelar ${visivel ? "visivel" : ""} ${className}`}
      style={atraso ? { "--atraso": `${atraso}ms` } : undefined}
      {...resto}
    >
      {children}
    </Tag>
  );
}
