import { useContext } from "react";
import { useDataContext } from "../../context/useData";

export function Footer() {
  const { useData } = useContext(useDataContext);

  console.log(useData)

  return (
    <>
      <h1
        style={{
          color: "red",
        }}
      >
        {
          useData.login
        }
      </h1>
    </>
  );
}