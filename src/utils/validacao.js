// Validação simples, só para a demonstração.
export function emailValido(texto) {
  return /^\S+@\S+\.\S+$/.test(texto)
}
