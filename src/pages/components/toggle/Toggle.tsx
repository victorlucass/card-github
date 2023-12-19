import { useContext } from "react";
import { useDataContext } from "../../../context/useData";
import { ToggleContainer } from "./styled";
import { themeDark } from "../../../styles/theme/dark";
import { themeLight } from "../../../styles/theme/light";
import { Theme } from "../../../interfaces/theme";

export function Toggle() {
  const { setTheme, theme } = useContext(useDataContext);
  return (
    <ToggleContainer htmlFor="something" onChange={() => {
      setTheme((theme : Theme) => theme === themeDark ? themeLight : themeDark);
    }}>
      <span className="label-text">{ theme === themeDark ? "dark" : "light" }</span>
      <div className="switch-wrap">
        <input type="checkbox" id="something" />
        <div className="switch"></div>
      </div>
    </ToggleContainer>
  );
}
