import { useCallback, useContext, useEffect, useRef, useState } from "react";
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
import toast from "react-hot-toast";
import { removeSpace } from "../../utils/removeSpace";

export function HeaderPage() {
  const { setUseData } = useContext(useDataContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { username } = useParams();
  const { loading, setLoading } = useContext(useDataContext);
  const [inputValue, setInputValue] = useState("");

  const handleFetchData = useCallback(async () => {
    setLoading(true);
    const { data } = await service
      .getUserGitHub(
        inputRef.current
          ? removeSpace(inputRef.current.value)
          : "octocat"
      )
      .catch(({ response: { data: err } }) => {
        toast.error(err.message);
        setUseData({});
        navigate("", { replace: true });
        inputRef.current!.value = "";
      }).finally(() => setLoading(false));

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
    toast(`Oi! ${login}`, { icon: "👋" });
  }, [setLoading, setUseData, navigate]);

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
            placeholder="Pesquise um usuário"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <HeaderButton
            type="submit"
            onClick={handleFetchData}
            disabled={loading || !inputValue}           
          >
            Buscar
          </HeaderButton>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
