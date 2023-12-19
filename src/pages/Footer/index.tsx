import { useContext } from "react";
import { useDataContext } from "../../context/useData";
import { AuthorExtras, CreditsContainer, NoneContainer } from "./styled";
import { HouseLine, Users } from "phosphor-react";

export function Footer() {
  const { useData } = useContext(useDataContext);
  const { location, followers, following } = useData;

  return (
    <>
      {!location && !followers && !following ? (
        <NoneContainer>
          <span>nenhum repositório</span>
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
