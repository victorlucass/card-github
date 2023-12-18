import { api } from "../lib/axios";

export const service = {
  async getUserGitHub(username: string) {
    return await api.get(`users/${username}`);
  },

  async getReposGitHub(username: string) {
    const res =  await api.get(`users/${username}/repos`);
    return res.data;
  }
};
