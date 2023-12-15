import { useCallback, useContext, useEffect, useRef } from "react";
import { UserProps } from "../../interfaces/userProps";
import { service } from "../../services";
import { useDataContext } from "../../context/useData";
import { useNavigate, useParams } from "react-router-dom";
import {
  HeaderButton,
  HeaderContainer,
  HeaderContent,
  HeaderInput,
} from "./styled";
import toast, { Toaster } from "react-hot-toast";

export function HeaderPage() {
  const { setUseData } = useContext(useDataContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { username } = useParams();

  const handleFetchData = useCallback(async () => {
    const { data } = await service
      .getUserGitHub(
        inputRef.current
          ? inputRef.current.value.split(" ").join("")
          : "octocat"
      )
      .catch(({response: {data: err}}) => {
        toast.error(err.message)
      });

    const { avatar_url, login, location, followers, following } = data;

    const user: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUseData(user);
    navigate(`/${login}`, { replace: true });
    toast(`Oi! ${login}`, {icon: '👋'});
  }, [setUseData, navigate]);

  useEffect(() => {
    if (username) {
      inputRef.current!.value = username;
      handleFetchData();
    }
  }, [handleFetchData, username]);

  return (
    <>
      <HeaderContainer>
        <h1>Git Card</h1>
        <HeaderContent>
          <HeaderInput
            type="text"
            ref={inputRef}
            onKeyDown={(e) => e.key === "Enter" && handleFetchData()}
          />
          <HeaderButton type="submit" onClick={handleFetchData}>
            Buscar
          </HeaderButton>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
