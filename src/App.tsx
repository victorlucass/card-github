import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { themeDark } from "./styles/theme/dark";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { AppContext } from "./context/useData/index";
import { UserProps } from "./interfaces/userProps";

export function App() {
  const [theme, setTheme] = useState(themeDark);
  const [useData, setUseData] = useState<UserProps>({
    avatar_url: "",
    login: "",
    location: "",
    followers: 0,
    following: 0,
  });
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContext.Provider
          value={{
            useData,
            setUseData,
            repos,
            setRepos,
            loading,
            setLoading,
            theme,
            setTheme,
          }}
        >
          <BrowserRouter>
            <GlobalStyle />
            <Router />
          </BrowserRouter>
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
}
