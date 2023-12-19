import { Theme } from "./theme";
import { UserProps } from "./userProps";

export interface ContextsProps {
  useData: UserProps,
  setUseData: React.Dispatch<React.SetStateAction<UserProps>>,
  repos: any[],
  setRepos: React.Dispatch<React.SetStateAction<any[]>>,
  loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>,
}