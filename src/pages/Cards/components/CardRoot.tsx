import { CardList } from "../styles";

export function CardRoot({ children }: { children: React.ReactNode }) {
  return <CardList>{children}</CardList>;
}
