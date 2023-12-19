import { api } from "../lib/axios";
import { UserProps } from '../interfaces/userProps'
export const service = {
  async getUserGitHub(username: string): Promise<UserProps> {
    const res = await api.get(`users/${username}`);
    return res.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getReposGitHub(username: string): Promise<any> {
    const res =  await api.get(`users/${username}/repos`);
    return res.data;
  }
};
