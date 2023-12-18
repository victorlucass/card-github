export function formatterDatePtBr(date: string) {
  return new Date(date).toLocaleDateString("pt-BR");
}