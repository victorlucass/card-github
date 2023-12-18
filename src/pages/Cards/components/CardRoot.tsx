import React, { useContext, useEffect } from "react";
import { CardList } from "../styles";
import { useDataContext } from "../../../context/useData";

export function CardRoot({ children }: { children: React.ReactNode }) {
  const refCardList = React.useRef<HTMLDivElement>(null);
  const [icon, setIcon] = React.useState("");
  const { repos } = useContext(useDataContext);

  useEffect(() => {
    repos >= 5 && setIcon("→");
  }, [repos]);

  useEffect(() => {
    refCardList.current &&
      refCardList.current.addEventListener("scroll", () => {
        if (refCardList.current !== null) {
          if (
            refCardList.current.scrollLeft + refCardList.current.clientWidth >=
            refCardList.current.scrollWidth
          ) {
            setIcon("←");
          } else {
            setIcon("→");
          }
        }
      });
  }, []);

  return (
    <CardList icon={icon} ref={refCardList}>
      {children}
    </CardList>
  );
}
