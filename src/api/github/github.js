import axios from "axios";
import { GetEnvironment } from"../../utilities/functions";

let envData = GetEnvironment();

export function getRepos() {
  return axios.get(
    `${envData.baseUrl}/api/gitrepo/getallrepos`,
    {
      method: "GET"
    }
  );
}

export function getFilteredRepos(params){
  let query = encodeURIComponent(params);
  return axios.get(
    `${envData.baseUrl}/api/gitrepo/getfilteredrepos?language=${query}`,
    {
      method: "GET"
    }
  );
}