import { useContext, useRef } from "react";
import { UserProps } from "../../interfaces/userProps";
import { service } from "../../services";
import { useDataContext } from "../../context/useData";
import { useNavigate } from "react-router-dom";

export function HeaderPage() {
  const {setUseData } = useContext(useDataContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFetchData = async () => {
    const { data } = (await service.getUserGitHub(inputRef.current ? inputRef.current.value.split(' ').join('') : "octocat")) ;
    const { avatar_url, login, location, followers, following } = data;
    const user: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    console.log(user);
    setUseData(user);
    navigate(`/card-github`, { replace: true });
  };


  return (
    <>
      <h1>Header</h1>
      <input type="text" ref={inputRef} onKeyDown={(e) => e.key === "Enter" && handleFetchData()} />
      <button type="submit" onClick={handleFetchData}>
        Fetch
      </button>
    </>
  );
}
