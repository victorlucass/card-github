import { api } from "../lib/axios";

export const service = {
  async getUserGitHub(username: string) {
    return await api.get(`users/${username}`);
  },
};
