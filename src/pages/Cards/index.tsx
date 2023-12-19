import { useParams } from "react-router-dom";
import { service } from "../../services";
import { Card } from "./components";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/useData";
import { Loader } from "../components/loader/Loader";

export function Cards() {
  const { username } = useParams();
  const { repos ,setRepos, loading } = useContext(AppContext);

  const fetchRepo = async (username: string) => {
    const res = await service.getReposGitHub(username);
    return res;
  };

  useEffect(() => {
    username
      ? fetchRepo(username).then((data) => {
          setRepos(data);
        })
      : null;
  }, [setRepos, username]);

  useEffect(() => {
    return () => {
      setRepos([]);
    };
  }, [setRepos]);

  return (
    <>
      {loading ? (
        <div className="center">
          <Loader />
        </div>
      ) : (
        <Card.Root>
          {repos.length > 0 ? (
            repos.map((repo) => (
              <Card.Content key={repo.id}>
                <Card.Main {...repo} />
                <Card.Info />
              </Card.Content>
            ))
          ) : (
            <div
              className="center"
            >
              Sem repositorios para mostrar 🤨
            </div>
          )}
        </Card.Root>
      )}
    </>
  );
}
