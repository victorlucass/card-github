import { useParams } from "react-router-dom";
import { service } from "../../services";
import { Card } from "./components";
import { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../../context/useData";
import { Loader } from "../components/loader/Loader";
import toast from "react-hot-toast";

export function Cards() {
  const { username } = useParams();
  const { repos, setRepos, loading } = useContext(AppContext);

  const sortRepositories = (repos: any[]) => {
    return repos.sort((a, b) => {
      return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
    });
  };

  const fetchRepo = useCallback(
    async (username: string) => {
      const data = await service.getReposGitHub(username);
      setRepos(sortRepositories(data));

      data.length === 0 &&
        toast("Usuário não possui repositórios", {
          icon: "🤨",
          duration: 5000,
        });
    },
    [setRepos]
  );

  useEffect(() => {
    if (username) {
      fetchRepo(username);
    }
  }, [fetchRepo, setRepos, username]);

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
          {repos.map((repo) => (
            <Card.Content key={repo.id}>
              <Card.Main {...repo} />
              <Card.Info />
            </Card.Content>
          ))}
        </Card.Root>
      )}
    </>
  );
}
