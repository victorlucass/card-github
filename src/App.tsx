import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { themeDark } from "./styles/theme/dark";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { useDataContext } from "./context/useData/index";

export function App() {
  const [theme, setTheme] = useState(themeDark);
  const [useData, setUseData] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <useDataContext.Provider
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
        </useDataContext.Provider>
      </ThemeProvider>
    </>
  );
}
