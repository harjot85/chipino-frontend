import axios from "axios";
import { GetEnvironment } from "../../utilities/functions";

export function getConfiguration() {
  let envData = GetEnvironment();
  return axios.get(
    `${envData.baseUrl}/api/configuration`,
    {
      method: "GET"
    }
  );
}
