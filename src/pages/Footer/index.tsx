import { useContext } from "react";
import { AppContext } from "../../context/useData";
import { AuthorExtras, CreditsContainer, NoneContainer } from "./styled";
import { HouseLine, Users } from "phosphor-react";

export function Footer() {
  const { useData } = useContext(AppContext);
  const { location, followers, following } = useData;

  return (
    <>
      {useData === null ? (
        <NoneContainer>
          <span>nenhuma informação</span>
        </NoneContainer>
      ) : (
        <AuthorExtras>
          <span>
            <HouseLine weight="fill" />
            {location}
          </span>

          <span>
            <Users weight="fill" />
            {followers} seguidores
          </span>

          <span>
            <Users weight="fill" />
            {following} seguindo
          </span>
        </AuthorExtras>
      )}
      <CreditsContainer>
        <a
          href="https://www.linkedin.com/in/victorlucas-am/"
          target="_blank"
          rel="noreferrer"
        >
          Desenvolvido por <i>Victor Lucas</i>
        </a>
      </CreditsContainer>
    </>
  );
}
