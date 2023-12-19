import { Code, GitBranch, GitFork, Info, LinkSimple } from "phosphor-react";
import { CardMainProps } from "../../../interfaces/CardMainProps";
import { formatterDatePtBr } from "../../../utils/formatterDatePtBr";
import { removeHyphen } from "../../../utils/removeHyphen";
import { CardMainBranch, CardMainDescription, CardMainForks, CardMainLanguage, CardMainLink, CardMainStyle } from "../styles/index";
export function CardMain({
  name,
  pushed_at,
  html_url,
  description,
  default_branch,
  forks,
  language,
}: CardMainProps) {
  return (
    <CardMainStyle>
      <p>{formatterDatePtBr(pushed_at)}</p>
      <h2>{removeHyphen(name)}</h2>
      <CardMainDescription>
        <Info size={20} weight="fill" />
        {description ? description : "sem descrição"}
      </CardMainDescription>
      <CardMainBranch>
        <GitBranch size={20} weight="fill" />
        <span>{default_branch}</span>
      </CardMainBranch>
      <CardMainForks>
        <GitFork size={20} weight="fill" />
        {forks} forks
      </CardMainForks>
      <CardMainLanguage>
        <Code size={20} weight="fill" />
        {language ? language : "-"}
      </CardMainLanguage>
      <CardMainLink href={html_url} target="_blank" rel="noreferrer">
        <LinkSimple size={20} weight="fill" />
        acessar
      </CardMainLink>
    </CardMainStyle>
  );
}
