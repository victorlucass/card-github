import { useParams } from "react-router-dom";
import { service } from "../../services";
import { Card } from "./components";
import { useContext, useEffect, useState } from "react";
import { useDataContext } from "../../context/useData";

export function Cards() {
  const [reposData, setReposData] = useState([]);
  const { username } = useParams();
  const {setRepos} = useContext(useDataContext);

  const fetchRepo = async (username: string) => {
    const res = await service.getReposGitHub(username);
    return res;
  };

  useEffect(() => {
    username ? fetchRepo(username).then((data) => {
      setRepos(data.length);
      setReposData(data);
    }) : null;
  }, [setRepos, username]);

  return (
    <Card.Root>
      {reposData.map((repo: any) => (
        <Card.Content key={repo.id}>
          <Card.Main {...repo} />
          <Card.Info />
        </Card.Content>
      ))}
    </Card.Root>
  );
}