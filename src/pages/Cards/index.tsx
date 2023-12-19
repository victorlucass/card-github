import { useParams } from "react-router-dom";
import { service } from "../../services";
import { Card } from "./components";
import { useContext, useEffect, useState } from "react";
import { useDataContext } from "../../context/useData";
import { Loader } from "../components/loader/Loader";

export function Cards() {
  const [reposData, setReposData] = useState([]);
  const { username } = useParams();
  const { setRepos, loading } = useContext(useDataContext);

  const fetchRepo = async (username: string) => {
    const res = await service.getReposGitHub(username);
    return res;
  };

  useEffect(() => {
    username
      ? fetchRepo(username).then((data) => {
          setRepos(data.length);
          setReposData(data);
        })
      : null;
  }, [setRepos, username]);

  return (
    <>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      ) : (
        <Card.Root>
          {reposData.length > 0 ? reposData.map((repo: any) => (
            <Card.Content key={repo.id}>
              <Card.Main {...repo} />
              <Card.Info />
            </Card.Content>
          )) : <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>Sem repositorios para mostrar 🤨</div>}
        </Card.Root>
      )}
    </>
  );
}
