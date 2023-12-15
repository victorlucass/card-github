import { ThemeProvider } from "styled-components";
import { Cards } from "./pages/Cards";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { themeDark } from "./styles/theme/dark";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";

export function App() {
  const [theme, setTheme] = useState(themeDark);
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
