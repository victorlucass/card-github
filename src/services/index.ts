import { api } from "../lib/axios";

export const service = {
  async getUserGitHub(username: string): Promise<any> {
    return await api.get(`users/${username}`);
  },

  async getReposGitHub(username: string): Promise<any> {
    const res =  await api.get(`users/${username}/repos`);
    return res.data;
  }
};
