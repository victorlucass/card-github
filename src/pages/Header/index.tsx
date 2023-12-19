import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { UserProps } from "../../interfaces/userProps";
import { service } from "../../services";
import { AppContext } from "../../context/useData";
import { useNavigate, useParams } from "react-router-dom";
import {
  HeaderApresentation,
  HeaderButton,
  HeaderContainer,
  HeaderContent,
  HeaderInput,
} from "./styled";
import toast from "react-hot-toast";
import { removeSpace } from "../../utils/removeSpace";
import { Toggle } from "../components/toggle/Toggle";

export function HeaderPage() {
  const { setUseData } = useContext(AppContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { username } = useParams();
  const { loading, setLoading } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");

  const handleFetchData = useCallback(async () => {
    setLoading(true);
    const data = await service
      .getUserGitHub(
        inputRef.current ? removeSpace(inputRef.current.value) : "octocat"
      )
      .catch((err) => {
        toast.error(err.response.data.message, {icon: "❌"});
        setUseData({
          avatar_url: "",
          login: "",
          location: "",
          followers: 0,
          following: 0,
        });
        setInputValue("");
        navigate("", { replace: true });
        inputRef.current!.value = "";
      })
      .finally(() => setLoading(false));    
      data && navigate(`/${data.login}`);
      
    setUseData(data as UserProps);

    return data as UserProps;

  }, [navigate, setLoading, setUseData]);

  useEffect(() => {
    if (username) {
      inputRef.current!.value = username;
      setInputValue(username);
      handleFetchData().then((res) => {
        toast(`Bem vindo! ${res.login}`, {
          icon: "👋",
          duration: 5000,
        })
      });
    }
  }, [handleFetchData, username]);

  return (
    <>
      <HeaderContainer>
        <HeaderApresentation>
          <h1>Git Card</h1>
          <Toggle />
        </HeaderApresentation>
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
            disabled={loading || !inputValue || inputValue === username}
          >
            Buscar
          </HeaderButton>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
