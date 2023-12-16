import { useContext } from "react";
import { useDataContext } from "../../context/useData";
import { AuthorExtras } from "./styled";
import { HouseLine, Users } from "phosphor-react";

export function Footer() {
  const { useData } = useContext(useDataContext);
  const { location, followers, following } = useData;


  return (
    <>
      { !location && !followers && !following ? <span>none</span> : (
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
    </>
  );
}
