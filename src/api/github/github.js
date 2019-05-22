import axios from "axios";

export function getRepos() {
  return axios.get(
    "https://api.github.com/users/chipino/repos",
    {
      method: "GET"
    }
  );
}
