import axios from "axios";
import { GetEnvironment } from "../../utilities/functions";

export function getAllTextContent() {
  let envData = GetEnvironment();
  return axios.get(
    `${envData.baseUrl}/api/content`,
    {
      method: "GET"
    }
  );
}
