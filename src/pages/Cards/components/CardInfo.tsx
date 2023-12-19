import { useContext, useEffect, useState } from "react";
import {
  AuthorAvatar,
  AuthorNamePrefix,
  CardInfoContainer,
  HalfCircle,
} from "../styles";
import { useDataContext } from "../../../context/useData";

//name,pushed_at, url, description, default_branch, forks, language

export function CardInfo() {
  const { useData } = useContext(useDataContext);
  const { avatar_url, login } = useData;

  return (
    <CardInfoContainer>
      <AuthorAvatar>
        <img src={avatar_url} alt="avatar" />
      </AuthorAvatar>
      <HalfCircle viewBox="0 0 106 57">
        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
      </HalfCircle>
      <div>
        <AuthorNamePrefix>
          Autor
        </AuthorNamePrefix>
        {login}
      </div>
    </CardInfoContainer>
  );
}
