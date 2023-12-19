import React, { useContext, useEffect } from "react";
import { CardList } from "../styles";
import { AppContext } from "../../../context/useData";

export function CardRoot({ children }: { children: React.ReactNode }) {
  const refCardList = React.useRef<HTMLDivElement>(null);
  const [icon, setIcon] = React.useState("");

  const { repos } = useContext(AppContext);

  useEffect(() => {
    const handleScroll = () => {
      if (
        refCardList.current &&
        refCardList.current.scrollLeft + refCardList.current.clientWidth >=
          refCardList.current.scrollWidth &&
        repos.length >= 5
      ) {
        setIcon("←");
      } else {
        repos.length >= 5 && setIcon("→");
      }
    };

    refCardList.current?.addEventListener("scroll", handleScroll);

    return () => {
      refCardList.current?.removeEventListener("scroll", handleScroll);
    };
  }, [repos]);

  return (
    <CardList icon={icon} ref={refCardList}>
      {children}
    </CardList>
  );
}
