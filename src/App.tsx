import { ThemeProvider } from "styled-components";
import { Cards } from "./pages/Cards";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { themeDark } from "./styles/theme/dark";

export function App() {
  const [theme, setTheme] = useState(themeDark);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Cards />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
