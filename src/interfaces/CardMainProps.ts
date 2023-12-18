//name,pushed_at, url, description, default_branch, forks, language
export interface CardMainProps {
  name: string;
  pushed_at: string;
  html_url: string;
  description: string;
  default_branch: string;
  forks: number;
  language: string;
}