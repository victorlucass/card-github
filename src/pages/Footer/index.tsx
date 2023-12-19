import { useContext } from "react";
import { AppContext } from "../../context/useData";
import { AuthorExtras, CreditsContainer, NoneContainer } from "./styled";
import { HouseLine, Users } from "phosphor-react";
import { useParams } from "react-router-dom";

export function Footer() {
  const { useData } = useContext(AppContext);
  const { username } = useParams();

  return (
    <>
      {!username ? (
        <NoneContainer>
          <span>nenhuma informação</span>
        </NoneContainer>
      ) : (
        <AuthorExtras>
          <span>
            <HouseLine weight="fill" />
            {useData.location}
          </span>

          <span>
            <Users weight="fill" />
            {useData.followers} seguidores
          </span>

          <span>
            <Users weight="fill" />
            {useData.following} seguindo
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
